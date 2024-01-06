import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOrder, fetchOrders } from '../../apis/order';

export const loadOrder = createAsyncThunk(
    'orders/loadOrder',
    async (orderId) => {
        try {
            const jsonResponse = await fetchOrder(orderId)
            return {
                order: jsonResponse
            };
        } catch (error) {
            throw error;
        }
    }
);

export const loadOrders = createAsyncThunk(
    'orders/loadOrders',
    async () => {
        try {
            const jsonResponse = await fetchOrders()
            return {
                order: jsonResponse
            };
        } catch (error) {
            throw error;
        }
    }
);