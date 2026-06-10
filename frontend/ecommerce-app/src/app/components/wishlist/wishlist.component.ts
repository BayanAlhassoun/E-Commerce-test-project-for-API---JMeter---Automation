import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';
import { Wishlist, WishlistItem } from '../../models/order.model';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  template: `
    <div class="container py-4">
      <h2 class="page-header mb-4"><i class="bi bi-heart"></i>My Wishlist</h2>

      <div *ngIf="loading(); else wishlistContent" class="spinner-overlay">
        <div class="spinner-border text-primary"></div>
      </div>

      <ng-template #wishlistContent>
        <div *ngIf="!wishlist() || wishlist()!.items.length === 0; else wishlistItems"
          class="text-center py-5">
          <i class="bi bi-heart display-1 text-muted"></i>
          <h4 class="mt-3 text-muted">Your wishlist is empty</h4>
          <a routerLink="/" class="btn btn-primary mt-3">Browse Products</a>
        </div>

        <ng-template #wishlistItems>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col" *ngFor="let item of wishlist()!.items">
              <div class="card product-card h-100">
                <div class="img-wrapper">
                  <img [src]="item.productImage" [alt]="item.productName"
                    onerror="this.src='https://picsum.photos/400/300'">
                </div>
                <div class="card-body">
                  <h6 class="card-title">{{ item.productName }}</h6>
                  <div class="mb-2">
                    <ng-container *ngIf="item.discountPercentage > 0; else noWishDiscount">
                      <span class="price-original me-2">{{ '$' + item.price.toFixed(2) }}</span>
                      <span class="price-discounted">
                        {{ '$' + (item.price * (1 - item.discountPercentage/100)).toFixed(2) }}
                      </span>
                    </ng-container>
                    <ng-template #noWishDiscount>
                      <span class="fw-bold">{{ '$' + item.price.toFixed(2) }}</span>
                    </ng-template>
                  </div>
                  <span [class]="item.inStock ? 'badge bg-success' : 'badge bg-danger'">
                    {{ item.inStock ? 'In Stock' : 'Out of Stock' }}
                  </span>
                </div>
                <div class="card-footer d-flex gap-2">
                  <button class="btn btn-primary btn-sm flex-grow-1"
                    [disabled]="!item.inStock" (click)="moveToCart(item)">
                    <i class="bi bi-cart-plus me-1"></i>Add to Cart
                  </button>
                  <button class="btn btn-outline-danger btn-sm" (click)="remove(item.productId)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ng-template>
      </ng-template>
    </div>
  `
})
export class WishlistComponent implements OnInit {
  private wishlistService = inject(WishlistService);
  private cartService = inject(CartService);
  wishlist = signal<Wishlist | null>(null);
  loading = signal(false);

  ngOnInit(): void {
    this.loading.set(true);
    this.wishlistService.getWishlist().subscribe({
      next: w => { this.wishlist.set(w); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  remove(productId: number): void {
    this.wishlistService.removeFromWishlist(productId).subscribe(w => this.wishlist.set(w));
  }

  moveToCart(item: WishlistItem): void {
    this.cartService.addToCart({ productId: item.productId, quantity: 1 }).subscribe(() => {
      this.remove(item.productId);
    });
  }
}
