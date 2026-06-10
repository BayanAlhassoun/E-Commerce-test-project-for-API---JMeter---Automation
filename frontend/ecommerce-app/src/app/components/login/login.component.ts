import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card">

        <!-- Logo & Heading -->
        <div class="text-center mb-4">
          <div class="auth-logo mb-2"><i class="bi bi-shop me-2"></i>EduShop</div>
          <h5 class="fw-bold mb-1">Welcome back</h5>
          <p class="text-muted small mb-0">Sign in to continue shopping</p>
        </div>

        <!-- Error Alert -->
        <div *ngIf="error" class="alert alert-danger alert-dismissible">
          <i class="bi bi-exclamation-triangle me-2"></i>{{ error }}
          <button type="button" class="btn-close" (click)="error=''"></button>
        </div>

        <!-- Form -->
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" formControlName="email"
              placeholder="you@example.com"
              [class.is-invalid]="f['email'].invalid && f['email'].touched">
            <div *ngIf="f['email'].invalid && f['email'].touched" class="invalid-feedback">
              Valid email is required.
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" formControlName="password"
              placeholder="••••••••"
              [class.is-invalid]="f['password'].invalid && f['password'].touched">
            <div *ngIf="f['password'].invalid && f['password'].touched" class="invalid-feedback">
              Password is required.
            </div>
          </div>

          <button type="submit" class="btn btn-primary w-100 py-2" [disabled]="loading">
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
            <i *ngIf="!loading" class="bi bi-box-arrow-in-right me-2"></i>Sign In
          </button>
        </form>

        <hr class="my-4">

        <div class="text-center">
          <div class="alert alert-warning py-2 small mb-3">
            <i class="bi bi-person-badge me-1"></i>
            Demo admin: <strong>admin&#64;test.com</strong> / <strong>Admin123!</strong>
          </div>
          <p class="small mb-0">
            Don't have an account?
            <a routerLink="/register" class="text-primary fw-semibold">Create one free</a>
          </p>
        </div>

      </div>
    </div>
  `
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  loading = false;
  error = '';

  get f() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.error = '';

    this.authService.login(this.form.value as any).subscribe({
      next: (res) => {
        this.router.navigate([res.roles.includes('Admin') ? '/admin' : '/']);
      },
      error: (err) => {
        this.error = err.error?.message || 'Login failed. Check your credentials.';
        this.loading = false;
      }
    });
  }
}
