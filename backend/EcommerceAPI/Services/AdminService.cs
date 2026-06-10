using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using EcommerceAPI.Data;
using EcommerceAPI.DTOs.Admin;
using EcommerceAPI.Models;

namespace EcommerceAPI.Services
{
    public class AdminService : IAdminService
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<User> _userManager;

        public AdminService(ApplicationDbContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<DashboardDto> GetDashboardAsync()
        {
            var totalUsers = await _userManager.Users.CountAsync();
            var totalOrders = await _context.Orders.CountAsync();
            var totalProducts = await _context.Products.CountAsync(p => p.IsActive);
            var totalCategories = await _context.Categories.CountAsync(c => c.IsActive);
            var totalRevenue = await _context.Orders
                .Where(o => o.Status != "Cancelled")
                .SumAsync(o => o.TotalAmount);

            var now = DateTime.UtcNow;
            var monthStart = new DateTime(now.Year, now.Month, 1);
            var monthlyRevenue = await _context.Orders
                .Where(o => o.CreatedAt >= monthStart && o.Status != "Cancelled")
                .SumAsync(o => o.TotalAmount);

            var pendingOrders = await _context.Orders.CountAsync(o => o.Status == "Pending");
            var lowStockProducts = await _context.Products.CountAsync(p => p.IsActive && p.Stock <= 10);

            var recentOrders = await _context.Orders
                .Include(o => o.User)
                .OrderByDescending(o => o.CreatedAt)
                .Take(10)
                .Select(o => new RecentOrderDto
                {
                    OrderId = o.Id,
                    CustomerName = $"{o.User.FirstName} {o.User.LastName}",
                    CustomerEmail = o.User.Email!,
                    Amount = o.TotalAmount,
                    Status = o.Status,
                    CreatedAt = o.CreatedAt
                })
                .ToListAsync();

            var topProducts = await _context.OrderItems
                .Include(oi => oi.Product)
                .GroupBy(oi => new { oi.ProductId, oi.Product.Name })
                .Select(g => new TopProductDto
                {
                    ProductId = g.Key.ProductId,
                    ProductName = g.Key.Name,
                    TotalSold = g.Sum(oi => oi.Quantity),
                    Revenue = g.Sum(oi => (oi.UnitPrice - oi.Discount) * oi.Quantity)
                })
                .OrderByDescending(p => p.TotalSold)
                .Take(5)
                .ToListAsync();

            return new DashboardDto
            {
                TotalUsers = totalUsers,
                TotalOrders = totalOrders,
                TotalProducts = totalProducts,
                TotalCategories = totalCategories,
                TotalRevenue = totalRevenue,
                MonthlyRevenue = monthlyRevenue,
                PendingOrders = pendingOrders,
                LowStockProducts = lowStockProducts,
                RecentOrders = recentOrders,
                TopProducts = topProducts
            };
        }

        public async Task<RevenueSummaryDto> GetRevenueSummaryAsync()
        {
            var now = DateTime.UtcNow;
            var monthStart = new DateTime(now.Year, now.Month, 1);
            var weekStart = now.AddDays(-7);

            var totalRevenue = await _context.Orders
                .Where(o => o.Status != "Cancelled")
                .SumAsync(o => o.TotalAmount);

            var monthlyRevenue = await _context.Orders
                .Where(o => o.CreatedAt >= monthStart && o.Status != "Cancelled")
                .SumAsync(o => o.TotalAmount);

            var weeklyRevenue = await _context.Orders
                .Where(o => o.CreatedAt >= weekStart && o.Status != "Cancelled")
                .SumAsync(o => o.TotalAmount);

            var monthlyBreakdown = await _context.Orders
                .Where(o => o.CreatedAt >= now.AddMonths(-12) && o.Status != "Cancelled")
                .GroupBy(o => new { o.CreatedAt.Year, o.CreatedAt.Month })
                .Select(g => new { Month = $"{g.Key.Year}-{g.Key.Month:D2}", Revenue = g.Sum(o => o.TotalAmount) })
                .ToDictionaryAsync(x => x.Month, x => x.Revenue);

            return new RevenueSummaryDto
            {
                TotalRevenue = totalRevenue,
                MonthlyRevenue = monthlyRevenue,
                WeeklyRevenue = weeklyRevenue,
                MonthlyBreakdown = monthlyBreakdown
            };
        }
    }
}
