const {
  ucFindById,
  ucClaimProduct,
  ucFindAll,
  ucDeleteClaim,
} = require("../../use-cases/claim-products/app");
const findAll = require("./find-all");
const findById = require("./find-by-id");
const createClaim = require("./create-claim");
const deleteClaim = require("./delete-claim");

const conFindAll = findAll({ ucFindAll });
const conFindById = findById({ ucFindById });
const conCreateClaim = createClaim({ ucClaimProduct });
const conDeleteClaim = deleteClaim({ ucDeleteClaim });

const services = Object.freeze({
  conFindAll,
  conFindById,
  conCreateClaim,
  conDeleteClaim,
});
module.exports = services;
module.exports = {
  conFindAll,
  conFindById,
  conCreateClaim,
  conDeleteClaim,
};
