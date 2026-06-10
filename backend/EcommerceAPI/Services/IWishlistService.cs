using EcommerceAPI.DTOs.Wishlist;

namespace EcommerceAPI.Services
{
    public interface IWishlistService
    {
        Task<WishlistDto> GetWishlistAsync(string userId);
        Task<WishlistDto> AddToWishlistAsync(string userId, int productId);
        Task<WishlistDto> RemoveFromWishlistAsync(string userId, int productId);
    }
}
