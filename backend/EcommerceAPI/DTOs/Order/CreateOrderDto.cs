using System.ComponentModel.DataAnnotations;

namespace EcommerceAPI.DTOs.Order
{
    public class CreateOrderDto
    {
        [Required]
        public string ShippingAddress { get; set; } = string.Empty;

        [Required]
        public string PaymentMethod { get; set; } = "Card";
    }
}
