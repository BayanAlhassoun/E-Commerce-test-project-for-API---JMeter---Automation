using System.ComponentModel.DataAnnotations;

namespace EcommerceAPI.DTOs.Order
{
    public class UpdateOrderStatusDto
    {
        [Required]
        public string Status { get; set; } = string.Empty;
    }
}
