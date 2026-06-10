using EcommerceAPI.DTOs.Order;
using EcommerceAPI.Models;
using EcommerceAPI.Repositories;

namespace EcommerceAPI.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly ICartRepository _cartRepository;
        private readonly IProductRepository _productRepository;

        public OrderService(IOrderRepository orderRepository, ICartRepository cartRepository,
            IProductRepository productRepository)
        {
            _orderRepository = orderRepository;
            _cartRepository = cartRepository;
            _productRepository = productRepository;
        }

        public async Task<IEnumerable<OrderDto>> GetAllOrdersAsync()
        {
            var orders = await _orderRepository.GetAllAsync();
            return orders.Select(MapToDto);
        }

        public async Task<IEnumerable<OrderDto>> GetUserOrdersAsync(string userId)
        {
            var orders = await _orderRepository.GetByUserIdAsync(userId);
            return orders.Select(MapToDto);
        }

        public async Task<OrderDto?> GetOrderByIdAsync(int id, string userId, bool isAdmin)
        {
            Order? order;
            if (isAdmin)
                order = await _orderRepository.GetByIdAsync(id);
            else
                order = await _orderRepository.GetByIdAndUserAsync(id, userId);

            return order == null ? null : MapToDto(order);
        }

        public async Task<OrderDto> CreateOrderAsync(string userId, CreateOrderDto dto)
        {
            var cart = await _cartRepository.GetByUserIdAsync(userId);
            if (cart == null || !cart.CartItems.Any())
                throw new InvalidOperationException("Cart is empty.");

            var order = new Order
            {
                UserId = userId,
                ShippingAddress = dto.ShippingAddress,
                PaymentMethod = dto.PaymentMethod,
                Status = "Pending"
            };

            decimal total = 0;
            foreach (var cartItem in cart.CartItems)
            {
                var product = await _productRepository.GetByIdAsync(cartItem.ProductId);
                if (product == null) continue;

                if (product.Stock < cartItem.Quantity)
                    throw new InvalidOperationException($"Insufficient stock for '{product.Name}'.");

                var unitPrice = product.Price;
                var discount = product.DiscountPercentage > 0
                    ? unitPrice * product.DiscountPercentage / 100
                    : 0;
                var lineTotal = (unitPrice - discount) * cartItem.Quantity;
                total += lineTotal;

                order.OrderItems.Add(new OrderItem
                {
                    ProductId = cartItem.ProductId,
                    Quantity = cartItem.Quantity,
                    UnitPrice = unitPrice,
                    Discount = discount
                });

                product.Stock -= cartItem.Quantity;
                await _productRepository.UpdateAsync(product);
            }

            order.TotalAmount = Math.Round(total, 2);
            var created = await _orderRepository.CreateAsync(order);
            await _cartRepository.ClearCartAsync(cart.Id);

            var full = await _orderRepository.GetByIdAsync(created.Id);
            return MapToDto(full!);
        }

        public async Task<OrderDto?> UpdateOrderStatusAsync(int id, UpdateOrderStatusDto dto)
        {
            var order = await _orderRepository.GetByIdAsync(id);
            if (order == null) return null;

            var validStatuses = new[] { "Pending", "Processing", "Shipped", "Delivered", "Cancelled" };
            if (!validStatuses.Contains(dto.Status))
                throw new ArgumentException($"Invalid status. Valid values: {string.Join(", ", validStatuses)}");

            // BUG #5 (Order Status Bug): When an order has more than 3 items and is currently
            // "Pending", updating the status skips "Processing" and jumps directly to "Shipped".
            // Expected: Pending -> Processing -> Shipped -> Delivered
            // Actual: Pending -> Shipped (when order has > 3 items)
            if (order.Status == "Pending" && order.OrderItems.Count > 3)
            {
                order.Status = "Shipped";
            }
            else
            {
                order.Status = dto.Status;
            }

            var updated = await _orderRepository.UpdateAsync(order);
            var full = await _orderRepository.GetByIdAsync(updated.Id);
            return MapToDto(full!);
        }

        private static OrderDto MapToDto(Order order)
        {
            return new OrderDto
            {
                Id = order.Id,
                UserId = order.UserId,
                UserEmail = order.User?.Email ?? "",
                UserName = order.User != null ? $"{order.User.FirstName} {order.User.LastName}" : "",
                Status = order.Status,
                TotalAmount = order.TotalAmount,
                ShippingAddress = order.ShippingAddress,
                PaymentMethod = order.PaymentMethod,
                CreatedAt = order.CreatedAt,
                UpdatedAt = order.UpdatedAt,
                Items = order.OrderItems.Select(oi => new OrderItemDto
                {
                    Id = oi.Id,
                    ProductId = oi.ProductId,
                    ProductName = oi.Product?.Name ?? "",
                    ProductImage = oi.Product?.ImageUrl ?? "",
                    Quantity = oi.Quantity,
                    UnitPrice = oi.UnitPrice,
                    Discount = oi.Discount,
                    Subtotal = Math.Round((oi.UnitPrice - oi.Discount) * oi.Quantity, 2)
                }).ToList()
            };
        }
    }
}
