const {
  enFilterClaim,
  enCreateClaim,
  enDeleteClaim,
} = require("../../entities/claim-products/app");

const productsDb = require("../../data-access/products/app");
const claimProductsDb = require("../../data-access/claim-products/app");
const usersDb = require("../../data-access/users/app");

const findAll = require("./find-all");
const findById = require("./find-by-id");
const createClaim = require("./create-claim");
const deleteClaim = require("./delete-claim");

const ucFindAll = findAll({ enFilterClaim, claimProductsDb, usersDb });
const ucFindById = findById({ enFilterClaim, claimProductsDb, productsDb });
const ucClaimProduct = createClaim({
  enCreateClaim,
  claimProductsDb,
  productsDb,
  usersDb,
});
const ucDeleteClaim = deleteClaim({
  enDeleteClaim,
  claimProductsDb,
  usersDb,
  productsDb,
});

module.exports = Object.freeze({
  ucFindAll,
  ucFindById,
  ucClaimProduct,
  ucDeleteClaim,
});
module.exports = {
  ucFindAll,
  ucFindById,
  ucClaimProduct,
  ucDeleteClaim,
};
