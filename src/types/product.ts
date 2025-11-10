/**
 * Core Product Data Types
 * These define the structure of product data throughout the application
 */

export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description_short: string;
  description_long?: string;
  categories: string[];
  tags: string[];
  images: string[];
  price_suggested: number;
  currency: string;
  stock: number;
  attributes: ProductAttributes;
  created_at?: string;
  updated_at?: string;
}

export interface ProductAttributes {
  material?: string;
  height_cm?: number;
  width_cm?: number;
  depth_cm?: number;
  weight_g?: number;
  manufacturer?: string;
  release_date?: string;
  limited_edition?: boolean;
  series?: string;
  character?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  product_count?: number;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  description: string;
  contact: {
    whatsapp: string;
    email: string;
    social?: {
      instagram?: string;
      twitter?: string;
      facebook?: string;
    };
  };
  business_hours?: string;
  location?: string;
}

export interface ProductFilter {
  categories?: string[];
  tags?: string[];
  priceRange?: [number, number];
  inStockOnly?: boolean;
  searchQuery?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest';
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

/**
 * AI Talk About Product Response
 * Structure returned by the LLM when analyzing a product
 */
export interface TalkAboutProductResponse {
  title: string;
  pitch: string;
  bullets: string[];
  recommendation: string;
  stock_text: string;
  whatsapp_text: string;
}
