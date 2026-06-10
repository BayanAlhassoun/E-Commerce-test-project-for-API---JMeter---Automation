# EduShop — Educational Full-Stack E-Commerce Platform

> A production-like e-commerce application built for university students to practice full-stack development, API debugging, and real-world engineering skills.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | ASP.NET Core 8 Web API, Clean Architecture |
| ORM | Entity Framework Core 8 |
| Database | PostgreSQL 16 |
| Auth | JWT Access Tokens + Refresh Tokens |
| Frontend | Angular 17 (Standalone Components) |
| Styling | Bootstrap 5 + Bootstrap Icons |
| Containerization | Docker + Docker Compose |

---

## Default Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@test.com | Admin123! |
| Customer | customer@test.com | Customer123! |

---

## Quick Start (Recommended: Docker)

### Prerequisites
- Docker Desktop installed and running

### Run Everything with One Command
```bash
cd "QA Project"
docker compose up --build
```

Services will be available at:
- **Frontend:** http://localhost:4200
- **Backend API:** http://localhost:5000
- **Swagger UI:** http://localhost:5000/swagger
- **PostgreSQL:** localhost:5432

---

## Manual Setup (Without Docker)

### Backend Prerequisites
- .NET 8 SDK
- PostgreSQL 16 running locally

### 1. Configure Database
Edit `backend/EcommerceAPI/appsettings.json`:
```json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Database=ecommerce_db;Username=postgres;Password=YOUR_PASSWORD"
}
```

### 2. Run the Backend
```bash
cd backend/EcommerceAPI
dotnet restore
dotnet run
```
The API auto-runs migrations and seeds data on first start.  
Swagger available at: http://localhost:5000/swagger

### 3. Run the Frontend

#### Prerequisites
- Node.js 20+
- Angular CLI: `npm install -g @angular/cli`

```bash
cd frontend/ecommerce-app
npm install
ng serve
```
Frontend available at: http://localhost:4200

---

## Architecture Overview

```
QA Project/
├── backend/
│   └── EcommerceAPI/
│       ├── Controllers/        ← HTTP request handlers (8 controllers)
│       ├── Services/           ← Business logic layer (9 services)
│       ├── Repositories/       ← Data access layer (6 repositories)
│       ├── Models/             ← EF Core entity models
│       ├── DTOs/               ← Data Transfer Objects
│       ├── Data/               ← DbContext + DataSeeder
│       ├── Middleware/         ← Global exception handling
│       └── Migrations/         ← EF Core database migrations
├── frontend/
│   └── ecommerce-app/
│       └── src/app/
│           ├── components/     ← Angular standalone components
│           ├── services/       ← HTTP API service layer
│           ├── interceptors/   ← JWT auth interceptor
│           ├── guards/         ← Route protection (auth + admin)
│           └── models/         ← TypeScript interfaces
├── docker-compose.yml
├── README.md
└── BUGS_FOR_STUDENTS.md       ← 🐛 Educational bug documentation
```

### Clean Architecture Pattern
```
HTTP Request → Controller → Service → Repository → Database
HTTP Response ← Controller ← Service ← Repository ← Database
```

- **Controllers** handle routing and HTTP concerns only
- **Services** contain all business logic and validations
- **Repositories** abstract all database queries
- **DTOs** decouple API contract from database models

---

## API Overview (35+ Endpoints)

### Authentication (`/api/auth`)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/register` | Public | Create a new customer account |
| POST | `/login` | Public | Login and receive JWT tokens |
| POST | `/refresh` | Public | Refresh access token |
| POST | `/logout` | Any user | Invalidate refresh tokens |
| GET | `/me` | Any user | Get current user info |

### Products (`/api/product`)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | Public | Get all products (filter, search, paginate) |
| GET | `/{id}` | Public | Get product details with reviews |
| POST | `/` | Admin | Create new product |
| PUT | `/{id}` | Admin | Update product |
| DELETE | `/{id}` | Admin | Soft-delete product |

**Query Parameters for GET /api/product:**
- `searchTerm` — search by name/description
- `category` — filter by category name ⚠️ *See Bug #4*
- `minPrice` / `maxPrice` — price range filter
- `sortBy` — `name`, `price`, `created`
- `sortDescending` — `true`/`false`
- `page` / `pageSize` — pagination

