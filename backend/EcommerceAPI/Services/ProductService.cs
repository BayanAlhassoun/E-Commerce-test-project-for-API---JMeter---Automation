using EcommerceAPI.DTOs.Product;
using EcommerceAPI.Models;
using EcommerceAPI.Repositories;

namespace EcommerceAPI.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;

        public ProductService(IProductRepository productRepository, ICategoryRepository categoryRepository)
        {
            _productRepository = productRepository;
            _categoryRepository = categoryRepository;
        }

        public async Task<PagedResultDto<ProductDto>> GetAllProductsAsync(ProductFilterDto filter)
        {
            var result = await _productRepository.GetAllAsync(filter);
            return new PagedResultDto<ProductDto>
            {
                Items = result.Items.Select(MapToDto),
                TotalCount = result.TotalCount,
                Page = result.Page,
                PageSize = result.PageSize
            };
        }

        public async Task<ProductDto?> GetProductByIdAsync(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);
            return product == null ? null : MapToDto(product);
        }

        public async Task<ProductDto> CreateProductAsync(CreateProductDto dto)
        {
            if (!await _categoryRepository.ExistsAsync(dto.CategoryId))
                throw new ArgumentException("Category not found.");

            if (dto.Stock < 0)
                throw new ArgumentException("Stock cannot be negative.");

            var product = new Product
            {
                Name = dto.Name,
                Description = dto.Description,
                Price = dto.Price,
                Stock = dto.Stock,
                ImageUrl = dto.ImageUrl,
                CategoryId = dto.CategoryId,
                DiscountPercentage = dto.DiscountPercentage
            };

            var created = await _productRepository.CreateAsync(product);
            var full = await _productRepository.GetByIdAsync(created.Id);
            return MapToDto(full!);
        }

        public async Task<ProductDto?> UpdateProductAsync(int id, UpdateProductDto dto)
        {
            var product = await _productRepository.GetByIdAsync(id);
            if (product == null) return null;

            if (!await _categoryRepository.ExistsAsync(dto.CategoryId))
                throw new ArgumentException("Category not found.");

            // BUG #2 (Validation Bug): Missing validation for negative stock in update.
            // CreateProductAsync validates Stock >= 0 but UpdateProductAsync does not.
            // Students can set Stock = -50 via PUT /api/products/{id}.
            product.Name = dto.Name;
            product.Description = dto.Description;
            product.Price = dto.Price;
            product.Stock = dto.Stock;
            product.ImageUrl = dto.ImageUrl;
            product.CategoryId = dto.CategoryId;
            product.DiscountPercentage = dto.DiscountPercentage;
            product.IsActive = dto.IsActive;

            var updated = await _productRepository.UpdateAsync(product);
            var full = await _productRepository.GetByIdAsync(updated.Id);
            return MapToDto(full!);
        }

        public async Task<bool> DeleteProductAsync(int id)
        {
            return await _productRepository.DeleteAsync(id);
        }

        private static ProductDto MapToDto(Product product)
        {
            var discountedPrice = product.DiscountPercentage > 0
                ? product.Price * (1 - product.DiscountPercentage / 100)
                : product.Price;

            return new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                DiscountedPrice = Math.Round(discountedPrice, 2),
                Stock = product.Stock,
                ImageUrl = product.ImageUrl,
                CategoryId = product.CategoryId,
                CategoryName = product.Category?.Name ?? "",
                DiscountPercentage = product.DiscountPercentage,
                IsActive = product.IsActive,
                CreatedAt = product.CreatedAt,
                AverageRating = product.Reviews.Any() ? product.Reviews.Average(r => r.Rating) : 0,
                ReviewCount = product.Reviews.Count
            };
        }
    }
}
