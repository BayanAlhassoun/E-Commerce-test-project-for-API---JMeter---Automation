# 🐛 Intentional Bugs — For Student Debugging Practice

> **IMPORTANT:** This file is for educational purposes only.
> Do **NOT** read this as a "fix guide." The goal is for you to **find and fix** these bugs yourself.
> The fixes are **NOT** provided. Use your debugging skills!

---

## Overview

This project contains **5 carefully designed intentional bugs**. Each bug is isolated, safe, and does not break the entire system. They are designed to mirror real-world bugs you'd find in production code.

Your tasks:
1. Read the bug description carefully
2. Locate the buggy endpoint using the clues
3. Write a test case that **reproduces** the bug
4. Find the root cause in the source code
5. Fix it and verify your fix works

---

## Bug #1 — Logic Bug (Cart API)

**Module:** Cart  
**Severity:** Medium  
**Type:** Off-by-one calculation error  

### Buggy Endpoint
```
GET /api/cart
POST /api/cart/items
```

### Description
The cart total price calculation contains a subtle off-by-one error that activates under a specific condition involving item quantity.

### Expected Behavior
When a user adds 11 units of a product priced at $10.00, the cart total should show:
```
Total = $110.00
```

### Actual (Buggy) Behavior
The cart instead shows an incorrect total that does not match `price × quantity`.

### Reproduction Steps
1. Login as any customer
2. Add any product to cart with a **quantity greater than 10**
3. Check the returned `totalAmount` and individual `subtotal` values
4. Compare with the manually calculated expected total

### Hints
- The bug lives in a **service file** related to the cart
- Look at how `quantity` is used when computing `subtotal`
- The bug only triggers when `quantity > 10`
- Review the mapping logic that builds the cart DTO response

---

## Bug #2 — Validation Bug (Product API)

**Module:** Product  
**Severity:** High  
**Type:** Missing input validation on update  

### Buggy Endpoint
```
PUT /api/products/{id}    ← BUGGY (Admin only)
POST /api/products        ← Works correctly
```

### Description
The `POST /api/products` endpoint correctly rejects negative stock values. However, the `PUT /api/products/{id}` endpoint is missing the same validation, allowing an admin to accidentally (or maliciously) set a product's stock to a negative number.

### Expected Behavior
```json
PUT /api/products/1
{
  "stock": -50,
  ...
}
→ 400 Bad Request: "Stock cannot be negative."
```

### Actual (Buggy) Behavior
```json
PUT /api/products/1
{
  "stock": -50,
  ...
}
→ 200 OK  ← Stock is set to -50 in the database!
```

### Reproduction Steps
1. Login as Admin (admin@test.com / Admin123!)
2. Send `PUT /api/products/1` with `"stock": -100`
3. Check the response — it succeeds
4. Call `GET /api/products/1` to confirm the stock is negative
5. Compare the update service method with the create service method

### Hints
- Both `CreateProductAsync` and `UpdateProductAsync` are in the same **service file**
- One has a guard clause for negative stock, the other does not
- The DTO for update also lacks the `[Range]` attribute that create has

---

## Bug #3 — Authentication Bug (Admin API)

**Module:** Admin / Authorization  
**Severity:** Critical  
**Type:** Insufficient role-based access control  

### Buggy Endpoint
```
GET /api/admin/revenue    ← BUGGY
GET /api/admin/dashboard  ← Works correctly (Admin only)
```

### Description
The `/api/admin/dashboard` endpoint is correctly protected with `[Authorize(Roles = "Admin")]`. However, a different admin endpoint has an incorrect authorization attribute that allows **any authenticated user** (including Customers) to access sensitive revenue data.

### Expected Behavior
```
GET /api/admin/revenue
Authorization: Bearer <customer-token>
→ 403 Forbidden
```

### Actual (Buggy) Behavior
```
GET /api/admin/revenue
Authorization: Bearer <customer-token>
→ 200 OK  ← Customer sees revenue data!
```

### Reproduction Steps
1. Register a new customer account
2. Login as the customer and copy the access token
3. Call `GET /api/admin/revenue` with the customer's token
4. Observe that it returns revenue data instead of 403
5. Compare the authorization attributes on the two admin endpoints

### Hints
- The bug is a **one-word difference** in an attribute
- Look at the `AdminController.cs` file
- Compare `[Authorize]` vs `[Authorize(Roles = "Admin")]`
- The class-level attribute does not protect the method — why?

---

## Bug #4 — Filtering Bug (Product API)

