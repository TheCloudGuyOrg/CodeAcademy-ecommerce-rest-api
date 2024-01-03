const express = require('express');
const router = express.Router();
const UserService = require('../controllers/UserService.js');
const UserServiceInstance = new UserService();

module.exports = (app) => {

    app.use('/users', router);

    router.get('/', async (request, response, next) => {
        try {
            const queryParams = request.query;
            const jsonResponse = await UserServiceInstance.list(queryParams);
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error);
        }
    });

    router.get('/:userId', async (request, response, next) => {

        try {
            const { userId } = request.params;
            const jsonResponse = await UserServiceInstance.get({ id: userId });
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error);
        }
    });

    router.put('/:userId', async (request, response, next) => {
     
        try {
            const { userId } = request.params;
            const data = request.body;
            const jsonResponse = await UserServiceInstance.update({ id: userId, ...data });
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error);
        }
    });
};
