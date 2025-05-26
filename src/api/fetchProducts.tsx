const API_URL = '/productsData.json';

export interface Product {
    image: string;
    title: string;
    price: number;
    content: string;
    url: string;
    ean: number;
    relevance: number;
  }

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: Product[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
