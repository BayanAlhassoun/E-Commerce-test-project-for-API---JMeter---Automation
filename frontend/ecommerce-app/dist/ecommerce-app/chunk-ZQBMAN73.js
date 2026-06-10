import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PDZTZR5P.js";

// src/app/services/product.service.ts
var ProductService = /* @__PURE__ */ (() => {
  class ProductService2 {
    constructor(http) {
      this.http = http;
      this.apiUrl = `${environment.apiUrl}/product`;
      this.categoryUrl = `${environment.apiUrl}/category`;
      this.reviewUrl = `${environment.apiUrl}/review`;
    }
    getProducts(filter = {}) {
      let params = new HttpParams();
      if (filter.searchTerm)
        params = params.set("searchTerm", filter.searchTerm);
      if (filter.category)
        params = params.set("category", filter.category);
      if (filter.minPrice != null)
        params = params.set("minPrice", filter.minPrice.toString());
      if (filter.maxPrice != null)
        params = params.set("maxPrice", filter.maxPrice.toString());
      if (filter.sortBy)
        params = params.set("sortBy", filter.sortBy);
      if (filter.sortDescending != null)
        params = params.set("sortDescending", filter.sortDescending.toString());
      if (filter.page)
        params = params.set("page", filter.page.toString());
      if (filter.pageSize)
        params = params.set("pageSize", filter.pageSize.toString());
      return this.http.get(this.apiUrl, {
        params
      });
    }
    getProduct(id) {
      return this.http.get(`${this.apiUrl}/${id}`);
    }
    createProduct(data) {
      return this.http.post(this.apiUrl, data);
    }
    updateProduct(id, data) {
      return this.http.put(`${this.apiUrl}/${id}`, data);
    }
    deleteProduct(id) {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
    getCategories() {
      return this.http.get(this.categoryUrl);
    }
    createCategory(data) {
      return this.http.post(this.categoryUrl, data);
    }
    updateCategory(id, data) {
      return this.http.put(`${this.categoryUrl}/${id}`, data);
    }
    deleteCategory(id) {
      return this.http.delete(`${this.categoryUrl}/${id}`);
    }
    getProductReviews(productId) {
      return this.http.get(`${this.reviewUrl}/product/${productId}`);
    }
    addReview(data) {
      return this.http.post(this.reviewUrl, data);
    }
    deleteReview(reviewId) {
      return this.http.delete(`${this.reviewUrl}/${reviewId}`);
    }
    static {
      this.\u0275fac = function ProductService_Factory(t) {
        return new (t || ProductService2)(\u0275\u0275inject(HttpClient));
      };
    }
    static {
      this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: ProductService2,
        factory: ProductService2.\u0275fac,
        providedIn: "root"
      });
    }
  }
  return ProductService2;
})();

export {
  ProductService
};
//# sourceMappingURL=chunk-ZQBMAN73.js.map
