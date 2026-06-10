using EcommerceAPI.DTOs.Product;
using EcommerceAPI.Models;

namespace EcommerceAPI.Repositories
{
    public interface IProductRepository
    {
        Task<PagedResultDto<Product>> GetAllAsync(ProductFilterDto filter);
        Task<Product?> GetByIdAsync(int id);
        Task<Product> CreateAsync(Product product);
        Task<Product> UpdateAsync(Product product);
        Task<bool> DeleteAsync(int id);
        Task<bool> ExistsAsync(int id);
        Task<IEnumerable<Product>> GetByCategoryAsync(string categoryName);
        Task<IEnumerable<Product>> GetLowStockAsync(int threshold = 10);
    }
}
