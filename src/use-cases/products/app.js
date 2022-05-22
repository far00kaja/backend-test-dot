const {enFilterProduct} = require("../../entities/products/app");
const productsDb = require("../../data-access/products/app");
const client = require('../../data-access/redis/redis-client');

const findAll = require("./find-all");
const findById = require("./find-by-id");

const ucFindAll = findAll({ enFilterProduct,productsDb,client });
const ucFindById = findById({ enFilterProduct, productsDb });

module.exports = Object.freeze({
  ucFindAll,
  ucFindById,
});
module.exports = {
  ucFindAll,
  ucFindById,
};
