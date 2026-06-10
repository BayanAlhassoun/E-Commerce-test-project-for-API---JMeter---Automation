using EcommerceAPI.DTOs.Cart;

namespace EcommerceAPI.Services
{
    public interface ICartService
    {
        Task<CartDto> GetCartAsync(string userId);
        Task<CartDto> AddToCartAsync(string userId, AddToCartDto dto);
        Task<CartDto> UpdateCartItemAsync(string userId, int cartItemId, UpdateCartItemDto dto);
        Task<CartDto> RemoveFromCartAsync(string userId, int cartItemId);
        Task<bool> ClearCartAsync(string userId);
    }
}
