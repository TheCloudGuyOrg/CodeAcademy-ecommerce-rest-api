const createError = require('http-errors');
const OrderModel = require('../models/orderModel.js');

module.exports = class OrderService {
    async list(userId) {
        try {
            // Load user orders based on ID
            const orders = await OrderModel.findByUser(userId);
            return orders;
        } catch(error) {
            throw error;
        }
    };

    async findById(orderId) {
        try {
            // Load user orders based on ID
            const order = await OrderModel.findById(orderId);
            return order;
        } catch(error) {
            throw error;
        }
    };
};

