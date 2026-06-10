import {
  Router
} from "./chunk-WA2BM3VX.js";
import {
  HttpClient,
  environment,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PDZTZR5P.js";

// src/app/services/auth.service.ts
var AuthService = /* @__PURE__ */ (() => {
  class AuthService2 {
    constructor(http, router) {
      this.http = http;
      this.router = router;
      this.apiUrl = `${environment.apiUrl}/auth`;
      this.TOKEN_KEY = "access_token";
      this.REFRESH_KEY = "refresh_token";
      this.USER_KEY = "user_data";
      this.isLoggedIn = signal(false);
      this.currentUser = signal(null);
      this.loadFromStorage();
    }
    loadFromStorage() {
      const token = localStorage.getItem(this.TOKEN_KEY);
      const userData = localStorage.getItem(this.USER_KEY);
      if (token && userData) {
        try {
          const user = JSON.parse(userData);
          const expiry = new Date(user.expiresAt);
          if (expiry > /* @__PURE__ */ new Date()) {
            this.isLoggedIn.set(true);
            this.currentUser.set(user);
          } else {
            this.clearStorage();
          }
        } catch {
          this.clearStorage();
        }
      }
    }
    register(data) {
      return this.http.post(`${this.apiUrl}/register`, data).pipe(tap((response) => this.handleAuth(response)));
    }
    login(data) {
      return this.http.post(`${this.apiUrl}/login`, data).pipe(tap((response) => this.handleAuth(response)));
    }
    logout() {
      this.http.post(`${this.apiUrl}/logout`, {}).subscribe();
      this.clearStorage();
      this.isLoggedIn.set(false);
      this.currentUser.set(null);
      this.router.navigate(["/login"]);
    }
    getAccessToken() {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    getRefreshToken() {
      return localStorage.getItem(this.REFRESH_KEY);
    }
    isAdmin() {
      return this.currentUser()?.roles.includes("Admin") ?? false;
    }
    handleAuth(response) {
      localStorage.setItem(this.TOKEN_KEY, response.accessToken);
      localStorage.setItem(this.REFRESH_KEY, response.refreshToken);
      localStorage.setItem(this.USER_KEY, JSON.stringify(response));
      this.isLoggedIn.set(true);
      this.currentUser.set(response);
    }
    clearStorage() {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.REFRESH_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
    static {
      this.\u0275fac = function AuthService_Factory(t) {
        return new (t || AuthService2)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
      };
    }
    static {
      this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: AuthService2,
        factory: AuthService2.\u0275fac,
        providedIn: "root"
      });
    }
  }
  return AuthService2;
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-PUK2UWPT.js.map
