const createError = require('http-errors');
const CartModel = require('../models/cartModel.js');
const OrderModel = require('../models/orderItemsModel.js');
const CartItemModel = require('../models/cartItemModel.js');
const CartModelInstance = new CartModel();

module.exports = class CartService {
    async create(data) {
        const { userId } = data;
        try {
            // Init New Cart and Save
            const cart = await CartModelInstance.create(userId);
            return cart;
        } catch(error) {
            throw error;
        }
    };

    async loadCart(userId) {
        try {
            // Load user cart based on ID
            const cart = await CartModelInstance.findOneByUser(userId);

            // Load cart items and add them to the cart record
            const items = await CartItemModel.find(cart.id)
            cart.items = items;

            return cart

        } catch(error) {
            throw error;
        }
    };

    async addItem(userId, item) {
        try {
            // Load user cart based on ID
            const cart = await CartModelInstance.findOneByUser(userId);
 
            // Create Cart Item
            const cartItem = await CartItemModel.create({ cartId: cart.id, ...item });

            return cartItem;

            //return cartItem
        } catch(error) {
            throw error;
        }
    };

    async removeItem(cartItemId) {
        try {
            // Remove cart item by line ID
            const cartItem = await CartItemModel.delete(cartItemId);
            return cartItem;
        } catch(error) {
            throw error;
        }
    };

    async updateItem(cartItemId, data) {
        try {
            const cartItem = await CartItemModel.update(cartItemId, data);
            return cartItem;
        } catch(error) {
            throw error;
        }
    };

    async checkout() {
        try {

        } catch(error) {
            throw error;
        }
    };
};