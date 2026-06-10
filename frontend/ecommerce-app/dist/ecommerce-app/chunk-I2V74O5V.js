import {
  ProductService
} from "./chunk-ZQBMAN73.js";
import {
  AuthService
} from "./chunk-PUK2UWPT.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-37SLDXDW.js";
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
  SlicePipe,
  inject,
  signal,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PDZTZR5P.js";
import "./chunk-SHAOKUVO.js";

// src/app/components/home/home.component.ts
function HomeComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    \u0275\u0275property("value", cat_r5.name);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate2(" ", cat_r5.name, " (", cat_r5.productCount, ") ");
  }
}
function HomeComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function HomeComponent_div_37_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.successMsg = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.successMsg, " ");
  }
}
function HomeComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "div", 35);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading products...");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_ng_template_39_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" -", product_r10.discountPercentage, "% ");
  }
}
function HomeComponent_ng_template_39_div_1_i_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const s_r21 = ctx.$implicit;
    \u0275\u0275classMap("bi " + s_r21);
  }
}
function HomeComponent_ng_template_39_div_1_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("$" + product_r10.price.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("$" + product_r10.discountedPrice.toFixed(2));
  }
}
function HomeComponent_ng_template_39_div_1_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate("$" + product_r10.price.toFixed(2));
  }
}
function HomeComponent_ng_template_39_div_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("In Stock (", product_r10.stock, ") ");
  }
}
function HomeComponent_ng_template_39_div_1_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 68);
    \u0275\u0275text(1, "Out of Stock");
  }
}
function HomeComponent_ng_template_39_div_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function HomeComponent_ng_template_39_div_1_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const product_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r25 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r25.toggleWishlist(product_r10));
    });
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275elementEnd();
  }
}
var _c0 = function(a1) {
  return ["/products", a1];
};
function HomeComponent_ng_template_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41);
    \u0275\u0275element(3, "img", 42);
    \u0275\u0275template(4, HomeComponent_ng_template_39_div_1_span_4_Template, 2, 1, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44)(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h6", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 47);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 48)(14, "div", 49);
    \u0275\u0275template(15, HomeComponent_ng_template_39_div_1_i_15_Template, 1, 2, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 51);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 52);
    \u0275\u0275template(19, HomeComponent_ng_template_39_div_1_ng_container_19_Template, 5, 2, "ng-container", 53);
    \u0275\u0275template(20, HomeComponent_ng_template_39_div_1_ng_template_20_Template, 2, 1, "ng-template", null, 54, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "small");
    \u0275\u0275template(23, HomeComponent_ng_template_39_div_1_ng_container_23_Template, 3, 1, "ng-container", 53);
    \u0275\u0275template(24, HomeComponent_ng_template_39_div_1_ng_template_24_Template, 2, 0, "ng-template", null, 55, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 56)(27, "div", 57)(28, "a", 58);
    \u0275\u0275element(29, "i", 59);
    \u0275\u0275text(30, "View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 60);
    \u0275\u0275listener("click", function HomeComponent_ng_template_39_div_1_Template_button_click_31_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r29);
      const product_r10 = restoredCtx.$implicit;
      const ctx_r28 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r28.addToCart(product_r10));
    });
    \u0275\u0275element(32, "i", 61);
    \u0275\u0275text(33, "Add ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, HomeComponent_ng_template_39_div_1_button_34_Template, 2, 0, "button", 62);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const _r14 = \u0275\u0275reference(21);
    const _r17 = \u0275\u0275reference(25);
    const ctx_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", product_r10.imageUrl, \u0275\u0275sanitizeUrl)("alt", product_r10.name);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", product_r10.discountPercentage > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r10.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(12, 17, product_r10.description, 0, 80), "... ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r8.getStars(product_r10.averageRating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", product_r10.reviewCount, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r10.discountPercentage > 0)("ngIfElse", _r14);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(product_r10.stock > 10 ? "text-success" : product_r10.stock > 0 ? "text-warning" : "text-danger");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", product_r10.stock > 0)("ngIfElse", _r17);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c0, product_r10.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", product_r10.stock === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r8.auth.isLoggedIn());
  }
}
function HomeComponent_ng_template_39_nav_2_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 73)(1, "button", 74);
    \u0275\u0275listener("click", function HomeComponent_ng_template_39_nav_2_li_6_Template_button_click_1_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r33);
      const p_r31 = restoredCtx.$implicit;
      const ctx_r32 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r32.changePage(p_r31));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r31 = ctx.$implicit;
    const ctx_r30 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r31 === ctx_r30.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r31);
  }
}
function HomeComponent_ng_template_39_nav_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 71)(1, "ul", 72)(2, "li", 73)(3, "button", 74);
    \u0275\u0275listener("click", function HomeComponent_ng_template_39_nav_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r34 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r34.changePage(ctx_r34.currentPage - 1));
    });
    \u0275\u0275element(4, "i", 75);
    \u0275\u0275text(5, " Prev ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, HomeComponent_ng_template_39_nav_2_li_6_Template, 3, 3, "li", 76);
    \u0275\u0275elementStart(7, "li", 73)(8, "button", 74);
    \u0275\u0275listener("click", function HomeComponent_ng_template_39_nav_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r36 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r36.changePage(ctx_r36.currentPage + 1));
    });
    \u0275\u0275text(9, " Next ");
    \u0275\u0275element(10, "i", 77);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext(2);
    let tmp_0_0;
    let tmp_2_0;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", !((tmp_0_0 = ctx_r9.result()) == null ? null : tmp_0_0.hasPreviousPage));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r9.getPages());
    \u0275\u0275advance(1);
    \u0275\u0275classProp("disabled", !((tmp_2_0 = ctx_r9.result()) == null ? null : tmp_2_0.hasNextPage));
  }
}
function HomeComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, HomeComponent_ng_template_39_div_1_Template, 35, 23, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, HomeComponent_ng_template_39_nav_2_Template, 11, 5, "nav", 38);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    let tmp_0_0;
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", (tmp_0_0 = ctx_r4.result()) == null ? null : tmp_0_0.items);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r4.result() && ctx_r4.result().totalPages > 1);
  }
}
var HomeComponent = /* @__PURE__ */ (() => {
  class HomeComponent2 {
    constructor() {
      this.productService = inject(ProductService);
      this.cartService = inject(CartService);
      this.wishlistService = inject(WishlistService);
      this.auth = inject(AuthService);
      this.result = signal(null);
      this.categories = signal([]);
      this.loading = signal(false);
      this.searchTerm = "";
      this.selectedCategory = "";
      this.sortBy = "name";
      this.sortDesc = false;
      this.currentPage = 1;
      this.successMsg = "";
    }
    ngOnInit() {
      this.loadCategories();
      this.loadProducts();
    }
    loadCategories() {
      this.productService.getCategories().subscribe((cats) => this.categories.set(cats));
    }
    loadProducts() {
      this.loading.set(true);
      this.productService.getProducts({
        searchTerm: this.searchTerm || void 0,
        category: this.selectedCategory || void 0,
        sortBy: this.sortBy,
        sortDescending: this.sortDesc,
        page: this.currentPage,
        pageSize: 12
      }).subscribe({
        next: (res) => {
          this.result.set(res);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
    search() {
      this.currentPage = 1;
      this.loadProducts();
    }
    applyFilter() {
      this.currentPage = 1;
      this.loadProducts();
    }
    changePage(p) {
      this.currentPage = p;
      this.loadProducts();
    }
    addToCart(product) {
      if (!this.auth.isLoggedIn()) {
        return;
      }
      this.cartService.addToCart({
        productId: product.id,
        quantity: 1
      }).subscribe({
        next: () => {
          this.successMsg = `"${product.name}" added to cart!`;
          setTimeout(() => this.successMsg = "", 3e3);
        },
        error: () => {
          this.successMsg = "Failed to add to cart.";
        }
      });
    }
    toggleWishlist(product) {
      this.wishlistService.addToWishlist(product.id).subscribe({
        next: () => {
          this.successMsg = `"${product.name}" added to wishlist!`;
          setTimeout(() => this.successMsg = "", 3e3);
        }
      });
    }
    getStars(rating) {
      return Array.from({
        length: 5
      }, (_, i) => i < Math.floor(rating) ? "bi-star-fill" : i < rating ? "bi-star-half" : "bi-star");
    }
    getPages() {
      const total = this.result()?.totalPages ?? 0;
      return Array.from({
        length: Math.min(total, 5)
      }, (_, i) => i + 1);
    }
    static {
      this.\u0275fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent2)();
      };
    }
    static {
      this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
        type: HomeComponent2,
        selectors: [["app-home"]],
        standalone: true,
        features: [\u0275\u0275StandaloneFeature],
        decls: 41,
        vars: 9,
        consts: [[1, "py-4"], [1, "container"], [1, "hero-section", "text-center"], [2, "position", "relative", "z-index", "1"], [1, "hero-title", "mb-3"], [1, "hero-subtitle", "mb-4"], [1, "col-md-7", "mx-auto", "hero-search"], [1, "input-group"], ["type", "text", "placeholder", "Search for textbooks, courses, supplies...", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-search", "me-1"], [1, "filter-bar"], [1, "row", "align-items-center", "g-2"], [1, "col-md-4"], [1, "form-select", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-3"], ["value", "name"], ["value", "price"], ["value", "created"], [1, "col-md-2"], [1, "form-check", "form-switch", "pt-1"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], [1, "form-check-label", "small", "fw-semibold"], [1, "col-md-3", "text-end", "text-muted", "small", "fw-semibold"], [1, "bi", "bi-grid", "me-1"], ["class", "alert alert-success alert-dismissible", 4, "ngIf"], ["class", "spinner-overlay", 4, "ngIf", "ngIfElse"], ["productList", ""], [3, "value"], [1, "alert", "alert-success", "alert-dismissible"], [1, "bi", "bi-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "spinner-overlay"], [1, "spinner-border"], [1, "row", "row-cols-1", "row-cols-md-2", "row-cols-lg-4", "g-4"], ["class", "col", 4, "ngFor", "ngForOf"], ["class", "mt-4 d-flex justify-content-center", 4, "ngIf"], [1, "col"], [1, "card", "product-card", "h-100"], [1, "img-wrapper"], ["onerror", "this.src='https://picsum.photos/400/300'", 3, "src", "alt"], ["class", "badge-discount position-absolute top-0 end-0 m-2", 4, "ngIf"], [1, "card-body", "d-flex", "flex-column"], [1, "category-badge", "mb-2", "d-inline-block", "align-self-start"], [1, "card-title"], [1, "card-text", "flex-grow-1"], [1, "d-flex", "align-items-center", "mb-2"], [1, "star-rating", "me-1"], [3, "class", 4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "mb-2"], [4, "ngIf", "ngIfElse"], ["normalPrice", ""], ["outOfStock", ""], [1, "card-footer", "bg-transparent", "border-0", "pb-3"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-primary", "btn-sm", "flex-grow-1", 3, "routerLink"], [1, "bi", "bi-eye", "me-1"], [1, "btn", "btn-primary", "btn-sm", "flex-grow-1", 3, "disabled", "click"], [1, "bi", "bi-cart-plus", "me-1"], ["class", "btn btn-outline-danger btn-sm", 3, "click", 4, "ngIf"], [1, "badge-discount", "position-absolute", "top-0", "end-0", "m-2"], [1, "price-original", "me-2"], [1, "price-discounted"], [1, "fw-bold", "fs-5"], [1, "bi", "bi-check-circle", "me-1"], [1, "bi", "bi-x-circle", "me-1"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bi", "bi-heart"], [1, "mt-4", "d-flex", "justify-content-center"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "bi", "bi-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-right"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
            \u0275\u0275text(5, "Welcome to EduShop");
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(6, "p", 5);
            \u0275\u0275text(7, "Educational E-Commerce Platform for University Students");
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "input", 8);
            \u0275\u0275listener("ngModelChange", function HomeComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.searchTerm = $event;
            })("keyup.enter", function HomeComponent_Template_input_keyup_enter_10_listener() {
              return ctx.search();
            });
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(11, "button", 9);
            \u0275\u0275listener("click", function HomeComponent_Template_button_click_11_listener() {
              return ctx.search();
            });
            \u0275\u0275element(12, "i", 10);
            \u0275\u0275text(13, "Search ");
            \u0275\u0275elementEnd()()()()();
            \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "select", 14);
            \u0275\u0275listener("ngModelChange", function HomeComponent_Template_select_ngModelChange_17_listener($event) {
              return ctx.selectedCategory = $event;
            })("change", function HomeComponent_Template_select_change_17_listener() {
              return ctx.applyFilter();
            });
            \u0275\u0275elementStart(18, "option", 15);
            \u0275\u0275text(19, "All Categories");
            \u0275\u0275elementEnd();
            \u0275\u0275template(20, HomeComponent_option_20_Template, 2, 3, "option", 16);
            \u0275\u0275elementEnd()();
            \u0275\u0275elementStart(21, "div", 17)(22, "select", 14);
            \u0275\u0275listener("ngModelChange", function HomeComponent_Template_select_ngModelChange_22_listener($event) {
              return ctx.sortBy = $event;
            })("change", function HomeComponent_Template_select_change_22_listener() {
              return ctx.applyFilter();
            });
            \u0275\u0275elementStart(23, "option", 18);
            \u0275\u0275text(24, "Sort by Name");
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(25, "option", 19);
            \u0275\u0275text(26, "Sort by Price");
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(27, "option", 20);
            \u0275\u0275text(28, "Sort by Newest");
            \u0275\u0275elementEnd()()();
            \u0275\u0275elementStart(29, "div", 21)(30, "div", 22)(31, "input", 23);
            \u0275\u0275listener("ngModelChange", function HomeComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.sortDesc = $event;
            })("change", function HomeComponent_Template_input_change_31_listener() {
              return ctx.applyFilter();
            });
            \u0275\u0275elementEnd();
            \u0275\u0275elementStart(32, "label", 24);
            \u0275\u0275text(33, "Descending");
            \u0275\u0275elementEnd()()();
            \u0275\u0275elementStart(34, "div", 25);
            \u0275\u0275element(35, "i", 26);
            \u0275\u0275text(36);
            \u0275\u0275elementEnd()()();
            \u0275\u0275template(37, HomeComponent_div_37_Template, 4, 1, "div", 27);
            \u0275\u0275template(38, HomeComponent_div_38_Template, 4, 0, "div", 28);
            \u0275\u0275template(39, HomeComponent_ng_template_39_Template, 3, 2, "ng-template", null, 29, \u0275\u0275templateRefExtractor);
            \u0275\u0275elementEnd()();
          }
          if (rf & 2) {
            const _r3 = \u0275\u0275reference(40);
            let tmp_5_0;
            \u0275\u0275advance(10);
            \u0275\u0275property("ngModel", ctx.searchTerm);
            \u0275\u0275advance(7);
            \u0275\u0275property("ngModel", ctx.selectedCategory);
            \u0275\u0275advance(3);
            \u0275\u0275property("ngForOf", ctx.categories());
            \u0275\u0275advance(2);
            \u0275\u0275property("ngModel", ctx.sortBy);
            \u0275\u0275advance(9);
            \u0275\u0275property("ngModel", ctx.sortDesc);
            \u0275\u0275advance(5);
            \u0275\u0275textInterpolate1("", (tmp_5_0 = ctx.result()) == null ? null : tmp_5_0.totalCount, " products found ");
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.successMsg);
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.loading())("ngIfElse", _r3);
          }
        },
        dependencies: [RouterLink, NgIf, NgForOf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe],
        encapsulation: 2
      });
    }
  }
  return HomeComponent2;
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-I2V74O5V.js.map
