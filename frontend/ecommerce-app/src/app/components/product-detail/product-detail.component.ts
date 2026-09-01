import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { AuthService } from '../../services/auth.service';
import { Product, Review } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, FormsModule, ReactiveFormsModule, DatePipe],
  template: `
    <div class="container py-4">
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a routerLink="/">Home</a></li>
          <li class="breadcrumb-item active">{{ product()?.name }}</li>
        </ol>
      </nav>

      <div *ngIf="loading()" class="spinner-overlay">
        <div class="spinner-border text-primary"></div>
      </div>

      <ng-container *ngIf="product() as p">
        <div class="row g-4">
          <!-- Product Image -->
          <div class="col-md-5">
            <img [src]="p.imageUrl" class="img-fluid rounded" [alt]="p.name"
              style="max-height:450px; object-fit:cover; width:100%"
              onerror="this.src='/assets/images/placeholder.jpg'">
          </div>

          <!-- Product Info -->
          <div class="col-md-7">
            <span class="category-badge mb-3 d-inline-block">{{ p.categoryName }}</span>
            <h2>{{ p.name }}</h2>

            <div class="d-flex align-items-center mb-3">
              <div class="star-rating me-2 fs-5">
                <i *ngFor="let s of getStars(p.averageRating)" [class]="'bi ' + s"></i>
              </div>
              <span class="text-muted">{{ p.averageRating.toFixed(1) }} ({{ p.reviewCount }} reviews)</span>
            </div>

            <div class="mb-3">
              <ng-container *ngIf="p.discountPercentage > 0; else noDiscount">
                <span class="price-original fs-5 me-2">{{ '$' + p.price.toFixed(2) }}</span>
                <span class="price-discounted fs-3">{{ '$' + p.discountedPrice.toFixed(2) }}</span>
                <span class="badge bg-danger ms-2">{{ p.discountPercentage }}% OFF</span>
              </ng-container>
              <ng-template #noDiscount>
                <span class="fw-bold fs-3">{{ '$' + p.price.toFixed(2) }}</span>
              </ng-template>
            </div>

            <p class="text-muted mb-4">{{ p.description }}</p>

            <div class="mb-3">
              <strong>Availability: </strong>
              <span [class]="p.stock > 0 ? 'text-success' : 'text-danger'">
                <ng-container *ngIf="p.stock > 0; else oos">In Stock ({{ p.stock }} units)</ng-container>
                <ng-template #oos>Out of Stock</ng-template>
              </span>
            </div>

            <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

            <div class="d-flex gap-3 mb-4">
              <div class="input-group w-auto">
                <button class="btn btn-outline-secondary" (click)="qty = qty > 1 ? qty - 1 : 1">-</button>
                <input type="number" class="form-control text-center" [(ngModel)]="qty"
                  min="1" [max]="p.stock" style="width:70px">
                <button class="btn btn-outline-secondary" (click)="qty = qty < p.stock ? qty + 1 : p.stock">+</button>
              </div>

              <button class="btn btn-primary px-4" [disabled]="p.stock === 0" (click)="addToCart(p)">
                <i class="bi bi-cart-plus me-2"></i>Add to Cart
              </button>

              <button *ngIf="auth.isLoggedIn()" class="btn btn-outline-danger" (click)="addToWishlist(p.id)">
                <i class="bi bi-heart me-1"></i>Wishlist
              </button>
            </div>
          </div>
        </div>

        <!-- Reviews Section -->
        <div class="mt-5">
          <h4 class="mb-3">Customer Reviews</h4>

          <div *ngIf="auth.isLoggedIn()" class="card mb-4 p-3">
            <h6>Write a Review</h6>
            <form [formGroup]="reviewForm" (ngSubmit)="submitReview(p.id)">
              <div class="mb-2">
                <label class="form-label">Rating</label>
                <select class="form-select" formControlName="rating" style="width:auto">
                  <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="4">⭐⭐⭐⭐ Good</option>
                  <option value="3">⭐⭐⭐ Average</option>
                  <option value="2">⭐⭐ Poor</option>
                  <option value="1">⭐ Terrible</option>
                </select>
              </div>
              <div class="mb-2">
                <textarea class="form-control" formControlName="comment" rows="3"
                  placeholder="Share your experience..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-sm">Submit Review</button>
            </form>
          </div>

          <ng-container *ngIf="reviews().length > 0; else noReviews">
            <div class="card mb-2 p-3" *ngFor="let review of reviews()">
              <div class="d-flex justify-content-between">
                <div>
                  <strong>{{ review.userName }}</strong>
                  <div class="star-rating">
                    <i *ngFor="let s of getStars(review.rating)" [class]="'bi ' + s + ' text-warning'"></i>
                  </div>
                </div>
                <small class="text-muted">{{ review.createdAt | date:'mediumDate' }}</small>
              </div>
              <p class="mt-2 mb-0">{{ review.comment }}</p>
            </div>
          </ng-container>
          <ng-template #noReviews>
            <p class="text-muted">No reviews yet. Be the first to review!</p>
          </ng-template>
        </div>
      </ng-container>
    </div>
  `
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private wishlistService = inject(WishlistService);
  private fb = inject(FormBuilder);
  auth = inject(AuthService);

  product = signal<Product | null>(null);
  reviews = signal<Review[]>([]);
  loading = signal(false);
  qty = 1;
  successMsg = '';

  reviewForm = this.fb.group({
    rating: [5, Validators.required],
    comment: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading.set(true);
    this.productService.getProduct(id).subscribe({
      next: p => { this.product.set(p); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
    this.productService.getProductReviews(id).subscribe(r => this.reviews.set(r));
  }

  addToCart(product: Product): void {
    if (!this.auth.isLoggedIn()) return;
    this.cartService.addToCart({ productId: product.id, quantity: this.qty }).subscribe({
      next: () => { this.successMsg = 'Added to cart!'; setTimeout(() => this.successMsg = '', 3000); }
    });
  }

  addToWishlist(productId: number): void {
    this.wishlistService.addToWishlist(productId).subscribe({
      next: () => { this.successMsg = 'Added to wishlist!'; setTimeout(() => this.successMsg = '', 3000); }
    });
  }

  submitReview(productId: number): void {
    if (this.reviewForm.invalid) return;
    this.productService.addReview({
      productId,
      rating: Number(this.reviewForm.value.rating),
      comment: this.reviewForm.value.comment!
    }).subscribe({
      next: (r) => {
        this.reviews.update(reviews => [r, ...reviews]);
        this.reviewForm.reset({ rating: 5 });
        this.successMsg = 'Review submitted!';
        setTimeout(() => this.successMsg = '', 3000);
      }
    });
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) =>
      i < Math.floor(rating) ? 'bi-star-fill' : (i < rating ? 'bi-star-half' : 'bi-star')
    );
  }
}
