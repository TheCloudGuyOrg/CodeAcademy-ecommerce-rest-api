import API from './client';

// API interface for loading the user's cart
export const fetchCart = async () => {
    try {
        const jsonResponse = await API.get(`cart`);
        return jsonResponse.data;
    } catch (error) {
        throw error.response.data
    };
};

// API interface for ading a product to a user's cart
export const addToCart = async (productId, qty) => {
    try {
        const jsonResponse = await API.post(`cart/items`, { productId, qty });
        return jsonResponse.data;
    } catch (error) {
        throw error.response.data
    };
};

// API interface for removing a product from a user's cart
export const removeFromCart = async (cartItemId) => {
    try {
        const jsonResponse = await API.delete(`cart/items/${cartItemId}`);
        return jsonResponse;
    } catch (error) {
        throw error.response.data
    };
};

// API interface for checking out a user's cart
export const checkout = async (cartId) => {
    try {
        const jsonResponse = await API.post(`cart/items/checkout`, { cartId });
        return jsonResponse.data;
    } catch (error) {
        throw error.response.data
    };
};