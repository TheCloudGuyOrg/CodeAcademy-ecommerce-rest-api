const express = require('express');
const router = express.Router();
const OrderService = require('../controllers/OrderService.js');
const OrderServiceInstance = new OrderService();

module.exports = (app) => {
    app.use('/api/orders', router);

    router.get('/', async (request, response, next) => {
        try {
            const { id } = request.user;
            const jsonResponse = await OrderServiceInstance.list(id);
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error)
        }
    });

    router.get('/:orderId', async (request, response, next) => {
        try {
            const { orderId } = request.params;
            const jsonResponse = await OrderServiceInstance.findById(orderId);
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error)
        }
    });
}