**Module:** Product Search/Filter  
**Severity:** Medium  
**Type:** Case-sensitive string comparison  

### Buggy Endpoint
```
GET /api/products?category=electronics    ← Returns 0 results (BUG)
GET /api/products?category=Electronics   ← Returns results correctly
```

### Description
The product filter by category name uses a **case-sensitive** comparison. This means searching for `"electronics"` returns no products, while `"Electronics"` (exact database case) works correctly.

### Expected Behavior
```
GET /api/products?category=electronics   → Returns all electronics products
GET /api/products?category=ELECTRONICS  → Returns all electronics products  
GET /api/products?category=Electronics  → Returns all electronics products
```

### Actual (Buggy) Behavior
```
GET /api/products?category=electronics  → Returns 0 products (empty)
GET /api/products?category=Electronics  → Returns products correctly
```

### Reproduction Steps
1. Call `GET /api/categories` to see the exact category names
2. Call `GET /api/products?category=Electronics` → should return products
3. Call `GET /api/products?category=electronics` → should return 0 products
4. Call `GET /api/products?category=ELECTRONICS` → should return 0 products
5. Find where the comparison happens in the code

### Hints
- The bug is in a **repository file** for products
- Look at how the `Category` filter is applied in `GetAllAsync`
- The fix involves making the string comparison case-insensitive
- Think about `.ToLower()` or `StringComparison.OrdinalIgnoreCase`

---

## Bug #5 — Order Status Bug (Order API)

**Module:** Orders / Admin  
**Severity:** Medium  
**Type:** Incorrect conditional logic in state machine  

### Buggy Endpoint
```
PUT /api/orders/{id}/status    (Admin only)
```

### Description
Order status should follow this transition flow:
```
Pending → Processing → Shipped → Delivered → Cancelled
```

However, there is a conditional bug that **skips the "Processing" status** for orders containing more than 3 items. When an admin tries to set such an order to "Processing", it jumps directly to "Shipped" instead.

### Expected Behavior
```json
PUT /api/orders/1/status
{
  "status": "Processing"
}
→ Order status becomes "Processing" (for any order, regardless of item count)
```

### Actual (Buggy) Behavior
```json
PUT /api/orders/1/status   ← Order has 4+ items
{
  "status": "Processing"
}
→ Order status becomes "Shipped" (skipped Processing!)
```

### Reproduction Steps
1. Create an order with **more than 3 different products** in the cart
2. Login as Admin
3. Call `GET /api/orders` to find the order ID
4. Call `PUT /api/orders/{id}/status` with body `{"status": "Processing"}`
5. Check the returned order — the status will be "Shipped" instead of "Processing"

### Hints
- The bug is in the **Order service file**
- Look at `UpdateOrderStatusAsync` method
- There is a conditional that checks `order.OrderItems.Count`
- The bug overrides the `dto.Status` value under certain conditions
- Orders with **3 or fewer items** are NOT affected by this bug

---

## Summary Table

| # | Bug Type | Module | Endpoint | Trigger Condition |
|---|----------|--------|----------|-------------------|
| 1 | Logic / Calculation | Cart | `GET /api/cart` | Item quantity > 10 |
| 2 | Missing Validation | Product | `PUT /api/products/{id}` | Negative stock value |
| 3 | Auth / Authorization | Admin | `GET /api/admin/revenue` | Logged in as Customer |
| 4 | Filter / String Comparison | Product | `GET /api/products?category=` | Lowercase category name |
| 5 | State Machine Logic | Order | `PUT /api/orders/{id}/status` | Order with > 3 items |

---

## Testing Approach Suggestions

### For Bug #1 (Cart Total):
- Write a test that adds 11+ items and verifies `subtotal = price × quantity`
- Use Postman or curl to add items and inspect the response

### For Bug #2 (Negative Stock):
- Write a test that sends `stock: -100` via PUT and expects a 400 response
- Compare behavior between POST and PUT endpoints

### For Bug #3 (Auth):
- Write an integration test that calls `/api/admin/revenue` with a customer token
- The test should fail (get 403) but currently passes (gets 200)

### For Bug #4 (Filter):
- Test the same category with different casings
- All casings should return the same results

### For Bug #5 (Order Status):
- Create a test order with 4 items
- Set status to "Processing" and assert the status is "Processing" not "Shipped"

---

> 🎓 **Learning Objective:** Real-world APIs contain exactly these kinds of subtle bugs.
> The ability to find, reproduce, and fix them is a critical professional skill.
> Good luck, and happy debugging!
