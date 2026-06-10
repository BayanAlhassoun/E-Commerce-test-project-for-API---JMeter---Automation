using Microsoft.AspNetCore.Identity;
using EcommerceAPI.Models;

namespace EcommerceAPI.Data
{
    public static class DataSeeder
    {
        public static async Task SeedAsync(IServiceProvider serviceProvider)
        {
            var userManager = serviceProvider.GetRequiredService<UserManager<User>>();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var context = serviceProvider.GetRequiredService<ApplicationDbContext>();

            // Seed roles
            var roles = new[] { "Admin", "Customer" };
            foreach (var role in roles)
            {
                if (!await roleManager.RoleExistsAsync(role))
                    await roleManager.CreateAsync(new IdentityRole(role));
            }

            // Seed admin user
            const string adminEmail = "admin@test.com";
            if (await userManager.FindByEmailAsync(adminEmail) == null)
            {
                var admin = new User
                {
                    FirstName = "Admin",
                    LastName = "User",
                    Email = adminEmail,
                    UserName = adminEmail,
                    EmailConfirmed = true
                };
                var result = await userManager.CreateAsync(admin, "Admin123!");
                if (result.Succeeded)
                    await userManager.AddToRoleAsync(admin, "Admin");
            }

            // Seed demo customer
            const string customerEmail = "customer@test.com";
            if (await userManager.FindByEmailAsync(customerEmail) == null)
            {
                var customer = new User
                {
                    FirstName = "John",
                    LastName = "Doe",
                    Email = customerEmail,
                    UserName = customerEmail,
                    EmailConfirmed = true
                };
                var result = await userManager.CreateAsync(customer, "Customer123!");
                if (result.Succeeded)
                    await userManager.AddToRoleAsync(customer, "Customer");
            }

            // Seed categories
            if (!context.Categories.Any())
            {
                var categories = new List<Category>
                {
                    new() { Name = "Electronics", Description = "Electronic devices and accessories", ImageUrl = "https://picsum.photos/seed/electronics/400/300" },
                    new() { Name = "Clothing", Description = "Fashion and apparel for all seasons", ImageUrl = "https://picsum.photos/seed/clothing/400/300" },
                    new() { Name = "Books", Description = "Books, textbooks and educational materials", ImageUrl = "https://picsum.photos/seed/books/400/300" },
                    new() { Name = "Sports", Description = "Sports equipment and fitness gear", ImageUrl = "https://picsum.photos/seed/sports/400/300" },
                    new() { Name = "Home & Kitchen", Description = "Household items and kitchen appliances", ImageUrl = "https://picsum.photos/seed/home/400/300" },
                    new() { Name = "Beauty", Description = "Beauty and personal care products", ImageUrl = "https://picsum.photos/seed/beauty/400/300" }
                };
                context.Categories.AddRange(categories);
                await context.SaveChangesAsync();
            }

            // Seed products
            if (!context.Products.Any())
            {
                var categories = context.Categories.ToList();
                var electronics = categories.First(c => c.Name == "Electronics");
                var clothing = categories.First(c => c.Name == "Clothing");
                var books = categories.First(c => c.Name == "Books");
                var sports = categories.First(c => c.Name == "Sports");
                var home = categories.First(c => c.Name == "Home & Kitchen");
                var beauty = categories.First(c => c.Name == "Beauty");

                var products = new List<Product>
                {
                    // Electronics
                    new() { Name = "Laptop Pro 15\"", Description = "High-performance laptop with Intel Core i7, 16GB RAM, 512GB SSD", Price = 1299.99m, Stock = 25, CategoryId = electronics.Id, DiscountPercentage = 10, ImageUrl = "https://picsum.photos/seed/laptop/400/300" },
                    new() { Name = "Wireless Bluetooth Headphones", Description = "Premium noise-cancelling headphones with 30hr battery life", Price = 249.99m, Stock = 50, CategoryId = electronics.Id, DiscountPercentage = 15, ImageUrl = "https://picsum.photos/seed/headphones/400/300" },
                    new() { Name = "Smartphone X12", Description = "Latest flagship smartphone with 108MP camera, 5G capable", Price = 899.99m, Stock = 30, CategoryId = electronics.Id, DiscountPercentage = 5, ImageUrl = "https://picsum.photos/seed/phone/400/300" },
                    new() { Name = "4K Smart TV 55\"", Description = "Ultra HD 4K Smart TV with HDR and built-in streaming apps", Price = 649.99m, Stock = 15, CategoryId = electronics.Id, DiscountPercentage = 20, ImageUrl = "https://picsum.photos/seed/tv/400/300" },
                    new() { Name = "Mechanical Keyboard", Description = "RGB mechanical gaming keyboard with tactile switches", Price = 129.99m, Stock = 40, CategoryId = electronics.Id, DiscountPercentage = 0, ImageUrl = "https://picsum.photos/seed/keyboard/400/300" },

                    // Clothing
                    new() { Name = "Classic Denim Jacket", Description = "Timeless denim jacket, available in multiple sizes", Price = 89.99m, Stock = 60, CategoryId = clothing.Id, DiscountPercentage = 25, ImageUrl = "https://picsum.photos/seed/jacket/400/300" },
                    new() { Name = "Running Shoes Pro", Description = "Lightweight performance running shoes with cushioned sole", Price = 119.99m, Stock = 45, CategoryId = clothing.Id, DiscountPercentage = 0, ImageUrl = "https://picsum.photos/seed/shoes/400/300" },
                    new() { Name = "Casual Cotton T-Shirt", Description = "Comfortable 100% cotton t-shirt, available in 8 colors", Price = 29.99m, Stock = 100, CategoryId = clothing.Id, DiscountPercentage = 10, ImageUrl = "https://picsum.photos/seed/tshirt/400/300" },
                    new() { Name = "Slim Fit Chinos", Description = "Modern slim fit chinos, wrinkle-resistant fabric", Price = 59.99m, Stock = 70, CategoryId = clothing.Id, DiscountPercentage = 0, ImageUrl = "https://picsum.photos/seed/chinos/400/300" },

                    // Books
                    new() { Name = "Clean Code: A Handbook", Description = "A Handbook of Agile Software Craftsmanship by Robert C. Martin", Price = 39.99m, Stock = 80, CategoryId = books.Id, DiscountPercentage = 0, ImageUrl = "https://picsum.photos/seed/cleancode/400/300" },
                    new() { Name = "Design Patterns", Description = "Elements of Reusable Object-Oriented Software by Gang of Four", Price = 44.99m, Stock = 65, CategoryId = books.Id, DiscountPercentage = 5, ImageUrl = "https://picsum.photos/seed/designpatterns/400/300" },
                    new() { Name = "The Pragmatic Programmer", Description = "Your Journey to Mastery by David Thomas and Andrew Hunt", Price = 49.99m, Stock = 55, CategoryId = books.Id, DiscountPercentage = 10, ImageUrl = "https://picsum.photos/seed/pragmatic/400/300" },
                    new() { Name = "Introduction to Algorithms", Description = "Comprehensive textbook on algorithms and data structures", Price = 79.99m, Stock = 40, CategoryId = books.Id, DiscountPercentage = 0, ImageUrl = "https://picsum.photos/seed/algorithms/400/300" },

                    // Sports
                    new() { Name = "Yoga Mat Premium", Description = "Non-slip yoga mat, extra thick 6mm, with carrying strap", Price = 49.99m, Stock = 75, CategoryId = sports.Id, DiscountPercentage = 0, ImageUrl = "https://picsum.photos/seed/yogamat/400/300" },
                    new() { Name = "Adjustable Dumbbells Set", Description = "25kg adjustable dumbbell set with storage rack", Price = 199.99m, Stock = 20, CategoryId = sports.Id, DiscountPercentage = 15, ImageUrl = "https://picsum.photos/seed/dumbbells/400/300" },
                    new() { Name = "Mountain Bicycle", Description = "21-speed mountain bike with front suspension fork", Price = 549.99m, Stock = 10, CategoryId = sports.Id, DiscountPercentage = 10, ImageUrl = "https://picsum.photos/seed/bicycle/400/300" },
                    new() { Name = "Swimming Goggles Pro", Description = "Anti-fog competition swimming goggles, UV protection", Price = 24.99m, Stock = 90, CategoryId = sports.Id, DiscountPercentage = 0, ImageUrl = "https://picsum.photos/seed/goggles/400/300" },

                    // Home & Kitchen
                    new() { Name = "Air Fryer XL", Description = "6-quart digital air fryer with 8 preset cooking modes", Price = 89.99m, Stock = 35, CategoryId = home.Id, DiscountPercentage = 20, ImageUrl = "https://picsum.photos/seed/airfryer/400/300" },
                    new() { Name = "Coffee Maker Deluxe", Description = "12-cup programmable coffee maker with built-in grinder", Price = 149.99m, Stock = 28, CategoryId = home.Id, DiscountPercentage = 0, ImageUrl = "https://picsum.photos/seed/coffee/400/300" },
                    new() { Name = "Non-Stick Cookware Set", Description = "10-piece ceramic non-stick cookware set, oven safe to 450°F", Price = 129.99m, Stock = 22, CategoryId = home.Id, DiscountPercentage = 30, ImageUrl = "https://picsum.photos/seed/cookware/400/300" },
                    new() { Name = "Robot Vacuum Cleaner", Description = "Smart robot vacuum with mapping technology, auto-recharge", Price = 349.99m, Stock = 18, CategoryId = home.Id, DiscountPercentage = 10, ImageUrl = "https://picsum.photos/seed/vacuum/400/300" },

                    // Beauty
                    new() { Name = "Vitamin C Serum", Description = "20% Vitamin C brightening serum, anti-aging formula", Price = 34.99m, Stock = 85, CategoryId = beauty.Id, DiscountPercentage = 0, ImageUrl = "https://picsum.photos/seed/serum/400/300" },
                    new() { Name = "Electric Toothbrush Pro", Description = "Sonic electric toothbrush with 4 cleaning modes and timer", Price = 79.99m, Stock = 45, CategoryId = beauty.Id, DiscountPercentage = 15, ImageUrl = "https://picsum.photos/seed/toothbrush/400/300" },
                    new() { Name = "Hair Dryer Professional", Description = "2000W ionic hair dryer with diffuser and concentrator", Price = 69.99m, Stock = 38, CategoryId = beauty.Id, DiscountPercentage = 0, ImageUrl = "https://picsum.photos/seed/hairdryer/400/300" }
                };

                context.Products.AddRange(products);
                await context.SaveChangesAsync();
            }
        }
    }
}
