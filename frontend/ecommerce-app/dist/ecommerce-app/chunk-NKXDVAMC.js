import {
  OrderService
} from "./chunk-EJSVBMFR.js";
import {
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PDZTZR5P.js";
import "./chunk-SHAOKUVO.js";

// src/app/components/orders/orders.component.ts
function OrdersComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementStart(2, "h4", 11);
    \u0275\u0275text(3, "No orders yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 12);
    \u0275\u0275text(5, "Start Shopping");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_ng_template_5_ng_template_1_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "img", 24);
    \u0275\u0275elementStart(2, "div")(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275property("src", item_r9.productImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Qty: ", item_r9.quantity, " \xD7 ", "$" + item_r9.unitPrice.toFixed(2), "");
  }
}
function OrdersComponent_ng_template_5_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16)(10, "div", 17)(11, "div", 18);
    \u0275\u0275template(12, OrdersComponent_ng_template_5_ng_template_1_div_0_div_12_Template, 7, 4, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 20)(14, "div", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 22);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "br");
    \u0275\u0275elementStart(19, "small", 22);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const order_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", order_r7.id, "");
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" \u2014 ", \u0275\u0275pipeBind2(6, 9, order_r7.createdAt, "mediumDate"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge order-status-" + order_r7.status.toLowerCase() + " fs-6");
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", order_r7.status, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", order_r7.items);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("$" + order_r7.totalAmount.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r7.paymentMethod);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r7.shippingAddress);
  }
}
function OrdersComponent_ng_template_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrdersComponent_ng_template_5_ng_template_1_div_0_Template, 21, 12, "div", 13);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r5.orders());
  }
}
function OrdersComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrdersComponent_ng_template_5_div_0_Template, 6, 0, "div", 7);
    \u0275\u0275template(1, OrdersComponent_ng_template_5_ng_template_1_Template, 1, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r4 = \u0275\u0275reference(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.orders().length === 0)("ngIfElse", _r4);
  }
}
var OrdersComponent = /* @__PURE__ */ (() => {
  class OrdersComponent2 {
    constructor() {
      this.orderService = inject(OrderService);
      this.orders = signal([]);
      this.loading = signal(false);
    }
    ngOnInit() {
      this.loading.set(true);
      this.orderService.getOrders().subscribe({
        next: (o) => {
          this.orders.set(o);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
    static {
      this.\u0275fac = function OrdersComponent_Factory(t) {
        return new (t || OrdersComponent2)();
      };
    }
    static {
      this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
        type: OrdersComponent2,
        selectors: [["app-orders"]],
        standalone: true,
        features: [\u0275\u0275StandaloneFeature],
        decls: 7,
        vars: 2,
        consts: [[1, "container", "py-4"], [1, "page-header", "mb-4"], [1, "bi", "bi-bag"], ["class", "spinner-overlay", 4, "ngIf", "ngIfElse"], ["orderContent", ""], [1, "spinner-overlay"], [1, "spinner-border", "text-primary"], ["class", "text-center py-5", 4, "ngIf", "ngIfElse"], ["orderList", ""], [1, "text-center", "py-5"], [1, "bi", "bi-bag-x", "display-1", "text-muted"], [1, "mt-3", "text-muted"], ["routerLink", "/", 1, "btn", "btn-primary", "mt-3"], ["class", "card order-card mb-3", 4, "ngFor", "ngForOf"], [1, "card", "order-card", "mb-3"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-body"], [1, "row"], [1, "col-md-8"], ["class", "d-flex align-items-center mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "text-end"], [1, "fs-5", "fw-bold"], [1, "text-muted"], [1, "d-flex", "align-items-center", "mb-2"], ["onerror", "this.src='https://picsum.photos/50/50'", 1, "rounded", "me-2", 2, "width", "50px", "height", "50px", "object-fit", "cover", 3, "src"]],
        template: function OrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
            \u0275\u0275element(2, "i", 2);
            \u0275\u0275text(3, "My Orders");
            \u0275\u0275elementEnd();
            \u0275\u0275template(4, OrdersComponent_div_4_Template, 2, 0, "div", 3);
            \u0275\u0275template(5, OrdersComponent_ng_template_5_Template, 3, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
            \u0275\u0275elementEnd();
          }
          if (rf & 2) {
            const _r1 = \u0275\u0275reference(6);
            \u0275\u0275advance(4);
            \u0275\u0275property("ngIf", ctx.loading())("ngIfElse", _r1);
          }
        },
        dependencies: [NgIf, NgForOf, RouterLink, DatePipe],
        encapsulation: 2
      });
    }
  }
  return OrdersComponent2;
})();
export {
  OrdersComponent
};
//# sourceMappingURL=chunk-NKXDVAMC.js.map
