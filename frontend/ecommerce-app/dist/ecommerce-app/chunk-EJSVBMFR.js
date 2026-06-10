import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PDZTZR5P.js";

// src/app/services/order.service.ts
var OrderService = /* @__PURE__ */ (() => {
  class OrderService2 {
    constructor(http) {
      this.http = http;
      this.apiUrl = `${environment.apiUrl}/order`;
    }
    getOrders() {
      return this.http.get(this.apiUrl);
    }
    getOrder(id) {
      return this.http.get(`${this.apiUrl}/${id}`);
    }
    createOrder(data) {
      return this.http.post(this.apiUrl, data);
    }
    updateOrderStatus(id, data) {
      return this.http.put(`${this.apiUrl}/${id}/status`, data);
    }
    static {
      this.\u0275fac = function OrderService_Factory(t) {
        return new (t || OrderService2)(\u0275\u0275inject(HttpClient));
      };
    }
    static {
      this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: OrderService2,
        factory: OrderService2.\u0275fac,
        providedIn: "root"
      });
    }
  }
  return OrderService2;
})();

export {
  OrderService
};
//# sourceMappingURL=chunk-EJSVBMFR.js.map
