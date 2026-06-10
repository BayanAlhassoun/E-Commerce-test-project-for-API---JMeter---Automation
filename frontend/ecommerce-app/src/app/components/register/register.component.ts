import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card" style="max-width:520px">

        <!-- Logo & Heading -->
        <div class="text-center mb-4">
          <div class="auth-logo mb-2"><i class="bi bi-shop me-2"></i>EduShop</div>
          <h5 class="fw-bold mb-1">Create your account</h5>
          <p class="text-muted small mb-0">Join thousands of students on EduShop</p>
        </div>

        <!-- Error Alert -->
        <div *ngIf="error" class="alert alert-danger alert-dismissible">
          <i class="bi bi-exclamation-triangle me-2"></i>{{ error }}
          <button type="button" class="btn-close" (click)="error=''"></button>
        </div>

        <!-- Form -->
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="row mb-3">
            <div class="col">
              <label class="form-label">First Name</label>
              <input type="text" class="form-control" formControlName="firstName"
                placeholder="John"
                [class.is-invalid]="f['firstName'].invalid && f['firstName'].touched">
              <div *ngIf="f['firstName'].invalid && f['firstName'].touched" class="invalid-feedback">
                First name is required.
              </div>
            </div>
            <div class="col">
              <label class="form-label">Last Name</label>
              <input type="text" class="form-control" formControlName="lastName"
                placeholder="Doe"
                [class.is-invalid]="f['lastName'].invalid && f['lastName'].touched">
              <div *ngIf="f['lastName'].invalid && f['lastName'].touched" class="invalid-feedback">
                Last name is required.
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" formControlName="email"
              placeholder="you@university.edu"
              [class.is-invalid]="f['email'].invalid && f['email'].touched">
            <div *ngIf="f['email'].invalid && f['email'].touched" class="invalid-feedback">
              Valid email is required.
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" formControlName="password"
              placeholder="••••••••"
              [class.is-invalid]="f['password'].invalid && f['password'].touched">
            <div class="form-text">Min 6 chars with uppercase, number &amp; symbol.</div>
          </div>

          <div class="mb-4">
            <label class="form-label">Confirm Password</label>
            <input type="password" class="form-control" formControlName="confirmPassword"
              placeholder="••••••••"
              [class.is-invalid]="f['confirmPassword'].invalid && f['confirmPassword'].touched">
          </div>

          <button type="submit" class="btn btn-primary w-100 py-2" [disabled]="loading">
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
            <i *ngIf="!loading" class="bi bi-person-plus me-2"></i>Create Account
          </button>
        </form>

        <div class="mt-4 text-center">
          <p class="small mb-0">
            Already have an account?
            <a routerLink="/login" class="text-primary fw-semibold">Sign in</a>
          </p>
        </div>

      </div>
    </div>
  `
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });

  loading = false;
  error = '';

  get f() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    if (this.f['password'].value !== this.f['confirmPassword'].value) {
      this.error = 'Passwords do not match.';
      return;
    }
    this.loading = true;
    this.error = '';

    this.authService.register(this.form.value as any).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.error = err.error?.message || 'Registration failed.';
        this.loading = false;
      }
    });
  }
}
