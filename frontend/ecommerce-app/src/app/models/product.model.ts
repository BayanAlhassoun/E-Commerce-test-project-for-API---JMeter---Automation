export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  stock: number;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  discountPercentage: number;
  isActive: boolean;
  createdAt: string;
  averageRating: number;
  reviewCount: number;
}

export interface ProductFilter {
  searchTerm?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  sortDescending?: boolean;
  page?: number;
  pageSize?: number;
}

export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  productCount: number;
}

export interface Review {
  id: number;
  productId: number;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface CreateReview {
  productId: number;
  rating: number;
  comment: string;
}
