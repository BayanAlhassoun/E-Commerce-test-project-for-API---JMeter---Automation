import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-37SLDXDW.js";
import {
  OrderService
} from "./chunk-EJSVBMFR.js";
import {
  CartService
} from "./chunk-OS77V6L3.js";
import {
  RouterLink
} from "./chunk-WA2BM3VX.js";
import {
  NgForOf,
  NgIf,
  inject,
  signal,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PDZTZR5P.js";
import "./chunk-SHAOKUVO.js";

// src/app/components/checkout/checkout.component.ts
function CheckoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "h3", 7);
    \u0275\u0275text(3, "Order Placed Successfully!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 9);
    \u0275\u0275text(7, "View Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 10);
    \u0275\u0275text(9, "Continue Shopping");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Your order #", ctx_r0.orderId(), " has been placed.");
  }
}
function CheckoutComponent_ng_template_5_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, "Shipping address is required.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_template_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(ctx_r4.error);
  }
}
function CheckoutComponent_ng_template_5_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
  }
}
function CheckoutComponent_ng_template_5_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r7.productName, " \xD7 ", item_r7.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("$" + item_r7.subtotal.toFixed(2));
  }
}
function CheckoutComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "h5", 14);
    \u0275\u0275text(4, "Shipping Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 15);
    \u0275\u0275listener("ngSubmit", function CheckoutComponent_ng_template_5_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.placeOrder());
    });
    \u0275\u0275elementStart(6, "div", 14)(7, "label", 16);
    \u0275\u0275text(8, "Shipping Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "textarea", 17);
    \u0275\u0275text(10, "                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CheckoutComponent_ng_template_5_div_11_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14)(13, "label", 16);
    \u0275\u0275text(14, "Payment Method *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 19)(16, "option", 20);
    \u0275\u0275text(17, "Credit/Debit Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 21);
    \u0275\u0275text(19, "PayPal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 22);
    \u0275\u0275text(21, "Bank Transfer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 23);
    \u0275\u0275text(23, "Cash on Delivery");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, CheckoutComponent_ng_template_5_div_24_Template, 2, 1, "div", 24);
    \u0275\u0275elementStart(25, "button", 25);
    \u0275\u0275template(26, CheckoutComponent_ng_template_5_span_26_Template, 1, 0, "span", 26);
    \u0275\u0275text(27, " Place Order ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 27)(29, "div", 28)(30, "h5", 14);
    \u0275\u0275text(31, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, CheckoutComponent_ng_template_5_div_32_Template, 5, 3, "div", 29);
    \u0275\u0275element(33, "hr");
    \u0275\u0275elementStart(34, "div", 30)(35, "span");
    \u0275\u0275text(36, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    let tmp_6_0;
    let tmp_7_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r2.f["shippingAddress"].invalid && ctx_r2.f["shippingAddress"].touched);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.f["shippingAddress"].invalid && ctx_r2.f["shippingAddress"].touched);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r2.error);
    \u0275\u0275advance(1);
    \u0275\u0275property("disabled", ctx_r2.loading() || !ctx_r2.cart() || ctx_r2.cart().items.length === 0);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r2.loading());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", (tmp_6_0 = ctx_r2.cart()) == null ? null : tmp_6_0.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate("$" + ((tmp_7_0 = (tmp_7_0 = ctx_r2.cart()) == null ? null : tmp_7_0.totalAmount == null ? null : tmp_7_0.totalAmount.toFixed(2)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "0.00"));
  }
}
var CheckoutComponent = /* @__PURE__ */ (() => {
  class CheckoutComponent2 {
    constructor() {
      this.fb = inject(FormBuilder);
      this.cartService = inject(CartService);
      this.orderService = inject(OrderService);
      this.cart = signal(null);
      this.loading = signal(false);
      this.orderSuccess = signal(false);
      this.orderId = signal(0);
      this.error = "";
      this.form = this.fb.group({
        shippingAddress: ["", Validators.required],
        paymentMethod: ["Card", Validators.required]
      });
    }
    get f() {
      return this.form.controls;
    }
    ngOnInit() {
      this.cartService.getCart().subscribe((c) => this.cart.set(c));
    }
    placeOrder() {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
      this.loading.set(true);
      this.orderService.createOrder(this.form.value).subscribe({
        next: (order) => {
          this.orderId.set(order.id);
          this.orderSuccess.set(true);
          this.loading.set(false);
        },
        error: (err) => {
          this.error = err.error?.message || "Failed to place order.";
          this.loading.set(false);
        }
      });
    }
    static {
      this.\u0275fac = function CheckoutComponent_Factory(t) {
        return new (t || CheckoutComponent2)();
      };
    }
    static {
      this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
        type: CheckoutComponent2,
        selectors: [["app-checkout"]],
        standalone: true,
        features: [\u0275\u0275StandaloneFeature],
        decls: 7,
        vars: 2,
        consts: [[1, "container", "py-4"], [1, "page-header", "mb-4"], [1, "bi", "bi-credit-card"], ["class", "text-center py-5", 4, "ngIf", "ngIfElse"], ["checkoutForm", ""], [1, "text-center", "py-5"], [1, "bi", "bi-check-circle-fill", "text-success", "display-1"], [1, "mt-3"], [1, "text-muted"], ["routerLink", "/orders", 1, "btn", "btn-primary", "me-2"], ["routerLink", "/", 1, "btn", "btn-outline-primary"], [1, "row", "g-4"], [1, "col-md-7"], [1, "card", "p-4"], [1, "mb-3"], [3, "formGroup", "ngSubmit"], [1, "form-label"], ["formControlName", "shippingAddress", "rows", "3", "placeholder", "Enter your full shipping address", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "paymentMethod", 1, "form-select"], ["value", "Card"], ["value", "PayPal"], ["value", "BankTransfer"], ["value", "CashOnDelivery"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "col-md-5"], [1, "card", "p-3"], ["class", "d-flex justify-content-between mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "fw-bold"], [1, "invalid-feedback"], [1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "text-truncate", 2, "max-width", "200px"]],
        template: function CheckoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
            \u0275\u0275element(2, "i", 2);
            \u0275\u0275text(3, "Checkout");
            \u0275\u0275elementEnd();
            \u0275\u0275template(4, CheckoutComponent_div_4_Template, 10, 1, "div", 3);
            \u0275\u0275template(5, CheckoutComponent_ng_template_5_Template, 39, 9, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
            \u0275\u0275elementEnd();
          }
          if (rf & 2) {
            const _r1 = \u0275\u0275reference(6);
            \u0275\u0275advance(4);
            \u0275\u0275property("ngIf", ctx.orderSuccess())("ngIfElse", _r1);
          }
        },
        dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgIf, NgForOf, RouterLink],
        encapsulation: 2
      });
    }
  }
  return CheckoutComponent2;
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-YJ77JJYK.js.map
