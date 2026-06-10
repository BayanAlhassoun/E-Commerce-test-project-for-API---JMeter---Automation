import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Wishlist } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly apiUrl = `${environment.apiUrl}/wishlist`;

  constructor(private http: HttpClient) {}

  getWishlist(): Observable<Wishlist> {
    return this.http.get<Wishlist>(this.apiUrl);
  }

  addToWishlist(productId: number): Observable<Wishlist> {
    return this.http.post<Wishlist>(`${this.apiUrl}/${productId}`, {});
  }

  removeFromWishlist(productId: number): Observable<Wishlist> {
    return this.http.delete<Wishlist>(`${this.apiUrl}/${productId}`);
  }
}
