using EcommerceAPI.DTOs.Cart;
using EcommerceAPI.Models;
using EcommerceAPI.Repositories;

namespace EcommerceAPI.Services
{
    public class CartService : ICartService
    {
        private readonly ICartRepository _cartRepository;
        private readonly IProductRepository _productRepository;

        public CartService(ICartRepository cartRepository, IProductRepository productRepository)
        {
            _cartRepository = cartRepository;
            _productRepository = productRepository;
        }

        public async Task<CartDto> GetCartAsync(string userId)
        {
            var cart = await _cartRepository.GetByUserIdAsync(userId);
            if (cart == null)
            {
                cart = await _cartRepository.CreateAsync(new Cart { UserId = userId });
            }
            return MapToDto(cart);
        }

        public async Task<CartDto> AddToCartAsync(string userId, AddToCartDto dto)
        {
            var product = await _productRepository.GetByIdAsync(dto.ProductId);
            if (product == null)
                throw new ArgumentException("Product not found.");

            if (product.Stock < dto.Quantity)
                throw new InvalidOperationException($"Insufficient stock. Available: {product.Stock}");

            var cart = await _cartRepository.GetByUserIdAsync(userId)
                       ?? await _cartRepository.CreateAsync(new Cart { UserId = userId });

            var existingItem = await _cartRepository.GetCartItemAsync(cart.Id, dto.ProductId);
            if (existingItem != null)
            {
                existingItem.Quantity += dto.Quantity;
                await _cartRepository.UpdateItemAsync(existingItem);
            }
            else
            {
                await _cartRepository.AddItemAsync(new CartItem
                {
                    CartId = cart.Id,
                    ProductId = dto.ProductId,
                    Quantity = dto.Quantity
                });
            }

            var updatedCart = await _cartRepository.GetByUserIdAsync(userId);
            return MapToDto(updatedCart!);
        }

        public async Task<CartDto> UpdateCartItemAsync(string userId, int cartItemId, UpdateCartItemDto dto)
        {
            var cart = await _cartRepository.GetByUserIdAsync(userId);
            if (cart == null)
                throw new InvalidOperationException("Cart not found.");

            var item = cart.CartItems.FirstOrDefault(ci => ci.Id == cartItemId);
            if (item == null)
                throw new ArgumentException("Cart item not found.");

            item.Quantity = dto.Quantity;
            await _cartRepository.UpdateItemAsync(item);

            var updatedCart = await _cartRepository.GetByUserIdAsync(userId);
            return MapToDto(updatedCart!);
        }

        public async Task<CartDto> RemoveFromCartAsync(string userId, int cartItemId)
        {
            var cart = await _cartRepository.GetByUserIdAsync(userId);
            if (cart == null)
                throw new InvalidOperationException("Cart not found.");

            var item = cart.CartItems.FirstOrDefault(ci => ci.Id == cartItemId);
            if (item == null)
                throw new ArgumentException("Cart item not found.");

            await _cartRepository.RemoveItemAsync(cartItemId);

            var updatedCart = await _cartRepository.GetByUserIdAsync(userId);
            return MapToDto(updatedCart!);
        }

        public async Task<bool> ClearCartAsync(string userId)
        {
            var cart = await _cartRepository.GetByUserIdAsync(userId);
            if (cart == null) return false;
            return await _cartRepository.ClearCartAsync(cart.Id);
        }

        private static CartDto MapToDto(Cart cart)
        {
            var items = cart.CartItems.Select(ci =>
            {
                var unitPrice = ci.Product.Price;
                var discount = ci.Product.DiscountPercentage;

                // BUG #1 (Logic Bug): When quantity > 10, the subtotal calculation uses
                // (quantity - 1) instead of the actual quantity due to a conditional off-by-one error.
                // Expected: subtotal = unitPrice * quantity (after discount)
                // Actual: subtotal = unitPrice * (quantity - 1) when quantity > 10
                var effectiveQty = ci.Quantity > 10 ? ci.Quantity - 1 : ci.Quantity;
                var discountedPrice = discount > 0 ? unitPrice * (1 - discount / 100) : unitPrice;
                var subtotal = discountedPrice * effectiveQty;

                return new CartItemDto
                {
                    Id = ci.Id,
                    ProductId = ci.ProductId,
                    ProductName = ci.Product.Name,
                    ProductImage = ci.Product.ImageUrl,
                    UnitPrice = unitPrice,
                    DiscountPercentage = discount,
                    Quantity = ci.Quantity,
                    Subtotal = Math.Round(subtotal, 2)
                };
            }).ToList();

            return new CartDto
            {
                Id = cart.Id,
                Items = items,
                TotalAmount = Math.Round(items.Sum(i => i.Subtotal), 2),
                TotalItems = cart.CartItems.Sum(ci => ci.Quantity)
            };
        }
    }
}
