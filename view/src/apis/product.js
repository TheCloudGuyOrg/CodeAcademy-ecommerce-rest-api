import API from './client';

// API interface for laoding products
export const fetchProducts = async () => {
    try {
        const jsonResponse = await API.get(`products`);
        return jsonResponse.data;
    } catch (error) {
        throw error.response.data;
    }
}

// API interface for loading a product by ID
export const fetchProduct = async (productId) => {
    try {
        const jsonResponse = await API.get(`products/${productId}`);
        return jsonResponse.data;
    } catch (error) {
        throw error.response.data
    };
};