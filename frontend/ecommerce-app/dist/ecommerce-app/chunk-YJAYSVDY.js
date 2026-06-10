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

// src/app/components/register/register.component.ts
function RegisterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function RegisterComponent_div_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error, " ");
  }
}
function RegisterComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " First name is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Last name is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Valid email is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
  }
}
function RegisterComponent_i_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 32);
  }
}
var RegisterComponent = /* @__PURE__ */ (() => {
  class RegisterComponent2 {
    constructor() {
      this.fb = inject(FormBuilder);
      this.authService = inject(AuthService);
      this.router = inject(Router);
      this.form = this.fb.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required]
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
      if (this.f["password"].value !== this.f["confirmPassword"].value) {
        this.error = "Passwords do not match.";
        return;
      }
      this.loading = true;
      this.error = "";
      this.authService.register(this.form.value).subscribe({
        next: () => this.router.navigate(["/"]),
        error: (err) => {
          this.error = err.error?.message || "Registration failed.";
          this.loading = false;
        }
      });
    }
    static {
      this.\u0275fac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent2)();
      };
    }
    static {
      this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
        type: RegisterComponent2,
        selectors: [["app-register"]],
        standalone: true,
        features: [\u0275\u0275StandaloneFeature],
        decls: 47,
        vars: 18,
        consts: [[1, "auth-container"], [1, "auth-card", 2, "max-width", "520px"], [1, "text-center", "mb-4"], [1, "auth-logo", "mb-2"], [1, "bi", "bi-shop", "me-2"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-0"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col"], [1, "form-label"], ["type", "text", "formControlName", "firstName", "placeholder", "John", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "lastName", "placeholder", "Doe", 1, "form-control"], [1, "mb-3"], ["type", "email", "formControlName", "email", "placeholder", "you@university.edu", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control"], [1, "form-text"], [1, "mb-4"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-person-plus me-2", 4, "ngIf"], [1, "mt-4", "text-center"], [1, "small", "mb-0"], ["routerLink", "/login", 1, "text-primary", "fw-semibold"], [1, "alert", "alert-danger", "alert-dismissible"], [1, "bi", "bi-exclamation-triangle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-person-plus", "me-2"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            \u0275\u0275element(4, "i", 4);
            \u0275\u0275text(5, "EduShop");
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(6, "h5", 5);
            \u0275\u0275text(7, "Create your account");
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(8, "p", 6);
            \u0275\u0275text(9, "Join thousands of students on EduShop");
            \u0275\u0275elementEnd()();
            \u0275\u0275template(10, RegisterComponent_div_10_Template, 4, 1, "div", 7);
            \u0275\u0275elementStart(11, "form", 8);
            \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_11_listener() {
              return ctx.onSubmit();
            });
            \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "label", 11);
            \u0275\u0275text(15, "First Name");
            \u0275\u0275elementEnd();
            \u0275\u0275element(16, "input", 12);
            \u0275\u0275template(17, RegisterComponent_div_17_Template, 2, 0, "div", 13);
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(18, "div", 10)(19, "label", 11);
            \u0275\u0275text(20, "Last Name");
            \u0275\u0275elementEnd();
            \u0275\u0275element(21, "input", 14);
            \u0275\u0275template(22, RegisterComponent_div_22_Template, 2, 0, "div", 13);
            \u0275\u0275elementEnd()();
            \u0275\u0275elementStart(23, "div", 15)(24, "label", 11);
            \u0275\u0275text(25, "Email address");
            \u0275\u0275elementEnd();
            \u0275\u0275element(26, "input", 16);
            \u0275\u0275template(27, RegisterComponent_div_27_Template, 2, 0, "div", 13);
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(28, "div", 15)(29, "label", 11);
            \u0275\u0275text(30, "Password");
            \u0275\u0275elementEnd();
            \u0275\u0275element(31, "input", 17);
            \u0275\u0275elementStart(32, "div", 18);
            \u0275\u0275text(33, "Min 6 chars with uppercase, number & symbol.");
            \u0275\u0275elementEnd()();
            \u0275\u0275elementStart(34, "div", 19)(35, "label", 11);
            \u0275\u0275text(36, "Confirm Password");
            \u0275\u0275elementEnd();
            \u0275\u0275element(37, "input", 20);
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(38, "button", 21);
            \u0275\u0275template(39, RegisterComponent_span_39_Template, 1, 0, "span", 22);
            \u0275\u0275template(40, RegisterComponent_i_40_Template, 1, 0, "i", 23);
            \u0275\u0275text(41, "Create Account ");
            \u0275\u0275elementEnd()();
            \u0275\u0275elementStart(42, "div", 24)(43, "p", 25);
            \u0275\u0275text(44, " Already have an account? ");
            \u0275\u0275elementStart(45, "a", 26);
            \u0275\u0275text(46, "Sign in");
            \u0275\u0275elementEnd()()()()();
          }
          if (rf & 2) {
            \u0275\u0275advance(10);
            \u0275\u0275property("ngIf", ctx.error);
            \u0275\u0275advance(1);
            \u0275\u0275property("formGroup", ctx.form);
            \u0275\u0275advance(5);
            \u0275\u0275classProp("is-invalid", ctx.f["firstName"].invalid && ctx.f["firstName"].touched);
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.f["firstName"].invalid && ctx.f["firstName"].touched);
            \u0275\u0275advance(4);
            \u0275\u0275classProp("is-invalid", ctx.f["lastName"].invalid && ctx.f["lastName"].touched);
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.f["lastName"].invalid && ctx.f["lastName"].touched);
            \u0275\u0275advance(4);
            \u0275\u0275classProp("is-invalid", ctx.f["email"].invalid && ctx.f["email"].touched);
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.f["email"].invalid && ctx.f["email"].touched);
            \u0275\u0275advance(4);
            \u0275\u0275classProp("is-invalid", ctx.f["password"].invalid && ctx.f["password"].touched);
            \u0275\u0275advance(6);
            \u0275\u0275classProp("is-invalid", ctx.f["confirmPassword"].invalid && ctx.f["confirmPassword"].touched);
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
  return RegisterComponent2;
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-YJAYSVDY.js.map
