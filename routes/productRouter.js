const express = require('express');
const router = express.Router();
const ProductService = require('../controllers/ProductService.js');
const ProductModelInstance = new ProductService();

module.exports = (app) => {
    app.use('/products', router);

    router.get('/', async (request, response, next) => {
        try {
            const queryParams = request.query;
            const jsonResponse = await ProductModelInstance.list(queryParams);
            response.status(200).send(jsonResponse);

        } catch(error) {
            next(error);
        }
    });

    router.get('/:productId', async (request, response, next) => {
        try {
            const { productId } = request.params;
            const jsonResponse = await ProductModelInstance.get(productId);
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error);
        }
    });
};