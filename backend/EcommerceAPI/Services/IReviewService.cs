using EcommerceAPI.DTOs.Review;

namespace EcommerceAPI.Services
{
    public interface IReviewService
    {
        Task<IEnumerable<ReviewDto>> GetProductReviewsAsync(int productId);
        Task<ReviewDto> AddReviewAsync(string userId, CreateReviewDto dto);
        Task<bool> DeleteReviewAsync(int reviewId, string userId, bool isAdmin);
    }
}
