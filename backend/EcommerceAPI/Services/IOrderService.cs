using EcommerceAPI.DTOs.Order;

namespace EcommerceAPI.Services
{
    public interface IOrderService
    {
        Task<IEnumerable<OrderDto>> GetAllOrdersAsync();
        Task<IEnumerable<OrderDto>> GetUserOrdersAsync(string userId);
        Task<OrderDto?> GetOrderByIdAsync(int id, string userId, bool isAdmin);
        Task<OrderDto> CreateOrderAsync(string userId, CreateOrderDto dto);
        Task<OrderDto?> UpdateOrderStatusAsync(int id, UpdateOrderStatusDto dto);
    }
}
