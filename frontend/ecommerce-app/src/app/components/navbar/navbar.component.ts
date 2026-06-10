import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <i class="bi bi-shop me-2"></i>EduShop
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMain">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                <i class="bi bi-house me-1"></i>Home
              </a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto align-items-center gap-2">
            <ng-container *ngIf="auth.isLoggedIn(); else guestLinks">
              <li class="nav-item">
                <a class="nav-link" routerLink="/wishlist">
                  <i class="bi bi-heart me-1"></i>Wishlist
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link position-relative" routerLink="/cart">
                  <i class="bi bi-cart3 me-1"></i>Cart
                  <span *ngIf="cart.cartItemCount() > 0"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {{ cart.cartItemCount() }}
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/orders">
                  <i class="bi bi-bag me-1"></i>Orders
                </a>
              </li>
              <li class="nav-item" *ngIf="auth.isAdmin()">
                <a class="nav-link" routerLink="/admin">
                  <i class="bi bi-speedometer2 me-1"></i>Admin
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  <i class="bi bi-person-circle me-1"></i>
                  {{ auth.currentUser()?.firstName }}
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" routerLink="/orders">My Orders</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a class="dropdown-item text-danger" (click)="auth.logout()">
                      <i class="bi bi-box-arrow-right me-1"></i>Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ng-container>

            <ng-template #guestLinks>
              <li class="nav-item">
                <a class="btn btn-outline-light btn-sm" routerLink="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-primary btn-sm" routerLink="/register">Register</a>
              </li>
            </ng-template>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  auth = inject(AuthService);
  cart = inject(CartService);
}