### Categories (`/api/category`)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | Public | Get all categories |
| GET | `/{id}` | Public | Get category by ID |
| POST | `/` | Admin | Create category |
| PUT | `/{id}` | Admin | Update category |
| DELETE | `/{id}` | Admin | Delete category |

### Cart (`/api/cart`)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | Customer | Get current user's cart |
| POST | `/items` | Customer | Add item to cart |
| PUT | `/items/{id}` | Customer | Update item quantity |
| DELETE | `/items/{id}` | Customer | Remove item from cart |
| DELETE | `/` | Customer | Clear entire cart |

### Orders (`/api/order`)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | Any user | Get orders (all for Admin, own for Customer) |
| GET | `/{id}` | Any user | Get order details |
| POST | `/` | Customer | Create order from cart (checkout) |
| PUT | `/{id}/status` | Admin | Update order status |

### Reviews (`/api/review`)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/product/{productId}` | Public | Get product reviews |
| POST | `/` | Customer | Add a review |
| DELETE | `/{id}` | Customer/Admin | Delete review |

### Wishlist (`/api/wishlist`)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | Customer | Get wishlist |
| POST | `/{productId}` | Customer | Add to wishlist |
| DELETE | `/{productId}` | Customer | Remove from wishlist |

### Admin (`/api/admin`)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/dashboard` | Admin | Full dashboard statistics |
| GET | `/revenue` | ⚠️ See Bug #3 | Revenue summary |

---

## Seed Data

On first startup, the following data is automatically created:

- **6 Categories:** Electronics, Clothing, Books, Sports, Home & Kitchen, Beauty
- **24 Products** across all categories with realistic prices and discounts
- **Admin user:** admin@test.com / Admin123!
- **Demo customer:** customer@test.com / Customer123!

---

## Frontend Pages

| Route | Page | Auth Required |
|-------|------|---------------|
| `/` | Home — Product listing with search/filter | No |
| `/products/:id` | Product detail with reviews | No |
| `/cart` | Shopping cart | Yes |
| `/checkout` | Order checkout | Yes |
| `/orders` | Order history | Yes |
| `/wishlist` | Saved products | Yes |
| `/login` | Login form | No |
| `/register` | Registration form | No |
| `/admin` | Admin dashboard | Admin only |

### Angular Architecture
- **Standalone Components** (Angular 17)
- **Functional HTTP Interceptor** for JWT attachment
- **Functional Route Guards** for auth and admin routes
- **Reactive Forms** with validation
- **Signals** for state management
- **Lazy-loaded routes** for all pages

---

## Intentional Bugs (Educational)

This project contains **5 intentional bugs** for debugging practice. See **[BUGS_FOR_STUDENTS.md](./BUGS_FOR_STUDENTS.md)** for:

- Detailed descriptions of each bug
- Expected vs. actual behavior
- Reproduction steps
- Hints (no solutions provided)

| Bug | Type | Module |
|-----|------|--------|
| #1 | Logic / Calculation | Cart total price |
| #2 | Missing Validation | Product stock update |
| #3 | Authorization | Admin revenue endpoint |
| #4 | Filtering / Case-sensitivity | Product category filter |
| #5 | State Machine Logic | Order status transitions |

---

## Testing with Swagger

1. Start the backend: `dotnet run` or `docker compose up`
2. Open: http://localhost:5000/swagger
3. Click **Authorize** and enter: `Bearer <your-access-token>`
4. Get a token by calling `POST /api/auth/login`

---

## Learning Objectives

Students completing this project will:

1. **Backend Development** — Build a Clean Architecture REST API with .NET 8
2. **Database Design** — Design normalized relational schemas with EF Core
3. **Authentication** — Implement JWT + refresh token flow securely
4. **Authorization** — Implement role-based access control
5. **Frontend Integration** — Connect Angular to a REST API with interceptors and guards
6. **Debugging** — Find and fix subtle bugs in production-style code
7. **API Testing** — Test APIs with Swagger and understand HTTP responses
8. **Docker** — Containerize a multi-service application

---

## Troubleshooting

### Backend won't start
- Verify PostgreSQL is running and the connection string is correct
- Check that port 5000 is not already in use

### Angular build errors
- Run `npm install` to ensure all packages are installed
- Ensure Node.js 20+ is installed

### Docker issues
- Ensure Docker Desktop is running
- Run `docker compose down -v` then `docker compose up --build` for a clean restart

### Database not seeding
- The seeder runs only when no data exists
- Check the backend logs for any seeding errors
