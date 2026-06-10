export interface Dashboard {
  totalUsers: number;
  totalOrders: number;
  totalProducts: number;
  totalCategories: number;
  totalRevenue: number;
  monthlyRevenue: number;
  pendingOrders: number;
  lowStockProducts: number;
  recentOrders: RecentOrder[];
  topProducts: TopProduct[];
}

export interface RecentOrder {
  orderId: number;
  customerName: string;
  customerEmail: string;
  amount: number;
  status: string;
  createdAt: string;
}

export interface TopProduct {
  productId: number;
  productName: string;
  totalSold: number;
  revenue: number;
}
