const { connects } = require("../app");
const models = require("../sequelize/models");

const query = require("./query");

const claimProductsDb = query({ connects, models });

module.exports = claimProductsDb;
