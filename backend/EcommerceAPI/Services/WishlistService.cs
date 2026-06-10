using EcommerceAPI.DTOs.Wishlist;
using EcommerceAPI.Models;
using EcommerceAPI.Repositories;

namespace EcommerceAPI.Services
{
    public class WishlistService : IWishlistService
    {
        private readonly IWishlistRepository _wishlistRepository;
        private readonly IProductRepository _productRepository;

        public WishlistService(IWishlistRepository wishlistRepository, IProductRepository productRepository)
        {
            _wishlistRepository = wishlistRepository;
            _productRepository = productRepository;
        }

        public async Task<WishlistDto> GetWishlistAsync(string userId)
        {
            var wishlist = await _wishlistRepository.GetByUserIdAsync(userId);
            if (wishlist == null)
            {
                wishlist = await _wishlistRepository.CreateAsync(new Wishlist { UserId = userId });
            }
            return MapToDto(wishlist);
        }

        public async Task<WishlistDto> AddToWishlistAsync(string userId, int productId)
        {
            if (!await _productRepository.ExistsAsync(productId))
                throw new ArgumentException("Product not found.");

            var wishlist = await _wishlistRepository.GetByUserIdAsync(userId)
                           ?? await _wishlistRepository.CreateAsync(new Wishlist { UserId = userId });

            var existing = await _wishlistRepository.GetItemAsync(wishlist.Id, productId);
            if (existing == null)
            {
                await _wishlistRepository.AddItemAsync(new WishlistItem
                {
                    WishlistId = wishlist.Id,
                    ProductId = productId
                });
            }

            var updated = await _wishlistRepository.GetByUserIdAsync(userId);
            return MapToDto(updated!);
        }

        public async Task<WishlistDto> RemoveFromWishlistAsync(string userId, int productId)
        {
            var wishlist = await _wishlistRepository.GetByUserIdAsync(userId);
            if (wishlist == null)
                throw new InvalidOperationException("Wishlist not found.");

            var item = wishlist.WishlistItems.FirstOrDefault(wi => wi.ProductId == productId);
            if (item == null)
                throw new ArgumentException("Product not in wishlist.");

            await _wishlistRepository.RemoveItemAsync(item.Id);

            var updated = await _wishlistRepository.GetByUserIdAsync(userId);
            return MapToDto(updated!);
        }

        private static WishlistDto MapToDto(Wishlist wishlist)
        {
            var items = wishlist.WishlistItems.Select(wi => new WishlistItemDto
            {
                Id = wi.Id,
                ProductId = wi.ProductId,
                ProductName = wi.Product?.Name ?? "",
                ProductImage = wi.Product?.ImageUrl ?? "",
                Price = wi.Product?.Price ?? 0,
                DiscountPercentage = wi.Product?.DiscountPercentage ?? 0,
                InStock = wi.Product?.Stock > 0,
                AddedAt = wi.AddedAt
            }).ToList();

            return new WishlistDto
            {
                Id = wishlist.Id,
                Items = items,
                TotalItems = items.Count
            };
        }
    }
}
