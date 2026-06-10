import { Component, inject, OnInit, signal } from '@angular/core';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';
import { Dashboard } from '../../models/admin.model';
import { Product, Category } from '../../models/product.model';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, ReactiveFormsModule, DatePipe],
  template: `
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <nav class="col-md-2 d-none d-md-block admin-sidebar py-3 px-2">
          <ul class="nav flex-column">
            <li class="nav-item mb-1" *ngFor="let tab of tabs">
              <button class="nav-link w-100 text-start" [class.active]="activeTab === tab.id"
                (click)="activeTab = tab.id">
                <i [class]="'bi ' + tab.icon + ' me-2'"></i>{{ tab.label }}
              </button>
            </li>
          </ul>
        </nav>

        <!-- Main Content -->
        <main class="col-md-10 py-4 px-4">
          <h3 class="mb-4">
            <i class="bi bi-speedometer2 me-2"></i>Admin Dashboard
          </h3>

          <!-- Dashboard Tab -->
          <ng-container *ngIf="activeTab === 'dashboard'">
            <ng-container *ngIf="dashboard() as d">
              <div class="row g-3 mb-4">
                <div class="col-md-3">
                  <div class="card stat-card p-3">
                    <div class="text-muted small">Total Users</div>
                    <div class="fs-3 fw-bold">{{ d.totalUsers }}</div>
                    <i class="bi bi-people text-primary fs-4"></i>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card stat-card p-3" style="border-left-color:#22c55e">
                    <div class="text-muted small">Total Orders</div>
                    <div class="fs-3 fw-bold">{{ d.totalOrders }}</div>
                    <i class="bi bi-bag text-success fs-4"></i>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card stat-card p-3" style="border-left-color:#f59e0b">
                    <div class="text-muted small">Total Products</div>
                    <div class="fs-3 fw-bold">{{ d.totalProducts }}</div>
                    <i class="bi bi-box text-warning fs-4"></i>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card stat-card p-3" style="border-left-color:#7c3aed">
                    <div class="text-muted small">Total Revenue</div>
                    <div class="fs-3 fw-bold">{{ '$' + d.totalRevenue.toFixed(0) }}</div>
                    <i class="bi bi-currency-dollar fs-4"></i>
                  </div>
                </div>
              </div>

              <div class="row g-3 mb-4">
                <div class="col-md-4">
                  <div class="card p-3">
                    <div class="text-muted small">Monthly Revenue</div>
                    <div class="fs-4 fw-bold text-success">{{ '$' + d.monthlyRevenue.toFixed(2) }}</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card p-3">
                    <div class="text-muted small">Pending Orders</div>
                    <div class="fs-4 fw-bold text-warning">{{ d.pendingOrders }}</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card p-3">
                    <div class="text-muted small">Low Stock Products</div>
                    <div class="fs-4 fw-bold text-danger">{{ d.lowStockProducts }}</div>
                  </div>
                </div>
              </div>

              <h5>Recent Orders</h5>
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead><tr>
                    <th>#</th><th>Customer</th><th>Amount</th><th>Status</th><th>Date</th>
                  </tr></thead>
                  <tbody>
                    <tr *ngFor="let order of d.recentOrders">
                      <td>{{ order.orderId }}</td>
                      <td>{{ order.customerName }}<br><small class="text-muted">{{ order.customerEmail }}</small></td>
                      <td>{{ '$' + order.amount.toFixed(2) }}</td>
                      <td><span [class]="'badge order-status-' + order.status.toLowerCase()">{{ order.status }}</span></td>
                      <td>{{ order.createdAt | date:'mediumDate' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ng-container>
          </ng-container>

          <!-- Orders Tab -->
          <ng-container *ngIf="activeTab === 'orders'">
            <h5 class="mb-3">All Orders</h5>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead><tr>
                  <th>#</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Date</th><th>Actions</th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let order of orders()">
                    <td>{{ order.id }}</td>
                    <td>{{ order.userName }}</td>
                    <td>{{ order.items.length }}</td>
                    <td>{{ '$' + order.totalAmount.toFixed(2) }}</td>
                    <td><span [class]="'badge order-status-' + order.status.toLowerCase()">{{ order.status }}</span></td>
                    <td>{{ order.createdAt | date:'mediumDate' }}</td>
                    <td>
                      <select class="form-select form-select-sm" style="width:auto"
                        [value]="order.status"
                        (change)="updateStatus(order.id, $any($event.target).value)">
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ng-container>

          <!-- Products Tab -->
          <ng-container *ngIf="activeTab === 'products'">
            <div class="d-flex justify-content-between mb-3">
              <h5>Products</h5>
              <button class="btn btn-primary btn-sm" (click)="showProductForm = !showProductForm">
                <i class="bi bi-plus me-1"></i>Add Product
              </button>
            </div>

            <div *ngIf="showProductForm" class="card mb-4 p-3">
              <h6>{{ editingProduct ? 'Edit Product' : 'New Product' }}</h6>
              <form [formGroup]="productForm" (ngSubmit)="saveProduct()" class="row g-2">
                <div class="col-md-6">
                  <input class="form-control" formControlName="name" placeholder="Product Name">
                </div>
                <div class="col-md-3">
                  <input type="number" class="form-control" formControlName="price" placeholder="Price">
                </div>
                <div class="col-md-3">
                  <input type="number" class="form-control" formControlName="stock" placeholder="Stock">
                </div>
                <div class="col-md-6">
                  <textarea class="form-control" formControlName="description" placeholder="Description" rows="2"></textarea>
                </div>
                <div class="col-md-3">
                  <select class="form-select" formControlName="categoryId">
                    <option *ngFor="let cat of categories()" [value]="cat.id">{{ cat.name }}</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <input type="number" class="form-control" formControlName="discountPercentage" placeholder="Discount %">
                </div>
                <div class="col-12">
                  <input class="form-control" formControlName="imageUrl" placeholder="Image URL">
                </div>
                <div class="col-12 d-flex gap-2">
                  <button type="submit" class="btn btn-primary btn-sm">Save</button>
                  <button type="button" class="btn btn-secondary btn-sm" (click)="cancelEdit()">Cancel</button>
                </div>
              </form>
            </div>

            <div class="table-responsive">
              <table class="table table-hover">
                <thead><tr>
                  <th>ID</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let product of products()">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.categoryName }}</td>
                    <td>{{ '$' + product.price.toFixed(2) }}</td>
                    <td [class]="product.stock <= 5 ? 'text-danger' : ''">{{ product.stock }}</td>
                    <td>
                      <button class="btn btn-outline-primary btn-sm me-1" (click)="editProduct(product)">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button class="btn btn-outline-danger btn-sm" (click)="deleteProduct(product.id)">
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ng-container>

          <!-- Categories Tab -->
          <ng-container *ngIf="activeTab === 'categories'">
            <div class="d-flex justify-content-between mb-3">
              <h5>Categories</h5>
              <button class="btn btn-primary btn-sm" (click)="showCategoryForm = !showCategoryForm">
                <i class="bi bi-plus me-1"></i>Add Category
              </button>
            </div>

            <div *ngIf="showCategoryForm" class="card mb-3 p-3">
              <form [formGroup]="categoryForm" (ngSubmit)="saveCategory()" class="row g-2">
                <div class="col-md-4">
                  <input class="form-control" formControlName="name" placeholder="Category Name">
                </div>
                <div class="col-md-4">
                  <input class="form-control" formControlName="description" placeholder="Description">
                </div>
                <div class="col-md-2">
                  <button type="submit" class="btn btn-primary btn-sm w-100">Save</button>
                </div>
                <div class="col-md-2">
                  <button type="button" class="btn btn-secondary btn-sm w-100"
                    (click)="showCategoryForm = false">Cancel</button>
                </div>
              </form>
            </div>

            <div class="row row-cols-1 row-cols-md-3 g-3">
              <div class="col" *ngFor="let cat of categories()">
                <div class="card p-3">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h6>{{ cat.name }}</h6>
                      <p class="text-muted small mb-1">{{ cat.description }}</p>
                      <span class="badge bg-secondary">{{ cat.productCount }} products</span>
                    </div>
                    <button class="btn btn-outline-danger btn-sm" (click)="deleteCategory(cat.id)">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ng-container>
        </main>
      </div>
    </div>
  `
})
export class AdminDashboardComponent implements OnInit {
  private adminService = inject(AdminService);
  private productService = inject(ProductService);
  private orderService = inject(OrderService);
  private fb = inject(FormBuilder);

