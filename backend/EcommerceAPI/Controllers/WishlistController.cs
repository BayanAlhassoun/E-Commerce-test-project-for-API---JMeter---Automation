using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using EcommerceAPI.Services;

namespace EcommerceAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class WishlistController : ControllerBase
    {
        private readonly IWishlistService _wishlistService;

        public WishlistController(IWishlistService wishlistService)
        {
            _wishlistService = wishlistService;
        }

        private string GetUserId() => User.FindFirst(ClaimTypes.NameIdentifier)?.Value!;

        /// <summary>GET /api/wishlist</summary>
        [HttpGet]
        public async Task<IActionResult> GetWishlist()
        {
            var wishlist = await _wishlistService.GetWishlistAsync(GetUserId());
            return Ok(wishlist);
        }

        /// <summary>POST /api/wishlist/{productId}</summary>
        [HttpPost("{productId}")]
        public async Task<IActionResult> AddToWishlist(int productId)
        {
            var wishlist = await _wishlistService.AddToWishlistAsync(GetUserId(), productId);
            return Ok(wishlist);
        }

        /// <summary>DELETE /api/wishlist/{productId}</summary>
        [HttpDelete("{productId}")]
        public async Task<IActionResult> RemoveFromWishlist(int productId)
        {
            var wishlist = await _wishlistService.RemoveFromWishlistAsync(GetUserId(), productId);
            return Ok(wishlist);
        }
    }
}
