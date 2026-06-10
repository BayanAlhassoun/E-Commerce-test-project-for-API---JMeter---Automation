using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using EcommerceAPI.Services;

namespace EcommerceAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        /// <summary>GET /api/admin/dashboard - Full dashboard stats</summary>
        [HttpGet("dashboard")]
        public async Task<IActionResult> GetDashboard()
        {
            var dashboard = await _adminService.GetDashboardAsync();
            return Ok(dashboard);
        }

        // BUG #3 (Authentication Bug): This endpoint is intended for Admins only,
        // but uses [Authorize] instead of [Authorize(Roles = "Admin")].
        // Any authenticated user (including Customers) can access revenue data.
        /// <summary>GET /api/admin/revenue - Revenue summary (should be Admin only)</summary>
        [HttpGet("revenue")]
        [Authorize]
        public async Task<IActionResult> GetRevenueSummary()
        {
            var summary = await _adminService.GetRevenueSummaryAsync();
            return Ok(summary);
        }
    }
}
