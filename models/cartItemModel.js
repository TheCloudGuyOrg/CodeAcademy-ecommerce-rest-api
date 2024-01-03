const db = require('./database.js');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class CartItemModel {
    /**
    * Creates a new cart line item
    * @param  {Object}      data [Cart item data]
    * @return {Object|null}      [Created cart item]
    */
    static async create(data) {
        try{
            const cartId = data.cartId;
            const productId = Number(data.productid)
            const qty = Number(data.qty)

            // Generate SQL Statement using helper for dynamic parameter injection
            const statement = `INSERT INTO cartitems (cartid,productid,qty) VALUES($1, $2, $3)RETURNING *`;
            const values = [cartId, productId, qty];

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
    * Retrieve cart items for a cart
    * @param  {Object} cartId [Cart ID]
    * @return {Array}         [Created cart item]
    */
    static async find(cartId) {
        try{

            // Generate SQL Statement
            const statement = `SELECT ci.qty, ci.id AS "cartIdemId", p.* FROM cartItems ci INNER JOIN products p ON p.id = ci.productId WHERE cartId = $1`;
            const values = [cartId];

            // Execute SQL Statement
            const result = await db.query(statement, values);
 
            if (result.rows?.length) {
                return result.rows;
            }

            return [];

        } catch(error) {
            throw new Error(error)
        }
   };

    /**
    * Deletes a cart line item
    * @param  {Object}      id [Cart item ID]
    * @return {Object|null}    [Deleted cart item]
    */
    static async delete(id) {
        try{
            // Generate SQL Statement
            const statement = `DELETE FROM cartitems WHERE id = $1 RETURNING *;`;
            const values = [id];

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
     * Updates existing cart item
     * @param  {Object}      data [Cart item data]
     * @param  {Object}      id   [Cart item id]
     * @return {Object|null}      [Updated cart item]
     */
    static async update(id, data) {
        try{
            const qty = Number(data.qty)

            // Generate SQL Statement using helper for dynamic parameter injection
            const statement = `UPDATE cartItems SET "qty"= $1 WHERE id = $2 RETURNING *`;
            const values = [qty, id]

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