const db = require('../db/index.js');
const pgp = require('pg-promise')({ capSQL: true });
const moment = require('moment');
const OrderItem = require('./orderItemsModel.js');

module.exports = class OrderModel {
    /**
   * Loads orders for a user
   * @param  {number} userId [User ID]
   * @return {Array}         [Order records]
   */
    static async findByUser(userId) {
        try {
            // Generate SQL Statement
            const statement = `SELECT * FROM orders WHERE userId = $1`;
            const values = [userId];

            // Execute SQL Statement
            const result = await db.query(statement, values);

            if (result.rows?.length) {
                return result.rows[0];
            }

            return null;

        } catch(error) {
            throw new Error(error);
        }
    };


    /**
   * Retrieve order by ID
   * @param  {number}      orderId [Order ID]
   * @return {Object|null}         [Order record]
   */
    static async findById(orderId) {
        try {
            // Generate SQL Statement
            const statement = `SELECT * FROM orders WHERE id = $1`;
            const values = [orderId];

            // Execute SQL Statement
            const result = await db.query(statement, values);

            if (result.rows?.length) {
                return result.rows[0];
            }

            return null;

        } catch(error) {
            throw new Error(error);
        }
    };
};