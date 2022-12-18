
interface ProductInputSchema {
    name: string;
    description: string;
    quantity: number;
    price: number;
}

export type Product = ProductInputSchema | null;