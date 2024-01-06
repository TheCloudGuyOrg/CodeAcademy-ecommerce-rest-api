import API from './client';

// API interface for loading a user's orders
export const fetchOrders = async () => {
    try {
        const jsonResponse = await API.get(`oders`);
        return jsonResponse.data;
    } catch (error) {
        throw error.response.data
    };
};

// API interface for loading a user's orders
export const fetchOrder = async (orderId) => {
    try {
        const jsonResponse = await API.get(`oders/${orderId}`);
        return jsonResponse.data;

    } catch (error) {
        throw error.response.data
    };
};