const db = require('../db/index.js');
const pgp = require('pg-promise')({ capSQL: true });
const moment = require('moment');

module.exports = class OrderItemModel {

    constructor(data = {}) {
        this.created = data.created || moment.utc().toISOString();
        this.description = data.description;
        this.modified = moment.utc().toISOString();
        this.name = data.name;
        this.price = data.price || 0;
        this.productId = data.id;
        this.qty = data.qty || 1;
        this.orderId = data.orderId || null;
    };
};