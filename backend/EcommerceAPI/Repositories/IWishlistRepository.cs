using EcommerceAPI.Models;

namespace EcommerceAPI.Repositories
{
    public interface IWishlistRepository
    {
        Task<Wishlist?> GetByUserIdAsync(string userId);
        Task<Wishlist> CreateAsync(Wishlist wishlist);
        Task<WishlistItem?> GetItemAsync(int wishlistId, int productId);
        Task<WishlistItem> AddItemAsync(WishlistItem item);
        Task<bool> RemoveItemAsync(int itemId);
    }
}
