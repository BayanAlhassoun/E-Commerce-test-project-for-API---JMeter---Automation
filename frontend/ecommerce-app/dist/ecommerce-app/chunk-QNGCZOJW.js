import {
  ProductService
} from "./chunk-ZQBMAN73.js";
import {
  AuthService
} from "./chunk-PUK2UWPT.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-37SLDXDW.js";
import {
  WishlistService
} from "./chunk-TUSZUKHF.js";
import {
  CartService
} from "./chunk-OS77V6L3.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-WA2BM3VX.js";
import {
  DatePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
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

// src/app/components/product-detail/product-detail.component.ts
function ProductDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_ng_container_9_i_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    \u0275\u0275classMap("bi " + s_r16);
  }
}
function ProductDetailComponent_ng_container_9_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("$" + p_r2.price.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("$" + p_r2.discountedPrice.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r2.discountPercentage, "% OFF");
  }
}
function ProductDetailComponent_ng_container_9_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate("$" + p_r2.price.toFixed(2));
  }
}
function ProductDetailComponent_ng_container_9_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("In Stock (", p_r2.stock, " units)");
  }
}
function ProductDetailComponent_ng_container_9_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Out of Stock");
  }
}
function ProductDetailComponent_ng_container_9_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(ctx_r10.successMsg);
  }
}
function ProductDetailComponent_ng_container_9_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_9_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const p_r2 = \u0275\u0275nextContext().ngIf;
      const ctx_r20 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r20.addToWishlist(p_r2.id));
    });
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2, "Wishlist ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_ng_container_9_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "h6");
    \u0275\u0275text(2, "Write a Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 43);
    \u0275\u0275listener("ngSubmit", function ProductDetailComponent_ng_container_9_div_42_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r25);
      const p_r2 = \u0275\u0275nextContext().ngIf;
      const ctx_r23 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r23.submitReview(p_r2.id));
    });
    \u0275\u0275elementStart(4, "div", 44)(5, "label", 45);
    \u0275\u0275text(6, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 46)(8, "option", 47);
    \u0275\u0275text(9, "\u2B50\u2B50\u2B50\u2B50\u2B50 Excellent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 48);
    \u0275\u0275text(11, "\u2B50\u2B50\u2B50\u2B50 Good");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 49);
    \u0275\u0275text(13, "\u2B50\u2B50\u2B50 Average");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 50);
    \u0275\u0275text(15, "\u2B50\u2B50 Poor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 51);
    \u0275\u0275text(17, "\u2B50 Terrible");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 44);
    \u0275\u0275element(19, "textarea", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 53);
    \u0275\u0275text(21, "Submit Review");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r12.reviewForm);
  }
}
function ProductDetailComponent_ng_container_9_ng_container_43_div_1_i_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const s_r29 = ctx.$implicit;
    \u0275\u0275classMap("bi " + s_r29 + " text-warning");
  }
}
function ProductDetailComponent_ng_container_9_ng_container_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57);
    \u0275\u0275template(6, ProductDetailComponent_ng_container_9_ng_container_43_div_1_i_6_Template, 1, 2, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "small", 18);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 58);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r27 = ctx.$implicit;
    const ctx_r26 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r27.userName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r26.getStars(review_r27.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, review_r27.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r27.comment);
  }
}
function ProductDetailComponent_ng_container_9_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductDetailComponent_ng_container_9_ng_container_43_div_1_Template, 12, 7, "div", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx_r13.reviews());
  }
}
function ProductDetailComponent_ng_container_9_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "No reviews yet. Be the first to review!");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16);
    \u0275\u0275template(11, ProductDetailComponent_ng_container_9_i_11_Template, 1, 2, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 19);
    \u0275\u0275template(15, ProductDetailComponent_ng_container_9_ng_container_15_Template, 7, 3, "ng-container", 20);
    \u0275\u0275template(16, ProductDetailComponent_ng_container_9_ng_template_16_Template, 2, 1, "ng-template", null, 21, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 22);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 19)(21, "strong");
    \u0275\u0275text(22, "Availability: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275template(24, ProductDetailComponent_ng_container_9_ng_container_24_Template, 2, 1, "ng-container", 20);
    \u0275\u0275template(25, ProductDetailComponent_ng_container_9_ng_template_25_Template, 1, 0, "ng-template", null, 23, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, ProductDetailComponent_ng_container_9_div_27_Template, 2, 1, "div", 24);
    \u0275\u0275elementStart(28, "div", 25)(29, "div", 26)(30, "button", 27);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_9_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r30 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r30.qty = ctx_r30.qty > 1 ? ctx_r30.qty - 1 : 1);
    });
    \u0275\u0275text(31, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 28);
    \u0275\u0275listener("ngModelChange", function ProductDetailComponent_ng_container_9_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r32 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r32.qty = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 27);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_9_Template_button_click_33_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r31);
      const p_r2 = restoredCtx.ngIf;
      const ctx_r33 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r33.qty = ctx_r33.qty < p_r2.stock ? ctx_r33.qty + 1 : p_r2.stock);
    });
    \u0275\u0275text(34, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 29);
    \u0275\u0275listener("click", function ProductDetailComponent_ng_container_9_Template_button_click_35_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r31);
      const p_r2 = restoredCtx.ngIf;
      const ctx_r34 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r34.addToCart(p_r2));
    });
    \u0275\u0275element(36, "i", 30);
    \u0275\u0275text(37, "Add to Cart ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, ProductDetailComponent_ng_container_9_button_38_Template, 3, 0, "button", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 32)(40, "h4", 19);
    \u0275\u0275text(41, "Customer Reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, ProductDetailComponent_ng_container_9_div_42_Template, 22, 1, "div", 33);
    \u0275\u0275template(43, ProductDetailComponent_ng_container_9_ng_container_43_Template, 2, 1, "ng-container", 20);
    \u0275\u0275template(44, ProductDetailComponent_ng_container_9_ng_template_44_Template, 2, 0, "ng-template", null, 34, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.ngIf;
    const _r5 = \u0275\u0275reference(17);
    const _r8 = \u0275\u0275reference(26);
    const _r14 = \u0275\u0275reference(45);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", p_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getStars(p_r2.averageRating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r2.averageRating.toFixed(1), " (", p_r2.reviewCount, " reviews)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r2.discountPercentage > 0)("ngIfElse", _r5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r2.description);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(p_r2.stock > 0 ? "text-success" : "text-danger");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", p_r2.stock > 0)("ngIfElse", _r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.successMsg);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.qty)("max", p_r2.stock);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", p_r2.stock === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.auth.isLoggedIn());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.auth.isLoggedIn());
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r1.reviews().length > 0)("ngIfElse", _r14);
  }
}
var ProductDetailComponent = /* @__PURE__ */ (() => {
  class ProductDetailComponent2 {
    constructor() {
      this.route = inject(ActivatedRoute);
      this.productService = inject(ProductService);
      this.cartService = inject(CartService);
      this.wishlistService = inject(WishlistService);
      this.fb = inject(FormBuilder);
      this.auth = inject(AuthService);
      this.product = signal(null);
      this.reviews = signal([]);
      this.loading = signal(false);
      this.qty = 1;
      this.successMsg = "";
      this.reviewForm = this.fb.group({
        rating: [5, Validators.required],
        comment: ["", [Validators.required, Validators.minLength(10)]]
      });
    }
    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.loading.set(true);
      this.productService.getProduct(id).subscribe({
        next: (p) => {
          this.product.set(p);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
      this.productService.getProductReviews(id).subscribe((r) => this.reviews.set(r));
    }
    addToCart(product) {
      if (!this.auth.isLoggedIn())
        return;
      this.cartService.addToCart({
        productId: product.id,
        quantity: this.qty
      }).subscribe({
        next: () => {
          this.successMsg = "Added to cart!";
          setTimeout(() => this.successMsg = "", 3e3);
        }
      });
    }
    addToWishlist(productId) {
      this.wishlistService.addToWishlist(productId).subscribe({
        next: () => {
          this.successMsg = "Added to wishlist!";
          setTimeout(() => this.successMsg = "", 3e3);
        }
      });
    }
    submitReview(productId) {
      if (this.reviewForm.invalid)
        return;
      this.productService.addReview({
        productId,
        rating: Number(this.reviewForm.value.rating),
        comment: this.reviewForm.value.comment
      }).subscribe({
        next: (r) => {
          this.reviews.update((reviews) => [r, ...reviews]);
          this.reviewForm.reset({
            rating: 5
          });
          this.successMsg = "Review submitted!";
          setTimeout(() => this.successMsg = "", 3e3);
        }
      });
    }
    getStars(rating) {
      return Array.from({
        length: 5
      }, (_, i) => i < Math.floor(rating) ? "bi-star-fill" : i < rating ? "bi-star-half" : "bi-star");
    }
    static {
      this.\u0275fac = function ProductDetailComponent_Factory(t) {
        return new (t || ProductDetailComponent2)();
      };
    }
    static {
      this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
        type: ProductDetailComponent2,
        selectors: [["app-product-detail"]],
        standalone: true,
        features: [\u0275\u0275StandaloneFeature],
        decls: 10,
        vars: 3,
        consts: [[1, "container", "py-4"], ["aria-label", "breadcrumb", 1, "mb-3"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], ["class", "spinner-overlay", 4, "ngIf"], [4, "ngIf"], [1, "spinner-overlay"], [1, "spinner-border", "text-primary"], [1, "row", "g-4"], [1, "col-md-5"], ["onerror", "this.src='https://picsum.photos/400/300'", 1, "img-fluid", "rounded", 2, "max-height", "450px", "object-fit", "cover", "width", "100%", 3, "src", "alt"], [1, "col-md-7"], [1, "category-badge", "mb-3", "d-inline-block"], [1, "d-flex", "align-items-center", "mb-3"], [1, "star-rating", "me-2", "fs-5"], [3, "class", 4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "mb-3"], [4, "ngIf", "ngIfElse"], ["noDiscount", ""], [1, "text-muted", "mb-4"], ["oos", ""], ["class", "alert alert-success", 4, "ngIf"], [1, "d-flex", "gap-3", "mb-4"], [1, "input-group", "w-auto"], [1, "btn", "btn-outline-secondary", 3, "click"], ["type", "number", "min", "1", 1, "form-control", "text-center", 2, "width", "70px", 3, "ngModel", "max", "ngModelChange"], [1, "btn", "btn-primary", "px-4", 3, "disabled", "click"], [1, "bi", "bi-cart-plus", "me-2"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], [1, "mt-5"], ["class", "card mb-4 p-3", 4, "ngIf"], ["noReviews", ""], [1, "price-original", "fs-5", "me-2"], [1, "price-discounted", "fs-3"], [1, "badge", "bg-danger", "ms-2"], [1, "fw-bold", "fs-3"], [1, "alert", "alert-success"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "bi", "bi-heart", "me-1"], [1, "card", "mb-4", "p-3"], [3, "formGroup", "ngSubmit"], [1, "mb-2"], [1, "form-label"], ["formControlName", "rating", 1, "form-select", 2, "width", "auto"], ["value", "5"], ["value", "4"], ["value", "3"], ["value", "2"], ["value", "1"], ["formControlName", "comment", "rows", "3", "placeholder", "Share your experience...", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm"], ["class", "card mb-2 p-3", 4, "ngFor", "ngForOf"], [1, "card", "mb-2", "p-3"], [1, "d-flex", "justify-content-between"], [1, "star-rating"], [1, "mt-2", "mb-0"]],
        template: function ProductDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "ol", 2)(3, "li", 3)(4, "a", 4);
            \u0275\u0275text(5, "Home");
            \u0275\u0275elementEnd()();
            \u0275\u0275elementStart(6, "li", 5);
            \u0275\u0275text(7);
            \u0275\u0275elementEnd()()();
            \u0275\u0275template(8, ProductDetailComponent_div_8_Template, 2, 0, "div", 6);
            \u0275\u0275template(9, ProductDetailComponent_ng_container_9_Template, 46, 22, "ng-container", 7);
            \u0275\u0275elementEnd();
          }
          if (rf & 2) {
            let tmp_0_0;
            \u0275\u0275advance(7);
            \u0275\u0275textInterpolate((tmp_0_0 = ctx.product()) == null ? null : tmp_0_0.name);
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.loading());
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.product());
          }
        },
        dependencies: [NgIf, NgForOf, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DatePipe],
        encapsulation: 2
      });
    }
  }
  return ProductDetailComponent2;
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-QNGCZOJW.js.map
