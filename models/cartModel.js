const db = require('./database.js');
const moment = require('moment');

module.exports = class CartModel {

    constructor(data = {}) {
        this.created = data.created || moment.utc().toISOString();
        this.modified = moment.utc().toISOString();
        this.converted = data.converted || null;
        this.isActive = data.isActive || true;
    };

    /**
   * Creates a new cart for a user
   * @param  {Object}      data [User data]
   * @return {Object|null}      [Created user record]
   */
    async create(userId) {
        try{

            const data = { userId, ...this }

            // Generate SQL Statement
            const statement = `INSERT INTO carts (userId,"created","modified") VALUES($1, $2, $3)RETURNING *`;
            const values = [userId, this.created, this.modified];

            // Execute SQL Statement
            const result = await db.query(statement, values);


            if (result.rows?.length) {
                return result.rows[0];
            }

            return null;

        } catch(error) {
            throw new Error(error)
        }
    };

    /**
   * Loads a cart by User ID
   * @param  {number}      id [User ID]
   * @return {Object|null}    [Cart record]
   */
    async findOneByUser(userId) {
        try{
            // Generate SQL Statement
            const statement = `SELECT * FROM carts WHERE userId = $1`;
            const values = [userId];
    
            // Execute SQL Statement
            const result = await db.query(statement, values);

    
    
            if (result.rows?.length) {
                return result.rows[0];
            }
    
            return null;
    
        } catch(error) {
            throw new Error(error)
        }
    };
};