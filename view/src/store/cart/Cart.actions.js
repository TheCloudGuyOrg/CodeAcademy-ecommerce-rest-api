import { createAsyncThunk } from '@reduxjs/toolkit';
import { addToCart, checkout, fetchCart, removeFromCart } from '../../apis/cart';

export const addItem = createAsyncThunk(
    'cart/addItem',
    async ({product, qty}) => {
        try {
            const jsonResponse = await addToCart(product.id, qty);
            const item = {
                ...product,
                cartItemId: jsonResponse.id,
                qty
            };
            return { item };
        } catch (error) {
            throw error;
        }
    }
);

export const checkoutCart = createAsyncThunk(
    'cart/checkoutCart',
    async ({cartId}) => {
        try {
            const jsonResponse = await checkout(cartId);
            return {
                order: jsonResponse
            }
        } catch (error) {
            throw error;
        }
    }
);

export const loadCart = createAsyncThunk(
    'cart/loadCart',
    async () => {
        try {
            const jsonResponse = await fetchCart();
            return {
                cart: jsonResponse
            }
        } catch (error) {
            throw error;
        }
    }
);

export const removeItem = createAsyncThunk(
    'cart/removeItem',
    async ({cartItemId}) => {
        try {
            await removeFromCart(cartItemId);
            return { 
                item: cartItemId
            }
        } catch (error) {
            throw error;
        }
    }
);