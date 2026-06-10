using EcommerceAPI.Models;

namespace EcommerceAPI.Repositories
{
    public interface ICartRepository
    {
        Task<Cart?> GetByUserIdAsync(string userId);
        Task<Cart> CreateAsync(Cart cart);
        Task<Cart> UpdateAsync(Cart cart);
        Task<CartItem?> GetCartItemAsync(int cartId, int productId);
        Task<CartItem> AddItemAsync(CartItem cartItem);
        Task<CartItem> UpdateItemAsync(CartItem cartItem);
        Task<bool> RemoveItemAsync(int cartItemId);
        Task<bool> ClearCartAsync(int cartId);
    }
}
