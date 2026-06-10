import {
  HttpClient,
  environment,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PDZTZR5P.js";

// src/app/services/cart.service.ts
var CartService = /* @__PURE__ */ (() => {
  class CartService2 {
    constructor(http) {
      this.http = http;
      this.apiUrl = `${environment.apiUrl}/cart`;
      this.cartItemCount = signal(0);
    }
    getCart() {
      return this.http.get(this.apiUrl).pipe(tap((cart) => this.cartItemCount.set(cart.totalItems)));
    }
    addToCart(data) {
      return this.http.post(`${this.apiUrl}/items`, data).pipe(tap((cart) => this.cartItemCount.set(cart.totalItems)));
    }
    updateCartItem(cartItemId, data) {
      return this.http.put(`${this.apiUrl}/items/${cartItemId}`, data).pipe(tap((cart) => this.cartItemCount.set(cart.totalItems)));
    }
    removeFromCart(cartItemId) {
      return this.http.delete(`${this.apiUrl}/items/${cartItemId}`).pipe(tap((cart) => this.cartItemCount.set(cart.totalItems)));
    }
    clearCart() {
      return this.http.delete(this.apiUrl).pipe(tap(() => this.cartItemCount.set(0)));
    }
    static {
      this.\u0275fac = function CartService_Factory(t) {
        return new (t || CartService2)(\u0275\u0275inject(HttpClient));
      };
    }
    static {
      this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: CartService2,
        factory: CartService2.\u0275fac,
        providedIn: "root"
      });
    }
  }
  return CartService2;
})();

export {
  CartService
};
//# sourceMappingURL=chunk-OS77V6L3.js.map
