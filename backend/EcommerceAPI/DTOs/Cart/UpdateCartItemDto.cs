using System.ComponentModel.DataAnnotations;

namespace EcommerceAPI.DTOs.Cart
{
    public class UpdateCartItemDto
    {
        [Required]
        [Range(1, 100)]
        public int Quantity { get; set; }
    }
}
