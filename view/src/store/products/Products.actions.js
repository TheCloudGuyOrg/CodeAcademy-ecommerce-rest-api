import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProduct, fetchProducts } from '../../apis/product';

export const loadProduct = createAsyncThunk(
    'products/loadProduct',
    async (productId) => {
        try {
            const jsonResponse = await fetchProduct(productId);
            return {
                product: jsonResponse
            };
        } catch (error) {
            throw error;
        };
    }
);

export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async () => {
        try {
            const jsonResponse = await fetchProducts();
            return {
                products: jsonResponse
            };
        } catch (error) {
            throw error;
        };
    }
);