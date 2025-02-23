export default interface InventoryItem {
    id: string;
    product: string;
    category: string;
    sku: string;
    stock: number;
    image: string;
  }
  
  export default interface ProductInfo {
    sku: string;
    price: number;
    category: string;
    stock: number;
    processed: number;
    total: number;
    status: string;
  }