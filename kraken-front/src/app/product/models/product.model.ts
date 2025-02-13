export interface Product {
    name: string;
    updated_at: string;
    prices: number[];
    rate: number;
    category: 'product' | 'equipment';
}
