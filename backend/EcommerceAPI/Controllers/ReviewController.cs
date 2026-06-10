using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using EcommerceAPI.DTOs.Review;
using EcommerceAPI.Services;

namespace EcommerceAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        private string GetUserId() => User.FindFirst(ClaimTypes.NameIdentifier)?.Value!;
        private bool IsAdmin() => User.IsInRole("Admin");

        /// <summary>GET /api/reviews/product/{productId}</summary>
        [HttpGet("product/{productId}")]
        public async Task<IActionResult> GetProductReviews(int productId)
        {
            var reviews = await _reviewService.GetProductReviewsAsync(productId);
            return Ok(reviews);
        }

        /// <summary>POST /api/reviews</summary>
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddReview([FromBody] CreateReviewDto dto)
        {
            var review = await _reviewService.AddReviewAsync(GetUserId(), dto);
            return Ok(review);
        }

        /// <summary>DELETE /api/reviews/{id}</summary>
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteReview(int id)
        {
            var deleted = await _reviewService.DeleteReviewAsync(id, GetUserId(), IsAdmin());
            if (!deleted) return NotFound(new { message = "Review not found." });
            return Ok(new { message = "Review deleted successfully." });
        }
    }
}
