import {
  WishlistService
} from "./chunk-TUSZUKHF.js";
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
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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

// src/app/components/wishlist/wishlist.component.ts
function WishlistComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function WishlistComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementStart(2, "h4", 11);
    \u0275\u0275text(3, "Your wishlist is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 12);
    \u0275\u0275text(5, "Browse Products");
    \u0275\u0275elementEnd()();
  }
}
function WishlistComponent_ng_template_5_ng_template_1_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("$" + item_r7.price.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", "$" + (item_r7.price * (1 - item_r7.discountPercentage / 100)).toFixed(2), " ");
  }
}
function WishlistComponent_ng_template_5_ng_template_1_div_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate("$" + item_r7.price.toFixed(2));
  }
}
function WishlistComponent_ng_template_5_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275element(3, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "h6", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275template(8, WishlistComponent_ng_template_5_ng_template_1_div_1_ng_container_8_Template, 5, 2, "ng-container", 22);
    \u0275\u0275template(9, WishlistComponent_ng_template_5_ng_template_1_div_1_ng_template_9_Template, 2, 1, "ng-template", null, 23, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 24)(14, "button", 25);
    \u0275\u0275listener("click", function WishlistComponent_ng_template_5_ng_template_1_div_1_Template_button_click_14_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r14);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r13 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r13.moveToCart(item_r7));
    });
    \u0275\u0275element(15, "i", 26);
    \u0275\u0275text(16, "Add to Cart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 27);
    \u0275\u0275listener("click", function WishlistComponent_ng_template_5_ng_template_1_div_1_Template_button_click_17_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r14);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r15 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r15.remove(item_r7.productId));
    });
    \u0275\u0275element(18, "i", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r9 = \u0275\u0275reference(10);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r7.productImage, \u0275\u0275sanitizeUrl)("alt", item_r7.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.productName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r7.discountPercentage > 0)("ngIfElse", _r9);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(item_r7.inStock ? "badge bg-success" : "badge bg-danger");
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", item_r7.inStock ? "In Stock" : "Out of Stock", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !item_r7.inStock);
  }
}
function WishlistComponent_ng_template_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, WishlistComponent_ng_template_5_ng_template_1_div_1_Template, 19, 9, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx_r5.wishlist().items);
  }
}
function WishlistComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, WishlistComponent_ng_template_5_div_0_Template, 6, 0, "div", 7);
    \u0275\u0275template(1, WishlistComponent_ng_template_5_ng_template_1_Template, 2, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r4 = \u0275\u0275reference(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r2.wishlist() || ctx_r2.wishlist().items.length === 0)("ngIfElse", _r4);
  }
}
var WishlistComponent = /* @__PURE__ */ (() => {
  class WishlistComponent2 {
    constructor() {
      this.wishlistService = inject(WishlistService);
      this.cartService = inject(CartService);
      this.wishlist = signal(null);
      this.loading = signal(false);
    }
    ngOnInit() {
      this.loading.set(true);
      this.wishlistService.getWishlist().subscribe({
        next: (w) => {
          this.wishlist.set(w);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
    remove(productId) {
      this.wishlistService.removeFromWishlist(productId).subscribe((w) => this.wishlist.set(w));
    }
    moveToCart(item) {
      this.cartService.addToCart({
        productId: item.productId,
        quantity: 1
      }).subscribe(() => {
        this.remove(item.productId);
      });
    }
    static {
      this.\u0275fac = function WishlistComponent_Factory(t) {
        return new (t || WishlistComponent2)();
      };
    }
    static {
      this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
        type: WishlistComponent2,
        selectors: [["app-wishlist"]],
        standalone: true,
        features: [\u0275\u0275StandaloneFeature],
        decls: 7,
        vars: 2,
        consts: [[1, "container", "py-4"], [1, "page-header", "mb-4"], [1, "bi", "bi-heart"], ["class", "spinner-overlay", 4, "ngIf", "ngIfElse"], ["wishlistContent", ""], [1, "spinner-overlay"], [1, "spinner-border", "text-primary"], ["class", "text-center py-5", 4, "ngIf", "ngIfElse"], ["wishlistItems", ""], [1, "text-center", "py-5"], [1, "bi", "bi-heart", "display-1", "text-muted"], [1, "mt-3", "text-muted"], ["routerLink", "/", 1, "btn", "btn-primary", "mt-3"], [1, "row", "row-cols-1", "row-cols-md-2", "row-cols-lg-3", "g-4"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "card", "product-card", "h-100"], [1, "img-wrapper"], ["onerror", "this.src='https://picsum.photos/400/300'", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "mb-2"], [4, "ngIf", "ngIfElse"], ["noWishDiscount", ""], [1, "card-footer", "d-flex", "gap-2"], [1, "btn", "btn-primary", "btn-sm", "flex-grow-1", 3, "disabled", "click"], [1, "bi", "bi-cart-plus", "me-1"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash"], [1, "price-original", "me-2"], [1, "price-discounted"], [1, "fw-bold"]],
        template: function WishlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
            \u0275\u0275element(2, "i", 2);
            \u0275\u0275text(3, "My Wishlist");
            \u0275\u0275elementEnd();
            \u0275\u0275template(4, WishlistComponent_div_4_Template, 2, 0, "div", 3);
            \u0275\u0275template(5, WishlistComponent_ng_template_5_Template, 3, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
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
  return WishlistComponent2;
})();
export {
  WishlistComponent
};
//# sourceMappingURL=chunk-B3CNLIYO.js.map
