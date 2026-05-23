export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    ageGroup: string;
    image: string;
    rating: number;
    reviews: number;
    description: string;
    sizes: string[];
    colors: string[];
    badge?: string;
  }
  
  export interface CartItem {
    product: Product;
    size: string;
    color: string;
    quantity: number;
  }
  
  export type PageView = 'home' | 'category' | 'pdp' | 'cart' | 'checkout';
  
