import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PDZTZR5P.js";

// src/app/services/wishlist.service.ts
var WishlistService = /* @__PURE__ */ (() => {
  class WishlistService2 {
    constructor(http) {
      this.http = http;
      this.apiUrl = `${environment.apiUrl}/wishlist`;
    }
    getWishlist() {
      return this.http.get(this.apiUrl);
    }
    addToWishlist(productId) {
      return this.http.post(`${this.apiUrl}/${productId}`, {});
    }
    removeFromWishlist(productId) {
      return this.http.delete(`${this.apiUrl}/${productId}`);
    }
    static {
      this.\u0275fac = function WishlistService_Factory(t) {
        return new (t || WishlistService2)(\u0275\u0275inject(HttpClient));
      };
    }
    static {
      this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: WishlistService2,
        factory: WishlistService2.\u0275fac,
        providedIn: "root"
      });
    }
  }
  return WishlistService2;
})();

export {
  WishlistService
};
//# sourceMappingURL=chunk-TUSZUKHF.js.map
