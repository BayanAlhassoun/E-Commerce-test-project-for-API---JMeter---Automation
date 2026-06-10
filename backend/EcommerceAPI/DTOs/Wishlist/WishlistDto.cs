namespace EcommerceAPI.DTOs.Wishlist
{
    public class WishlistDto
    {
        public int Id { get; set; }
        public List<WishlistItemDto> Items { get; set; } = new List<WishlistItemDto>();
        public int TotalItems { get; set; }
    }

    public class WishlistItemDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string ProductImage { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public decimal DiscountPercentage { get; set; }
        public bool InStock { get; set; }
        public DateTime AddedAt { get; set; }
    }
}
