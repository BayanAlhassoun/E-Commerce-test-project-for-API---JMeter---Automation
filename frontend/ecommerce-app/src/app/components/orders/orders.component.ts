import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, DatePipe],
  template: `
    <div class="container py-4">
      <h2 class="page-header mb-4"><i class="bi bi-bag"></i>My Orders</h2>

      <div *ngIf="loading(); else orderContent" class="spinner-overlay">
        <div class="spinner-border text-primary"></div>
      </div>

      <ng-template #orderContent>
        <div *ngIf="orders().length === 0; else orderList" class="text-center py-5">
          <i class="bi bi-bag-x display-1 text-muted"></i>
          <h4 class="mt-3 text-muted">No orders yet</h4>
          <a routerLink="/" class="btn btn-primary mt-3">Start Shopping</a>
        </div>

        <ng-template #orderList>
          <div class="card order-card mb-3" *ngFor="let order of orders()">
            <div class="card-header d-flex justify-content-between align-items-center">
              <span><strong>Order #{{ order.id }}</strong> — {{ order.createdAt | date:'mediumDate' }}</span>
              <span [class]="'badge order-status-' + order.status.toLowerCase() + ' fs-6'">
                {{ order.status }}
              </span>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-8">
                  <div class="d-flex align-items-center mb-2" *ngFor="let item of order.items">
                    <img [src]="item.productImage" style="width:50px;height:50px;object-fit:cover"
                      class="rounded me-2" onerror="this.src='/assets/images/placeholder.jpg'">
                    <div>
                      <div>{{ item.productName }}</div>
                      <small class="text-muted">Qty: {{ item.quantity }} × {{ '$' + item.unitPrice.toFixed(2) }}</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 text-end">
                  <div class="fs-5 fw-bold">{{ '$' + order.totalAmount.toFixed(2) }}</div>
                  <small class="text-muted">{{ order.paymentMethod }}</small><br>
                  <small class="text-muted">{{ order.shippingAddress }}</small>
                </div>
              </div>
            </div>
          </div>
        </ng-template>
      </ng-template>
    </div>
  `
})
export class OrdersComponent implements OnInit {
  private orderService = inject(OrderService);
  orders = signal<Order[]>([]);
  loading = signal(false);

  ngOnInit(): void {
    this.loading.set(true);
    this.orderService.getOrders().subscribe({
      next: o => { this.orders.set(o); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }
}
