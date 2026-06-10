using EcommerceAPI.Models;

namespace EcommerceAPI.Repositories
{
    public interface IReviewRepository
    {
        Task<IEnumerable<Review>> GetByProductIdAsync(int productId);
        Task<Review?> GetByIdAsync(int id);
        Task<Review?> GetByUserAndProductAsync(string userId, int productId);
        Task<Review> CreateAsync(Review review);
        Task<bool> DeleteAsync(int id);
    }
}
