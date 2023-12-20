const createError = require('http-errors');
const ProductModel = require('../models/productModel.js');
const ProductModelInstance = new ProductModel();

module.exports = class ProductService {
    async list(options) {
        try {
            // Load Products
            const products = await ProductModelInstance.find(options);
            return products;
        } catch (error) {
            throw error;
        }
    };

    async get(id) {
        try {
            //Check if product exists
            const product = await ProductModelInstance.findOne(id);

            //If no product found, reject
            if(!product) {
                throw createError(404, 'Product not found');
            }

            return product;

        } catch (error) {
            throw error;
        }
    };
};