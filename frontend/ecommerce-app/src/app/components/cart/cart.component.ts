import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  template: `
    <div class="container py-4">
      <h2 class="page-header mb-4"><i class="bi bi-cart3"></i>Shopping Cart</h2>

      <div *ngIf="loading(); else cartContent" class="spinner-overlay">
        <div class="spinner-border text-primary"></div>
      </div>

      <ng-template #cartContent>
        <div *ngIf="!cart() || cart()!.items.length === 0; else cartItems" class="text-center py-5">
          <i class="bi bi-cart-x display-1 text-muted"></i>
          <h4 class="mt-3 text-muted">Your cart is empty</h4>
          <a routerLink="/" class="btn btn-primary mt-3">Continue Shopping</a>
        </div>

        <ng-template #cartItems>
          <div class="row g-4">
            <div class="col-md-8">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center py-3 border-bottom"
                    *ngFor="let item of cart()!.items">
                    <img [src]="item.productImage" [alt]="item.productName"
                      style="width:80px;height:80px;object-fit:cover" class="rounded me-3"
                      onerror="this.src='https://picsum.photos/80/80'">
                    <div class="flex-grow-1">
                      <h6 class="mb-0">{{ item.productName }}</h6>
                      <small class="text-muted">{{ '$' + item.unitPrice.toFixed(2) }} each</small>
                      <span *ngIf="item.discountPercentage > 0" class="badge bg-danger ms-2">
                        {{ item.discountPercentage }}% OFF
                      </span>
                    </div>
                    <div class="d-flex align-items-center gap-2 me-3">
                      <button class="btn btn-outline-secondary btn-sm"
                        (click)="updateQty(item.id, item.quantity - 1)"
                        [disabled]="item.quantity <= 1">−</button>
                      <span class="fw-bold" style="min-width:30px;text-align:center">{{ item.quantity }}</span>
                      <button class="btn btn-outline-secondary btn-sm"
                        (click)="updateQty(item.id, item.quantity + 1)">+</button>
                    </div>
                    <div class="text-end me-3" style="min-width:80px">
                      <div class="fw-bold">{{ '$' + item.subtotal.toFixed(2) }}</div>
                    </div>
                    <button class="btn btn-outline-danger btn-sm" (click)="removeItem(item.id)">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <button class="btn btn-outline-danger btn-sm" (click)="clearCart()">
                    <i class="bi bi-trash me-1"></i>Clear Cart
                  </button>
                  <a routerLink="/" class="btn btn-outline-secondary btn-sm">
                    <i class="bi bi-arrow-left me-1"></i>Continue Shopping
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card p-3">
                <h5 class="mb-3">Order Summary</h5>
                <div class="d-flex justify-content-between mb-2">
                  <span>Items ({{ cart()!.totalItems }})</span>
                  <span>{{ '$' + cart()!.totalAmount.toFixed(2) }}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span class="text-success">Free</span>
                </div>
                <hr>
                <div class="d-flex justify-content-between fw-bold fs-5">
                  <span>Total</span>
                  <span>{{ '$' + cart()!.totalAmount.toFixed(2) }}</span>
                </div>
                <a routerLink="/checkout" class="btn btn-primary w-100 mt-3">
                  <i class="bi bi-credit-card me-2"></i>Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        </ng-template>
      </ng-template>
    </div>
  `
})
export class CartComponent implements OnInit {
  private cartService = inject(CartService);
  cart = signal<Cart | null>(null);
  loading = signal(false);

  ngOnInit(): void { this.loadCart(); }

  loadCart(): void {
    this.loading.set(true);
    this.cartService.getCart().subscribe({
      next: c => { this.cart.set(c); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  updateQty(itemId: number, qty: number): void {
    if (qty < 1) return;
    this.cartService.updateCartItem(itemId, { quantity: qty }).subscribe(c => this.cart.set(c));
  }

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId).subscribe(c => this.cart.set(c));
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe(() => this.loadCart());
  }
}
