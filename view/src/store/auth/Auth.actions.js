import { createAsyncThunk } from '@reduxjs/toolkit';
import { isLoggedIn, login, register } from '../../apis/auth';

export const checkLoginStatus = createAsyncThunk(
    'auth/checkLogin',
    async () => {
        try {
            const jsonResponse = await isLoggedIn();
            return {
                cart: jsonResponse.cart,
                isAuthenticated: true,
                user: jsonResponse.user
            }
        } catch(error) {
            throw error;
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials) => {
        try {
            const jsonResponse = await login(credentials);
            return {
                user: jsonResponse,
                isAuthenticated: true
            }
        } catch(error) {
            throw error;
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials) => {
        try {
            await register(credentials);
            return {};
        } catch(error) {
            throw error;
        }
    }
);