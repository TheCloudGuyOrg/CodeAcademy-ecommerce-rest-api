import API from './client';

// API interface for logging a user in
export const login = async (credentials) => {
    try {
        const jsonResponse = await API.post('auth/login', credentials);
        return jsonResponse.data;
    } catch (error) {
        throw error.response.data;
    }
};

// API interface for registering a user
export const register = async (data) => {
    try {
        const jsonResponse = await API.post('auth/register', data);
        return jsonResponse.data;
    } catch (error) {
        throw error.response.data;
    }
};

// API inteface for verifying the logged in status ofa user
export const isLoggedIn = async () => {
    try {
        const jsonResponse = await API.get('auth/logged_in');
        return jsonResponse.data
    } catch (error) {
        throw error.response.data;
    }
};