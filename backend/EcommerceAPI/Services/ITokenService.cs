using EcommerceAPI.Models;

namespace EcommerceAPI.Services
{
    public interface ITokenService
    {
        string GenerateAccessToken(User user, IList<string> roles);
        string GenerateRefreshToken();
        string? GetUserIdFromExpiredToken(string token);
    }
}
