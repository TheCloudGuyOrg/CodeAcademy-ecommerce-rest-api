const express = require('express');
const router = express.Router();
const CartService = require('../controllers/CartService.js');
const CartServiceInstance = new CartService();

module.exports = (app) => {
    app.use('/api/cart', router);

    router.get('/', async (request, response, next) => {
        try {
            const { id } = request.user;
            const jsonResponse = await CartServiceInstance.loadCart(id);
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error)
        }
    });

    router.post('/', async (request, response, next) => {
        try {
            const { id } = request.user;
            const jsonResponse = await CartServiceInstance.create({ userId: id });
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error)
        }
    });

    router.post('/items', async (request, response, next) => {
        try {
            const { id } = request.user;
            const data = request.body;
            const jsonResponse = await CartServiceInstance.addItem(id, data);
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error)
        }
    });

    router.put('/items/:cartItemId', async (request, response, next) => {
        try {
            const { cartItemId } = request.params;
            const data = request.body;

            const jsonResponse = await CartServiceInstance.updateItem(cartItemId, data);
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error)
        }
    });

    router.delete('/items/:cartItemId', async (request, response, next) => {
        try {
            const { cartItemId } = request.params;
            const jsonResponse = await CartServiceInstance.removeItem(cartItemId);
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error)
        }
    });

    router.post('/items/checkout', async (request, response, next) => {
        try {
            const { id } = request.user;
            const jsonResponse = await CartServiceInstance.checkout(id);
            response.status(200).send(jsonResponse)
        } catch(error) {
            next(error)
        }
    });
};