const db = require('../db/index.js');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class UserModel {
    /**
   * Creates a new user record
   * @param  {Object}      data [User data]
   * @return {Object|null}      [Created user record]
   */
    async create(data) {
        try {
            // Generate SQL Statement - using helper for dynamic parameter injection
            const statement = pgp.helpers.insert(data, null, 'users') + 'RETURNING *';

            // Execute SQL Statement
            const result = await db.query(statement);

            if(result.rows?.length) {
                return result.rows[0];
            }

            return null;

        } catch(error) {
            throw new Error(error);
        }
    }

    /**
   * Updates a user record
   * @param  {Object}      data [User data]
   * @return {Object|null}      [Updated user record]
   */
    async update(data) {
        try {

            const { id, ...params } = data;

            // Generate SQL Statement - using helper for dynamic parameter injection
            const condition = pgp.as.format('WHERE id = ${id} RETURNING *', { id });
            const statement = pgp.helpers.update(params, null, 'users') + condition;

            // Execute SQL Statement
            const result = await db.query(statement);

            if(result.rows?.length) {
                return result.rows[0];
            }

            return null;

        } catch(error) {
            throw new Error(error);
        }
    }

    /**
   * Finds a user record by email
   * @param  {String}      email [Email address]
   * @return {Object|null}       [User record]
   */
  async findOneByEmail(email) {
    try {

        // Generate SQL Statement - Find by Email
        const statement = `SELECT * FROM users WHERE email = $1`;
        const values = [email];

        // Execute SQL Statement
        const result = await db.query(statement, values);

        if(result.rows?.length) {
            return result.rows[0];
        }

        return null;

    } catch(error) {
        throw new Error(error);
    }
  }

   /**
   * Finds a user record by ID
   * @param  {String}      id [User ID]
   * @return {Object|null}    [User Record]
   */   
  async findOneById(id) {
    try {

        // Generate SQL Statement - Find by ID
        const statement = `SELECT * FROM users WHERE id = $1`;
        const values = [id];

        //Execute Statement
        const result = await db.query(statement, values);

        if(result.rows?.length) {
            return result.rows[0];
        }

        return null;


    } catch(error) {
        throw new Error(error);
    }
  }
}