export interface Order {
  id: number;
  userId: string;
  userEmail: string;
  userName: string;
  status: string;
  totalAmount: number;
  shippingAddress: string;
  paymentMethod: string;
  createdAt: string;
  updatedAt?: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  productId: number;
  productName: string;
  productImage: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  subtotal: number;
}

export interface CreateOrderRequest {
  shippingAddress: string;
  paymentMethod: string;
}

export interface UpdateOrderStatusRequest {
  status: string;
}

export interface Wishlist {
  id: number;
  items: WishlistItem[];
  totalItems: number;
}

export interface WishlistItem {
  id: number;
  productId: number;
  productName: string;
  productImage: string;
  price: number;
  discountPercentage: number;
  inStock: boolean;
  addedAt: string;
}
