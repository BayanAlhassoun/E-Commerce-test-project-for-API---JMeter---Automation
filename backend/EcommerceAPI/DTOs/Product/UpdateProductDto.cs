using System.ComponentModel.DataAnnotations;

namespace EcommerceAPI.DTOs.Product
{
    public class UpdateProductDto
    {
        [Required]
        [StringLength(200)]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "Price must be greater than 0")]
        public decimal Price { get; set; }

        // Note: No [Range] validation on Stock - intentional for educational purposes
        public int Stock { get; set; }

        public string ImageUrl { get; set; } = string.Empty;

        [Required]
        public int CategoryId { get; set; }

        [Range(0, 100)]
        public decimal DiscountPercentage { get; set; } = 0;

        public bool IsActive { get; set; } = true;
    }
}