  dashboard = signal<Dashboard | null>(null);
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  orders = signal<Order[]>([]);

  activeTab = 'dashboard';
  showProductForm = false;
  showCategoryForm = false;
  editingProduct: Product | null = null;

  tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'bi-speedometer2' },
    { id: 'orders', label: 'Orders', icon: 'bi-bag' },
    { id: 'products', label: 'Products', icon: 'bi-box' },
    { id: 'categories', label: 'Categories', icon: 'bi-tags' }
  ];

  productForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0.01)]],
    stock: [0, Validators.required],
    categoryId: [1, Validators.required],
    discountPercentage: [0],
    imageUrl: [''],
    isActive: [true]
  });

  categoryForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    imageUrl: ['']
  });

  ngOnInit(): void {
    this.loadDashboard();
    this.loadProducts();
    this.loadCategories();
    this.loadOrders();
  }

  loadDashboard(): void { this.adminService.getDashboard().subscribe(d => this.dashboard.set(d)); }
  loadProducts(): void { this.productService.getProducts({ pageSize: 100 }).subscribe(r => this.products.set(r.items)); }
  loadCategories(): void { this.productService.getCategories().subscribe(c => this.categories.set(c)); }
  loadOrders(): void { this.orderService.getOrders().subscribe(o => this.orders.set(o)); }

  saveProduct(): void {
    if (this.productForm.invalid) return;
    const data = this.productForm.value as any;
    if (this.editingProduct) {
      this.productService.updateProduct(this.editingProduct.id, data).subscribe(() => {
        this.loadProducts(); this.cancelEdit();
      });
    } else {
      this.productService.createProduct(data).subscribe(() => {
        this.loadProducts(); this.cancelEdit();
      });
    }
  }

  editProduct(product: Product): void {
    this.editingProduct = product;
    this.showProductForm = true;
    this.productForm.patchValue({
      name: product.name, description: product.description, price: product.price,
      stock: product.stock, categoryId: product.categoryId,
      discountPercentage: product.discountPercentage, imageUrl: product.imageUrl, isActive: product.isActive
    });
  }

  cancelEdit(): void {
    this.editingProduct = null;
    this.showProductForm = false;
    this.productForm.reset({ isActive: true, discountPercentage: 0, stock: 0, price: 0 });
  }

  deleteProduct(id: number): void {
    if (confirm('Delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
    }
  }

  saveCategory(): void {
    if (this.categoryForm.invalid) return;
    this.productService.createCategory(this.categoryForm.value as any).subscribe(() => {
      this.loadCategories(); this.showCategoryForm = false; this.categoryForm.reset();
    });
  }

  deleteCategory(id: number): void {
    if (confirm('Delete this category?')) {
      this.productService.deleteCategory(id).subscribe(() => this.loadCategories());
    }
  }

  updateStatus(orderId: number, status: string): void {
    this.orderService.updateOrderStatus(orderId, { status }).subscribe(() => this.loadOrders());
  }
}
