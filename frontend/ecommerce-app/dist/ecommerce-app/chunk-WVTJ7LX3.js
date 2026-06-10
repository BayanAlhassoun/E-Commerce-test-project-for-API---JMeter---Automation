import {
  AuthService
} from "./chunk-PUK2UWPT.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-37SLDXDW.js";
import {
  Router,
  RouterLink
} from "./chunk-WA2BM3VX.js";
import {
  NgIf,
  inject,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PDZTZR5P.js";
import "./chunk-SHAOKUVO.js";

// src/app/components/login/login.component.ts
function LoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 26);
    \u0275\u0275listener("click", function LoginComponent_div_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error, " ");
  }
}
function LoginComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Valid email is required. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
function LoginComponent_i_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 29);
  }
}
var LoginComponent = /* @__PURE__ */ (() => {
  class LoginComponent2 {
    constructor() {
      this.fb = inject(FormBuilder);
      this.authService = inject(AuthService);
      this.router = inject(Router);
      this.form = this.fb.group({
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required]
      });
      this.loading = false;
      this.error = "";
    }
    get f() {
      return this.form.controls;
    }
    onSubmit() {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
      this.loading = true;
      this.error = "";
      this.authService.login(this.form.value).subscribe({
        next: (res) => {
          this.router.navigate([res.roles.includes("Admin") ? "/admin" : "/"]);
        },
        error: (err) => {
          this.error = err.error?.message || "Login failed. Check your credentials.";
          this.loading = false;
        }
      });
    }
    static {
      this.\u0275fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent2)();
      };
    }
    static {
      this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
        type: LoginComponent2,
        selectors: [["app-login"]],
        standalone: true,
        features: [\u0275\u0275StandaloneFeature],
        decls: 40,
        vars: 11,
        consts: [[1, "auth-container"], [1, "auth-card"], [1, "text-center", "mb-4"], [1, "auth-logo", "mb-2"], [1, "bi", "bi-shop", "me-2"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-0"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["type", "email", "formControlName", "email", "placeholder", "you@example.com", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "mb-4"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-box-arrow-in-right me-2", 4, "ngIf"], [1, "my-4"], [1, "text-center"], [1, "alert", "alert-warning", "py-2", "small", "mb-3"], [1, "bi", "bi-person-badge", "me-1"], [1, "small", "mb-0"], ["routerLink", "/register", 1, "text-primary", "fw-semibold"], [1, "alert", "alert-danger", "alert-dismissible"], [1, "bi", "bi-exclamation-triangle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-box-arrow-in-right", "me-2"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            \u0275\u0275element(4, "i", 4);
            \u0275\u0275text(5, "EduShop");
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(6, "h5", 5);
            \u0275\u0275text(7, "Welcome back");
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(8, "p", 6);
            \u0275\u0275text(9, "Sign in to continue shopping");
            \u0275\u0275elementEnd()();
            \u0275\u0275template(10, LoginComponent_div_10_Template, 4, 1, "div", 7);
            \u0275\u0275elementStart(11, "form", 8);
            \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
              return ctx.onSubmit();
            });
            \u0275\u0275elementStart(12, "div", 9)(13, "label", 10);
            \u0275\u0275text(14, "Email address");
            \u0275\u0275elementEnd();
            \u0275\u0275element(15, "input", 11);
            \u0275\u0275template(16, LoginComponent_div_16_Template, 2, 0, "div", 12);
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(17, "div", 13)(18, "label", 10);
            \u0275\u0275text(19, "Password");
            \u0275\u0275elementEnd();
            \u0275\u0275element(20, "input", 14);
            \u0275\u0275template(21, LoginComponent_div_21_Template, 2, 0, "div", 12);
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(22, "button", 15);
            \u0275\u0275template(23, LoginComponent_span_23_Template, 1, 0, "span", 16);
            \u0275\u0275template(24, LoginComponent_i_24_Template, 1, 0, "i", 17);
            \u0275\u0275text(25, "Sign In ");
            \u0275\u0275elementEnd()();
            \u0275\u0275element(26, "hr", 18);
            \u0275\u0275elementStart(27, "div", 19)(28, "div", 20);
            \u0275\u0275element(29, "i", 21);
            \u0275\u0275text(30, " Demo admin: ");
            \u0275\u0275elementStart(31, "strong");
            \u0275\u0275text(32, "admin@test.com");
            \u0275\u0275elementEnd();
            \u0275\u0275text(33, " / ");
            \u0275\u0275elementStart(34, "strong");
            \u0275\u0275text(35, "Admin123!");
            \u0275\u0275elementEnd()();
            \u0275\u0275elementStart(36, "p", 22);
            \u0275\u0275text(37, " Don't have an account? ");
            \u0275\u0275elementStart(38, "a", 23);
            \u0275\u0275text(39, "Create one free");
            \u0275\u0275elementEnd()()()()();
          }
          if (rf & 2) {
            \u0275\u0275advance(10);
            \u0275\u0275property("ngIf", ctx.error);
            \u0275\u0275advance(1);
            \u0275\u0275property("formGroup", ctx.form);
            \u0275\u0275advance(4);
            \u0275\u0275classProp("is-invalid", ctx.f["email"].invalid && ctx.f["email"].touched);
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.f["email"].invalid && ctx.f["email"].touched);
            \u0275\u0275advance(4);
            \u0275\u0275classProp("is-invalid", ctx.f["password"].invalid && ctx.f["password"].touched);
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.f["password"].invalid && ctx.f["password"].touched);
            \u0275\u0275advance(1);
            \u0275\u0275property("disabled", ctx.loading);
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.loading);
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", !ctx.loading);
          }
        },
        dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgIf, RouterLink],
        encapsulation: 2
      });
    }
  }
  return LoginComponent2;
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-WVTJ7LX3.js.map
