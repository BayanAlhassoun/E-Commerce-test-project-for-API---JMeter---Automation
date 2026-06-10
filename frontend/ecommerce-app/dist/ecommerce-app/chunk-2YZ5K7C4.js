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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PDZTZR5P.js";
import "./chunk-SHAOKUVO.js";

// src/app/components/cart/cart.component.ts
function CartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function CartComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementStart(2, "h4", 11);
    \u0275\u0275text(3, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 12);
    \u0275\u0275text(5, "Continue Shopping");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_ng_template_5_ng_template_1_div_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", item_r7.discountPercentage, "% OFF ");
  }
}
function CartComponent_ng_template_5_ng_template_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275elementStart(2, "div", 33)(3, "h6", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CartComponent_ng_template_5_ng_template_1_div_4_span_7_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37)(9, "button", 38);
    \u0275\u0275listener("click", function CartComponent_ng_template_5_ng_template_1_div_4_Template_button_click_9_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r11);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r10 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r10.updateQty(item_r7.id, item_r7.quantity - 1));
    });
    \u0275\u0275text(10, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 40);
    \u0275\u0275listener("click", function CartComponent_ng_template_5_ng_template_1_div_4_Template_button_click_13_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r11);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r12 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r12.updateQty(item_r7.id, item_r7.quantity + 1));
    });
    \u0275\u0275text(14, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 41)(16, "div", 42);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 19);
    \u0275\u0275listener("click", function CartComponent_ng_template_5_ng_template_1_div_4_Template_button_click_18_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r11);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r13 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r13.removeItem(item_r7.id));
    });
    \u0275\u0275element(19, "i", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275property("src", item_r7.productImage, \u0275\u0275sanitizeUrl)("alt", item_r7.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", "$" + item_r7.unitPrice.toFixed(2), " each");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", item_r7.discountPercentage > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", item_r7.quantity <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.quantity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate("$" + item_r7.subtotal.toFixed(2));
  }
}
function CartComponent_ng_template_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16);
    \u0275\u0275template(4, CartComponent_ng_template_5_ng_template_1_div_4_Template, 20, 8, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "button", 19);
    \u0275\u0275listener("click", function CartComponent_ng_template_5_ng_template_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r14 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r14.clearCart());
    });
    \u0275\u0275element(7, "i", 20);
    \u0275\u0275text(8, "Clear Cart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 21);
    \u0275\u0275element(10, "i", 22);
    \u0275\u0275text(11, "Continue Shopping ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 23)(13, "div", 24)(14, "h5", 25);
    \u0275\u0275text(15, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 26)(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 26)(22, "span");
    \u0275\u0275text(23, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 27);
    \u0275\u0275text(25, "Free");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "hr");
    \u0275\u0275elementStart(27, "div", 28)(28, "span");
    \u0275\u0275text(29, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "a", 29);
    \u0275\u0275element(33, "i", 30);
    \u0275\u0275text(34, "Proceed to Checkout ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r5.cart().items);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("Items (", ctx_r5.cart().totalItems, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("$" + ctx_r5.cart().totalAmount.toFixed(2));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate("$" + ctx_r5.cart().totalAmount.toFixed(2));
  }
}
function CartComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartComponent_ng_template_5_div_0_Template, 6, 0, "div", 7);
    \u0275\u0275template(1, CartComponent_ng_template_5_ng_template_1_Template, 35, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r4 = \u0275\u0275reference(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r2.cart() || ctx_r2.cart().items.length === 0)("ngIfElse", _r4);
  }
}
var CartComponent = /* @__PURE__ */ (() => {
  class CartComponent2 {
    constructor() {
      this.cartService = inject(CartService);
      this.cart = signal(null);
      this.loading = signal(false);
    }
    ngOnInit() {
      this.loadCart();
    }
    loadCart() {
      this.loading.set(true);
      this.cartService.getCart().subscribe({
        next: (c) => {
          this.cart.set(c);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
    updateQty(itemId, qty) {
      if (qty < 1)
        return;
      this.cartService.updateCartItem(itemId, {
        quantity: qty
      }).subscribe((c) => this.cart.set(c));
    }
    removeItem(itemId) {
      this.cartService.removeFromCart(itemId).subscribe((c) => this.cart.set(c));
    }
    clearCart() {
      this.cartService.clearCart().subscribe(() => this.loadCart());
    }
    static {
      this.\u0275fac = function CartComponent_Factory(t) {
        return new (t || CartComponent2)();
      };
    }
    static {
      this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
        type: CartComponent2,
        selectors: [["app-cart"]],
        standalone: true,
        features: [\u0275\u0275StandaloneFeature],
        decls: 7,
        vars: 2,
        consts: [[1, "container", "py-4"], [1, "page-header", "mb-4"], [1, "bi", "bi-cart3"], ["class", "spinner-overlay", 4, "ngIf", "ngIfElse"], ["cartContent", ""], [1, "spinner-overlay"], [1, "spinner-border", "text-primary"], ["class", "text-center py-5", 4, "ngIf", "ngIfElse"], ["cartItems", ""], [1, "text-center", "py-5"], [1, "bi", "bi-cart-x", "display-1", "text-muted"], [1, "mt-3", "text-muted"], ["routerLink", "/", 1, "btn", "btn-primary", "mt-3"], [1, "row", "g-4"], [1, "col-md-8"], [1, "card"], [1, "card-body"], ["class", "d-flex align-items-center py-3 border-bottom", 4, "ngFor", "ngForOf"], [1, "card-footer", "d-flex", "justify-content-between"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash", "me-1"], ["routerLink", "/", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-arrow-left", "me-1"], [1, "col-md-4"], [1, "card", "p-3"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "text-success"], [1, "d-flex", "justify-content-between", "fw-bold", "fs-5"], ["routerLink", "/checkout", 1, "btn", "btn-primary", "w-100", "mt-3"], [1, "bi", "bi-credit-card", "me-2"], [1, "d-flex", "align-items-center", "py-3", "border-bottom"], ["onerror", "this.src='https://picsum.photos/80/80'", 1, "rounded", "me-3", 2, "width", "80px", "height", "80px", "object-fit", "cover", 3, "src", "alt"], [1, "flex-grow-1"], [1, "mb-0"], [1, "text-muted"], ["class", "badge bg-danger ms-2", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2", "me-3"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "disabled", "click"], [1, "fw-bold", 2, "min-width", "30px", "text-align", "center"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "text-end", "me-3", 2, "min-width", "80px"], [1, "fw-bold"], [1, "bi", "bi-trash"], [1, "badge", "bg-danger", "ms-2"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
            \u0275\u0275element(2, "i", 2);
            \u0275\u0275text(3, "Shopping Cart");
            \u0275\u0275elementEnd();
            \u0275\u0275template(4, CartComponent_div_4_Template, 2, 0, "div", 3);
            \u0275\u0275template(5, CartComponent_ng_template_5_Template, 3, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
            \u0275\u0275elementEnd();
          }
          if (rf & 2) {
            const _r1 = \u0275\u0275reference(6);
            \u0275\u0275advance(4);
            \u0275\u0275property("ngIf", ctx.loading())("ngIfElse", _r1);
          }
        },
        dependencies: [NgIf, NgForOf, RouterLink],
        encapsulation: 2
      });
    }
  }
  return CartComponent2;
})();
export {
  CartComponent
};
//# sourceMappingURL=chunk-2YZ5K7C4.js.map
