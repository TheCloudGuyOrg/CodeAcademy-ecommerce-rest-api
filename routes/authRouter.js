const express = require('express');
const router = express.Router();
const AuthService = require('../controllers/AuthService');
const AuthServiceInstance = new AuthService();
const CartService = require('../controllers/CartService');
const CartServiceInstance = new AuthService();
const UserService = require('../controllers/UserService');
const UserServiceInstance = new AuthService();

module.exports = (app, passport) => {
    app.use('/api/auth', router);

    // Registration Endpoint
    router.post('/register', async (request, response, next) => {
        try {
            const data = request.body;
            const jsonResponse = await AuthServiceInstance.register(data);
            response.status(200).send(jsonResponse)
        } catch(error) {
            next(error);
        }
    });

    // Login Endpoint
    router.post('/login', passport.authenticate('local'), async (request, response, next) => {
        try{
            const { username, password } = request.body;
            const jsonResponse = await AuthServiceInstance.login({ email: username, password });
            response.status(200).send(jsonResponse);
        } catch(error) {
            next(error);
        }
    });

    // Check Login Status
    router.get('/logged_in', async (request, response, next) => {
        try {
            const { id } = request.user;
            const cart = await CartServiceInstance.loadCart(id);
            const user = await UserServiceInstance.get({ id });

            response.status(200).send({
                cart, 
                loggedIn: true,
                user
            });
        } catch(error) {
            next(error);
        }
    });
};

