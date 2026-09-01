import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { WishlistService } from '../../services/wishlist.service';
import { Product, Category, PagedResult } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, FormsModule, SlicePipe],
  template: `
    <div class="py-4">
      <div class="container">

        <!-- Hero Banner -->
        <div class="hero-section text-center">
          <div style="position:relative;z-index:1">
            <h1 class="hero-title mb-3">Welcome to EduShop</h1>
            <p class="hero-subtitle mb-4">Educational E-Commerce Platform for University Students</p>
            <div class="col-md-7 mx-auto hero-search">
              <div class="input-group">
                <input type="text" class="form-control form-control-lg"
                  placeholder="Search for textbooks, courses, supplies..."
                  [(ngModel)]="searchTerm" (keyup.enter)="search()">
                <button class="btn btn-primary" (click)="search()">
                  <i class="bi bi-search me-1"></i>Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="filter-bar">
          <div class="row align-items-center g-2">
            <div class="col-md-4">
              <select class="form-select" [(ngModel)]="selectedCategory" (change)="applyFilter()">
                <option value="">All Categories</option>
                <option *ngFor="let cat of categories()" [value]="cat.name">
                  {{ cat.name }} ({{ cat.productCount }})
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <select class="form-select" [(ngModel)]="sortBy" (change)="applyFilter()">
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="created">Sort by Newest</option>
              </select>
            </div>
            <div class="col-md-2">
              <div class="form-check form-switch pt-1">
                <input class="form-check-input" type="checkbox" [(ngModel)]="sortDesc" (change)="applyFilter()">
                <label class="form-check-label small fw-semibold">Descending</label>
              </div>
            </div>
            <div class="col-md-3 text-end text-muted small fw-semibold">
              <i class="bi bi-grid me-1"></i>{{ result()?.totalCount }} products found
            </div>
          </div>
        </div>

        <!-- Alert -->
        <div *ngIf="successMsg" class="alert alert-success alert-dismissible">
          <i class="bi bi-check-circle me-2"></i>{{ successMsg }}
          <button type="button" class="btn-close" (click)="successMsg=''"></button>
        </div>

        <!-- Loading -->
        <div *ngIf="loading(); else productList" class="spinner-overlay">
          <div class="spinner-border"></div>
          <span>Loading products...</span>
        </div>

        <ng-template #productList>
          <!-- Products Grid -->
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div class="col" *ngFor="let product of result()?.items">
              <div class="card product-card h-100">
                <div class="img-wrapper">
                  <img [src]="product.imageUrl" [alt]="product.name"
                    onerror="this.src='/assets/images/placeholder.jpg'">
                  <span *ngIf="product.discountPercentage > 0"
                    class="badge-discount position-absolute top-0 end-0 m-2">
                    -{{ product.discountPercentage }}%
                  </span>
                </div>
                <div class="card-body d-flex flex-column">
                  <span class="category-badge mb-2 d-inline-block align-self-start">{{ product.categoryName }}</span>
                  <h6 class="card-title">{{ product.name }}</h6>
                  <p class="card-text flex-grow-1">
                    {{ product.description | slice:0:80 }}...
                  </p>

                  <!-- Rating -->
                  <div class="d-flex align-items-center mb-2">
                    <div class="star-rating me-1">
                      <i *ngFor="let s of getStars(product.averageRating)" [class]="'bi ' + s"></i>
                    </div>
                    <small class="text-muted">({{ product.reviewCount }})</small>
                  </div>

                  <!-- Price -->
                  <div class="mb-2">
                    <ng-container *ngIf="product.discountPercentage > 0; else normalPrice">
                      <span class="price-original me-2">{{ '$' + product.price.toFixed(2) }}</span>
                      <span class="price-discounted">{{ '$' + product.discountedPrice.toFixed(2) }}</span>
                    </ng-container>
                    <ng-template #normalPrice>
                      <span class="fw-bold fs-5">{{ '$' + product.price.toFixed(2) }}</span>
                    </ng-template>
                  </div>

                  <!-- Stock -->
                  <small [class]="product.stock > 10 ? 'text-success' : (product.stock > 0 ? 'text-warning' : 'text-danger')">
                    <ng-container *ngIf="product.stock > 0; else outOfStock">
                      <i class="bi bi-check-circle me-1"></i>In Stock ({{ product.stock }})
                    </ng-container>
                    <ng-template #outOfStock><i class="bi bi-x-circle me-1"></i>Out of Stock</ng-template>
                  </small>
                </div>
                <div class="card-footer bg-transparent border-0 pb-3">
                  <div class="d-flex gap-2">
                    <a [routerLink]="['/products', product.id]" class="btn btn-outline-primary btn-sm flex-grow-1">
                      <i class="bi bi-eye me-1"></i>View
                    </a>
                    <button class="btn btn-primary btn-sm flex-grow-1"
                      [disabled]="product.stock === 0"
                      (click)="addToCart(product)">
                      <i class="bi bi-cart-plus me-1"></i>Add
                    </button>
                    <button *ngIf="auth.isLoggedIn()" class="btn btn-outline-danger btn-sm"
                      (click)="toggleWishlist(product)">
                      <i class="bi bi-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <nav *ngIf="result() && result()!.totalPages > 1" class="mt-4 d-flex justify-content-center">
            <ul class="pagination">
              <li class="page-item" [class.disabled]="!result()?.hasPreviousPage">
                <button class="page-link" (click)="changePage(currentPage - 1)">
                  <i class="bi bi-chevron-left"></i> Prev
                </button>
              </li>
              <li class="page-item" *ngFor="let p of getPages()" [class.active]="p === currentPage">
                <button class="page-link" (click)="changePage(p)">{{ p }}</button>
              </li>
              <li class="page-item" [class.disabled]="!result()?.hasNextPage">
                <button class="page-link" (click)="changePage(currentPage + 1)">
                  Next <i class="bi bi-chevron-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        </ng-template>

      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private wishlistService = inject(WishlistService);
  auth = inject(AuthService);

  result = signal<PagedResult<Product> | null>(null);
  categories = signal<Category[]>([]);
  loading = signal(false);

  searchTerm = '';
  selectedCategory = '';
  sortBy = 'name';
  sortDesc = false;
  currentPage = 1;
  successMsg = '';

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe(cats => this.categories.set(cats));
  }

  loadProducts(): void {
    this.loading.set(true);
    this.productService.getProducts({
      searchTerm: this.searchTerm || undefined,
      category: this.selectedCategory || undefined,
      sortBy: this.sortBy,
      sortDescending: this.sortDesc,
      page: this.currentPage,
      pageSize: 12
    }).subscribe({
      next: res => { this.result.set(res); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  search(): void { this.currentPage = 1; this.loadProducts(); }
  applyFilter(): void { this.currentPage = 1; this.loadProducts(); }
  changePage(p: number): void { this.currentPage = p; this.loadProducts(); }

  addToCart(product: Product): void {
    if (!this.auth.isLoggedIn()) { return; }
    this.cartService.addToCart({ productId: product.id, quantity: 1 }).subscribe({
      next: () => { this.successMsg = `"${product.name}" added to cart!`; setTimeout(() => this.successMsg = '', 3000); },
      error: () => { this.successMsg = 'Failed to add to cart.'; }
    });
  }

  toggleWishlist(product: Product): void {
    this.wishlistService.addToWishlist(product.id).subscribe({
      next: () => { this.successMsg = `"${product.name}" added to wishlist!`; setTimeout(() => this.successMsg = '', 3000); }
    });
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) =>
      i < Math.floor(rating) ? 'bi-star-fill' : (i < rating ? 'bi-star-half' : 'bi-star')
    );
  }

  getPages(): number[] {
    const total = this.result()?.totalPages ?? 0;
    return Array.from({ length: Math.min(total, 5) }, (_, i) => i + 1);
  }
}
