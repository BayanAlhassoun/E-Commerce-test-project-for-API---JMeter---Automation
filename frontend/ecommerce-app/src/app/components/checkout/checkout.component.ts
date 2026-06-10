import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, RouterLink],
  template: `
    <div class="container py-4">
      <h2 class="page-header mb-4"><i class="bi bi-credit-card"></i>Checkout</h2>

      <div *ngIf="orderSuccess(); else checkoutForm" class="text-center py-5">
        <i class="bi bi-check-circle-fill text-success display-1"></i>
        <h3 class="mt-3">Order Placed Successfully!</h3>
        <p class="text-muted">Your order #{{ orderId() }} has been placed.</p>
        <a routerLink="/orders" class="btn btn-primary me-2">View Orders</a>
        <a routerLink="/" class="btn btn-outline-primary">Continue Shopping</a>
      </div>

      <ng-template #checkoutForm>
        <div class="row g-4">
          <div class="col-md-7">
            <div class="card p-4">
              <h5 class="mb-3">Shipping Information</h5>
              <form [formGroup]="form" (ngSubmit)="placeOrder()">
                <div class="mb-3">
                  <label class="form-label">Shipping Address *</label>
                  <textarea class="form-control" formControlName="shippingAddress" rows="3"
                    placeholder="Enter your full shipping address"
                    [class.is-invalid]="f['shippingAddress'].invalid && f['shippingAddress'].touched">
                  </textarea>
                  <div *ngIf="f['shippingAddress'].invalid && f['shippingAddress'].touched"
                    class="invalid-feedback">Shipping address is required.</div>
                </div>

                <div class="mb-3">
                  <label class="form-label">Payment Method *</label>
                  <select class="form-select" formControlName="paymentMethod">
                    <option value="Card">Credit/Debit Card</option>
                    <option value="PayPal">PayPal</option>
                    <option value="BankTransfer">Bank Transfer</option>
                    <option value="CashOnDelivery">Cash on Delivery</option>
                  </select>
                </div>

                <div *ngIf="error" class="alert alert-danger">{{ error }}</div>

                <button type="submit" class="btn btn-primary w-100"
                  [disabled]="loading() || !cart() || cart()!.items.length === 0">
                  <span *ngIf="loading()" class="spinner-border spinner-border-sm me-1"></span>
                  Place Order
                </button>
              </form>
            </div>
          </div>

          <div class="col-md-5">
            <div class="card p-3">
              <h5 class="mb-3">Order Summary</h5>
              <div class="d-flex justify-content-between mb-2" *ngFor="let item of cart()?.items">
                <span class="text-truncate" style="max-width:200px">
                  {{ item.productName }} × {{ item.quantity }}
                </span>
                <span>{{ '$' + item.subtotal.toFixed(2) }}</span>
              </div>
              <hr>
              <div class="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>{{ '$' + (cart()?.totalAmount?.toFixed(2) ?? '0.00') }}</span>
              </div>
            </div>
          </div>
        </div>
      </ng-template>
    </div>
  `
})
export class CheckoutComponent implements OnInit {
  private fb = inject(FormBuilder);
  private cartService = inject(CartService);
  private orderService = inject(OrderService);

  cart = signal<Cart | null>(null);
  loading = signal(false);
  orderSuccess = signal(false);
  orderId = signal(0);
  error = '';

  form = this.fb.group({
    shippingAddress: ['', Validators.required],
    paymentMethod: ['Card', Validators.required]
  });

  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(c => this.cart.set(c));
  }

  placeOrder(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.orderService.createOrder(this.form.value as any).subscribe({
      next: (order) => {
        this.orderId.set(order.id);
        this.orderSuccess.set(true);
        this.loading.set(false);
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to place order.';
        this.loading.set(false);
      }
    });
  }
}
