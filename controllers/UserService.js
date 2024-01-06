const createError = require('http-errors');
const UserModel = require('../models/userModel.js');
const UserModelInstance = new UserModel();

module.exports = class UserService {
    async list(options) {
        try {
            // Load Users
            const users = await UserModelInstance.find(options);
            return users;
        } catch (error) {
            throw error;
        }
    }
     
    async get(data) {
        
        const { id } = data;

        try {
            // Check if user already exists
            const user = await UserModelInstance.findOneById(id);

            // If user doesn't exist, reject
            if(!user) {
                throw createError(404, 'user record not found');
            }

            return user;

        } catch(error) {
            throw error;
        }
    };

    async update(data) {

        try {
            // Check if user already exists
            const user = await UserModelInstance.update(data);
            return user;
        } catch(error) {
            throw error;
        }
    };
}