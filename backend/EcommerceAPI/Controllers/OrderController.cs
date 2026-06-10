using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using EcommerceAPI.DTOs.Order;
using EcommerceAPI.Services;

namespace EcommerceAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        private string GetUserId() => User.FindFirst(ClaimTypes.NameIdentifier)?.Value!;
        private bool IsAdmin() => User.IsInRole("Admin");

        /// <summary>GET /api/orders - Admin: all orders, Customer: own orders</summary>
        [HttpGet]
        public async Task<IActionResult> GetOrders()
        {
            if (IsAdmin())
            {
                var allOrders = await _orderService.GetAllOrdersAsync();
                return Ok(allOrders);
            }
            var userOrders = await _orderService.GetUserOrdersAsync(GetUserId());
            return Ok(userOrders);
        }

        /// <summary>GET /api/orders/{id}</summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrder(int id)
        {
            var order = await _orderService.GetOrderByIdAsync(id, GetUserId(), IsAdmin());
            if (order == null) return NotFound(new { message = "Order not found." });
            return Ok(order);
        }

        /// <summary>POST /api/orders - Create order from cart</summary>
        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] CreateOrderDto dto)
        {
            var order = await _orderService.CreateOrderAsync(GetUserId(), dto);
            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
        }

        /// <summary>PUT /api/orders/{id}/status - Admin only</summary>
        [HttpPut("{id}/status")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateOrderStatus(int id, [FromBody] UpdateOrderStatusDto dto)
        {
            var order = await _orderService.UpdateOrderStatusAsync(id, dto);
            if (order == null) return NotFound(new { message = "Order not found." });
            return Ok(order);
        }
    }
}
