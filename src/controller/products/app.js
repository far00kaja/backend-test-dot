const { ucFindAll, ucFindById } = require("../../use-cases/products/app");
const findAll = require("./find-all");
const findById = require("./find-by-id");

const conFindAll = findAll({ ucFindAll });
const conFindById = findById({ ucFindById });

const services = Object.freeze({
  conFindAll,
  conFindById,
});
module.exports = services;
module.exports = {
  conFindAll,
  conFindById,
};
