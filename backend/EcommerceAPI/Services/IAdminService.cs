using EcommerceAPI.DTOs.Admin;

namespace EcommerceAPI.Services
{
    public interface IAdminService
    {
        Task<DashboardDto> GetDashboardAsync();
        Task<RevenueSummaryDto> GetRevenueSummaryAsync();
    }
}
