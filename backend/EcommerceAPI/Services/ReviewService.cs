using EcommerceAPI.DTOs.Review;
using EcommerceAPI.Models;
using EcommerceAPI.Repositories;

namespace EcommerceAPI.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;
        private readonly IProductRepository _productRepository;

        public ReviewService(IReviewRepository reviewRepository, IProductRepository productRepository)
        {
            _reviewRepository = reviewRepository;
            _productRepository = productRepository;
        }

        public async Task<IEnumerable<ReviewDto>> GetProductReviewsAsync(int productId)
        {
            var reviews = await _reviewRepository.GetByProductIdAsync(productId);
            return reviews.Select(MapToDto);
        }

        public async Task<ReviewDto> AddReviewAsync(string userId, CreateReviewDto dto)
        {
            if (!await _productRepository.ExistsAsync(dto.ProductId))
                throw new ArgumentException("Product not found.");

            var existing = await _reviewRepository.GetByUserAndProductAsync(userId, dto.ProductId);
            if (existing != null)
                throw new InvalidOperationException("You have already reviewed this product.");

            var review = new Review
            {
                ProductId = dto.ProductId,
                UserId = userId,
                Rating = dto.Rating,
                Comment = dto.Comment
            };

            var created = await _reviewRepository.CreateAsync(review);
            var full = await _reviewRepository.GetByIdAsync(created.Id);
            return MapToDto(full!);
        }

        public async Task<bool> DeleteReviewAsync(int reviewId, string userId, bool isAdmin)
        {
            var review = await _reviewRepository.GetByIdAsync(reviewId);
            if (review == null) return false;

            if (!isAdmin && review.UserId != userId)
                throw new UnauthorizedAccessException("You can only delete your own reviews.");

            return await _reviewRepository.DeleteAsync(reviewId);
        }

        private static ReviewDto MapToDto(Review review)
        {
            return new ReviewDto
            {
                Id = review.Id,
                ProductId = review.ProductId,
                UserId = review.UserId,
                UserName = review.User != null ? $"{review.User.FirstName} {review.User.LastName}" : "Anonymous",
                Rating = review.Rating,
                Comment = review.Comment,
                CreatedAt = review.CreatedAt
            };
        }
    }
}
