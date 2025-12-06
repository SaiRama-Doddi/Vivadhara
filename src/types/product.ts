/* export interface Product {
  id: number;
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  images: string[];
  pricePerTon?: number;
}

export interface CartItem {
  product: Product;
  qty: number;
}
 */

export interface Product {
  id: string;
  slug:string;
  name: string;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  
  // Newly Added Fields
  specs: {                    // Technical specifications
    [key: string]: string;
  };

  uses: string[];             // Species or applications

  features: string[];         // Benefits / highlights
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface UserDetails {
  name: string;

  phone: string;

}
