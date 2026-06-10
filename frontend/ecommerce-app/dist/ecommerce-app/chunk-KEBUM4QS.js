import {
  ProductService
} from "./chunk-ZQBMAN73.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
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
  DatePipe,
  HttpClient,
  NgForOf,
  NgIf,
  environment,
  inject,
  signal,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PDZTZR5P.js";
import "./chunk-SHAOKUVO.js";

// src/app/services/admin.service.ts
var AdminService = /* @__PURE__ */ (() => {
  class AdminService2 {
    constructor(http) {
      this.http = http;
      this.apiUrl = `${environment.apiUrl}/admin`;
    }
    getDashboard() {
      return this.http.get(`${this.apiUrl}/dashboard`);
    }
    getRevenueSummary() {
      return this.http.get(`${this.apiUrl}/revenue`);
    }
    static {
      this.\u0275fac = function AdminService_Factory(t) {
        return new (t || AdminService2)(\u0275\u0275inject(HttpClient));
      };
    }
    static {
      this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: AdminService2,
        factory: AdminService2.\u0275fac,
        providedIn: "root"
      });
    }
  }
  return AdminService2;
})();

// src/app/components/admin-dashboard/admin-dashboard.component.ts
function AdminDashboardComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "button", 10);
    \u0275\u0275listener("click", function AdminDashboardComponent_li_4_Template_button_click_1_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r7);
      const tab_r5 = restoredCtx.$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.activeTab = tab_r5.id);
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275classProp("active", ctx_r0.activeTab === tab_r5.id);
    \u0275\u0275advance(1);
    \u0275\u0275classMap("bi " + tab_r5.icon + " me-2");
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("", tab_r5.label, " ");
  }
}
function AdminDashboardComponent_ng_container_9_ng_container_1_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275element(5, "br");
    \u0275\u0275elementStart(6, "small", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r11.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r11.customerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r11.customerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("$" + order_r11.amount.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge order-status-" + order_r11.status.toLowerCase());
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(order_r11.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 8, order_r11.createdAt, "mediumDate"));
  }
}
function AdminDashboardComponent_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "div", 14);
    \u0275\u0275text(5, "Total Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "i", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "div", 17)(11, "div", 14);
    \u0275\u0275text(12, "Total Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "div", 19)(18, "div", 14);
    \u0275\u0275text(19, "Total Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12)(24, "div", 21)(25, "div", 14);
    \u0275\u0275text(26, "Total Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 15);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "i", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 11)(31, "div", 23)(32, "div", 24)(33, "div", 14);
    \u0275\u0275text(34, "Monthly Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 25);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 23)(38, "div", 24)(39, "div", 14);
    \u0275\u0275text(40, "Pending Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 26);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 23)(44, "div", 24)(45, "div", 14);
    \u0275\u0275text(46, "Low Stock Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 27);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "h5");
    \u0275\u0275text(50, "Recent Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 28)(52, "table", 29)(53, "thead")(54, "tr")(55, "th");
    \u0275\u0275text(56, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th");
    \u0275\u0275text(64, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "tbody");
    \u0275\u0275template(66, AdminDashboardComponent_ng_container_9_ng_container_1_tr_66_Template, 16, 11, "tr", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r9 = ctx.ngIf;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r9.totalUsers);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r9.totalOrders);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r9.totalProducts);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate("$" + d_r9.totalRevenue.toFixed(0));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate("$" + d_r9.monthlyRevenue.toFixed(2));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r9.pendingOrders);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r9.lowStockProducts);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", d_r9.recentOrders);
  }
}
function AdminDashboardComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminDashboardComponent_ng_container_9_ng_container_1_Template, 67, 8, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r1.dashboard());
  }
}
function AdminDashboardComponent_ng_container_10_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "select", 33);
    \u0275\u0275listener("change", function AdminDashboardComponent_ng_container_10_tr_22_Template_select_change_16_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r15);
      const order_r13 = restoredCtx.$implicit;
      const ctx_r14 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r14.updateStatus(order_r13.id, $event.target.value));
    });
    \u0275\u0275elementStart(17, "option");
    \u0275\u0275text(18, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option");
    \u0275\u0275text(20, "Processing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option");
    \u0275\u0275text(22, "Shipped");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option");
    \u0275\u0275text(24, "Delivered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option");
    \u0275\u0275text(26, "Cancelled");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r13.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r13.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r13.items.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("$" + order_r13.totalAmount.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge order-status-" + order_r13.status.toLowerCase());
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(order_r13.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 9, order_r13.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", order_r13.status);
  }
}
function AdminDashboardComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5", 32);
    \u0275\u0275text(2, "All Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "table", 29)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, AdminDashboardComponent_ng_container_10_tr_22_Template, 27, 12, "tr", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r2.orders());
  }
}
function AdminDashboardComponent_ng_container_11_div_7_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r19 = ctx.$implicit;
    \u0275\u0275property("value", cat_r19.id);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(cat_r19.name);
  }
}
function AdminDashboardComponent_ng_container_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 39);
    \u0275\u0275listener("ngSubmit", function AdminDashboardComponent_ng_container_11_div_7_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r20 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r20.saveProduct());
    });
    \u0275\u0275elementStart(4, "div", 40);
    \u0275\u0275element(5, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275element(7, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275element(9, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 40);
    \u0275\u0275element(11, "textarea", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12)(13, "select", 45);
    \u0275\u0275template(14, AdminDashboardComponent_ng_container_11_div_7_option_14_Template, 2, 2, "option", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275element(16, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 48);
    \u0275\u0275element(18, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 50)(20, "button", 51);
    \u0275\u0275text(21, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 52);
    \u0275\u0275listener("click", function AdminDashboardComponent_ng_container_11_div_7_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r22 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r22.cancelEdit());
    });
    \u0275\u0275text(23, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r16.editingProduct ? "Edit Product" : "New Product");
    \u0275\u0275advance(1);
    \u0275\u0275property("formGroup", ctx_r16.productForm);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r16.categories());
  }
}
function AdminDashboardComponent_ng_container_11_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 54);
    \u0275\u0275listener("click", function AdminDashboardComponent_ng_container_11_tr_25_Template_button_click_12_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r25);
      const product_r23 = restoredCtx.$implicit;
      const ctx_r24 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r24.editProduct(product_r23));
    });
    \u0275\u0275element(13, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 56);
    \u0275\u0275listener("click", function AdminDashboardComponent_ng_container_11_tr_25_Template_button_click_14_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r25);
      const product_r23 = restoredCtx.$implicit;
      const ctx_r26 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r26.deleteProduct(product_r23.id));
    });
    \u0275\u0275element(15, "i", 57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r23 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r23.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r23.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r23.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("$" + product_r23.price.toFixed(2));
    \u0275\u0275advance(1);
    \u0275\u0275classMap(product_r23.stock <= 5 ? "text-danger" : "");
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(product_r23.stock);
  }
}
function AdminDashboardComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "h5");
    \u0275\u0275text(3, "Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function AdminDashboardComponent_ng_container_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r27 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r27.showProductForm = !ctx_r27.showProductForm);
    });
    \u0275\u0275element(5, "i", 36);
    \u0275\u0275text(6, "Add Product ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminDashboardComponent_ng_container_11_div_7_Template, 24, 3, "div", 37);
    \u0275\u0275elementStart(8, "div", 28)(9, "table", 29)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, AdminDashboardComponent_ng_container_11_tr_25_Template, 16, 7, "tr", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.showProductForm);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r3.products());
  }
}
function AdminDashboardComponent_ng_container_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "form", 39);
    \u0275\u0275listener("ngSubmit", function AdminDashboardComponent_ng_container_12_div_7_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r31 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r31.saveCategory());
    });
    \u0275\u0275elementStart(2, "div", 23);
    \u0275\u0275element(3, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275element(5, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 64)(7, "button", 65);
    \u0275\u0275text(8, "Save");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 64)(10, "button", 66);
    \u0275\u0275listener("click", function AdminDashboardComponent_ng_container_12_div_7_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r33 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r33.showCategoryForm = false);
    });
    \u0275\u0275text(11, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r29 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275property("formGroup", ctx_r29.categoryForm);
  }
}
function AdminDashboardComponent_ng_container_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 24)(2, "div", 68)(3, "div")(4, "h6");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 69);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 70);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 56);
    \u0275\u0275listener("click", function AdminDashboardComponent_ng_container_12_div_9_Template_button_click_10_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r36);
      const cat_r34 = restoredCtx.$implicit;
      const ctx_r35 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r35.deleteCategory(cat_r34.id));
    });
    \u0275\u0275element(11, "i", 57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cat_r34 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(cat_r34.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r34.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cat_r34.productCount, " products");
  }
}
function AdminDashboardComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "h5");
    \u0275\u0275text(3, "Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function AdminDashboardComponent_ng_container_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r37 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r37.showCategoryForm = !ctx_r37.showCategoryForm);
    });
    \u0275\u0275element(5, "i", 36);
    \u0275\u0275text(6, "Add Category ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminDashboardComponent_ng_container_12_div_7_Template, 12, 1, "div", 58);
    \u0275\u0275elementStart(8, "div", 59);
    \u0275\u0275template(9, AdminDashboardComponent_ng_container_12_div_9_Template, 12, 3, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r4.showCategoryForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.categories());
  }
}
var AdminDashboardComponent = /* @__PURE__ */ (() => {
  class AdminDashboardComponent2 {
    constructor() {
      this.adminService = inject(AdminService);
      this.productService = inject(ProductService);
      this.orderService = inject(OrderService);
      this.fb = inject(FormBuilder);
      this.dashboard = signal(null);
      this.products = signal([]);
      this.categories = signal([]);
      this.orders = signal([]);
      this.activeTab = "dashboard";
      this.showProductForm = false;
      this.showCategoryForm = false;
      this.editingProduct = null;
      this.tabs = [{
        id: "dashboard",
        label: "Dashboard",
        icon: "bi-speedometer2"
      }, {
        id: "orders",
        label: "Orders",
        icon: "bi-bag"
      }, {
        id: "products",
        label: "Products",
        icon: "bi-box"
      }, {
        id: "categories",
        label: "Categories",
        icon: "bi-tags"
      }];
      this.productForm = this.fb.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
        price: [0, [Validators.required, Validators.min(0.01)]],
        stock: [0, Validators.required],
        categoryId: [1, Validators.required],
        discountPercentage: [0],
        imageUrl: [""],
        isActive: [true]
      });
      this.categoryForm = this.fb.group({
        name: ["", Validators.required],
        description: [""],
        imageUrl: [""]
      });
    }
    ngOnInit() {
      this.loadDashboard();
      this.loadProducts();
      this.loadCategories();
      this.loadOrders();
    }
    loadDashboard() {
      this.adminService.getDashboard().subscribe((d) => this.dashboard.set(d));
    }
    loadProducts() {
      this.productService.getProducts({
        pageSize: 100
      }).subscribe((r) => this.products.set(r.items));
    }
    loadCategories() {
      this.productService.getCategories().subscribe((c) => this.categories.set(c));
    }
    loadOrders() {
      this.orderService.getOrders().subscribe((o) => this.orders.set(o));
    }
    saveProduct() {
      if (this.productForm.invalid)
        return;
      const data = this.productForm.value;
      if (this.editingProduct) {
        this.productService.updateProduct(this.editingProduct.id, data).subscribe(() => {
          this.loadProducts();
          this.cancelEdit();
        });
      } else {
        this.productService.createProduct(data).subscribe(() => {
          this.loadProducts();
          this.cancelEdit();
        });
      }
    }
    editProduct(product) {
      this.editingProduct = product;
      this.showProductForm = true;
      this.productForm.patchValue({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        categoryId: product.categoryId,
        discountPercentage: product.discountPercentage,
        imageUrl: product.imageUrl,
        isActive: product.isActive
      });
    }
    cancelEdit() {
      this.editingProduct = null;
      this.showProductForm = false;
      this.productForm.reset({
        isActive: true,
        discountPercentage: 0,
        stock: 0,
        price: 0
      });
    }
    deleteProduct(id) {
      if (confirm("Delete this product?")) {
        this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
      }
    }
    saveCategory() {
      if (this.categoryForm.invalid)
        return;
      this.productService.createCategory(this.categoryForm.value).subscribe(() => {
        this.loadCategories();
        this.showCategoryForm = false;
        this.categoryForm.reset();
      });
    }
    deleteCategory(id) {
      if (confirm("Delete this category?")) {
        this.productService.deleteCategory(id).subscribe(() => this.loadCategories());
      }
    }
    updateStatus(orderId, status) {
      this.orderService.updateOrderStatus(orderId, {
        status
      }).subscribe(() => this.loadOrders());
    }
    static {
      this.\u0275fac = function AdminDashboardComponent_Factory(t) {
        return new (t || AdminDashboardComponent2)();
      };
    }
    static {
      this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
        type: AdminDashboardComponent2,
        selectors: [["app-admin-dashboard"]],
        standalone: true,
        features: [\u0275\u0275StandaloneFeature],
        decls: 13,
        vars: 5,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-2", "d-none", "d-md-block", "admin-sidebar", "py-3", "px-2"], [1, "nav", "flex-column"], ["class", "nav-item mb-1", 4, "ngFor", "ngForOf"], [1, "col-md-10", "py-4", "px-4"], [1, "mb-4"], [1, "bi", "bi-speedometer2", "me-2"], [4, "ngIf"], [1, "nav-item", "mb-1"], [1, "nav-link", "w-100", "text-start", 3, "click"], [1, "row", "g-3", "mb-4"], [1, "col-md-3"], [1, "card", "stat-card", "p-3"], [1, "text-muted", "small"], [1, "fs-3", "fw-bold"], [1, "bi", "bi-people", "text-primary", "fs-4"], [1, "card", "stat-card", "p-3", 2, "border-left-color", "#22c55e"], [1, "bi", "bi-bag", "text-success", "fs-4"], [1, "card", "stat-card", "p-3", 2, "border-left-color", "#f59e0b"], [1, "bi", "bi-box", "text-warning", "fs-4"], [1, "card", "stat-card", "p-3", 2, "border-left-color", "#7c3aed"], [1, "bi", "bi-currency-dollar", "fs-4"], [1, "col-md-4"], [1, "card", "p-3"], [1, "fs-4", "fw-bold", "text-success"], [1, "fs-4", "fw-bold", "text-warning"], [1, "fs-4", "fw-bold", "text-danger"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "mb-3"], [1, "form-select", "form-select-sm", 2, "width", "auto", 3, "value", "change"], [1, "d-flex", "justify-content-between", "mb-3"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus", "me-1"], ["class", "card mb-4 p-3", 4, "ngIf"], [1, "card", "mb-4", "p-3"], [1, "row", "g-2", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], ["formControlName", "name", "placeholder", "Product Name", 1, "form-control"], ["type", "number", "formControlName", "price", "placeholder", "Price", 1, "form-control"], ["type", "number", "formControlName", "stock", "placeholder", "Stock", 1, "form-control"], ["formControlName", "description", "placeholder", "Description", "rows", "2", 1, "form-control"], ["formControlName", "categoryId", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "discountPercentage", "placeholder", "Discount %", 1, "form-control"], [1, "col-12"], ["formControlName", "imageUrl", "placeholder", "Image URL", 1, "form-control"], [1, "col-12", "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [3, "value"], [1, "btn", "btn-outline-primary", "btn-sm", "me-1", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash"], ["class", "card mb-3 p-3", 4, "ngIf"], [1, "row", "row-cols-1", "row-cols-md-3", "g-3"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "p-3"], ["formControlName", "name", "placeholder", "Category Name", 1, "form-control"], ["formControlName", "description", "placeholder", "Description", 1, "form-control"], [1, "col-md-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "w-100"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "w-100", 3, "click"], [1, "col"], [1, "d-flex", "justify-content-between"], [1, "text-muted", "small", "mb-1"], [1, "badge", "bg-secondary"]],
        template: function AdminDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "ul", 3);
            \u0275\u0275template(4, AdminDashboardComponent_li_4_Template, 4, 5, "li", 4);
            \u0275\u0275elementEnd()();
            \u0275\u0275elementStart(5, "main", 5)(6, "h3", 6);
            \u0275\u0275element(7, "i", 7);
            \u0275\u0275text(8, "Admin Dashboard ");
            \u0275\u0275elementEnd();
            \u0275\u0275template(9, AdminDashboardComponent_ng_container_9_Template, 2, 1, "ng-container", 8);
            \u0275\u0275template(10, AdminDashboardComponent_ng_container_10_Template, 23, 1, "ng-container", 8);
            \u0275\u0275template(11, AdminDashboardComponent_ng_container_11_Template, 26, 2, "ng-container", 8);
            \u0275\u0275template(12, AdminDashboardComponent_ng_container_12_Template, 10, 2, "ng-container", 8);
            \u0275\u0275elementEnd()()();
          }
          if (rf & 2) {
            \u0275\u0275advance(4);
            \u0275\u0275property("ngForOf", ctx.tabs);
            \u0275\u0275advance(5);
            \u0275\u0275property("ngIf", ctx.activeTab === "dashboard");
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.activeTab === "orders");
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.activeTab === "products");
            \u0275\u0275advance(1);
            \u0275\u0275property("ngIf", ctx.activeTab === "categories");
          }
        },
        dependencies: [NgIf, NgForOf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, DatePipe],
        encapsulation: 2
      });
    }
  }
  return AdminDashboardComponent2;
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-KEBUM4QS.js.map
