const {
  conFindAll,
  conFindById,
  conCreateClaim,
  conDeleteClaim,
} = require("../../controller/claim-products/app");

const route = ({ router, makeExpressCallback }) => {
  router.get("/:id", makeExpressCallback(conFindById));
  router.post("", makeExpressCallback(conCreateClaim));
  router.get("", makeExpressCallback(conFindAll));
  router.delete("/:id", makeExpressCallback(conDeleteClaim));
  return router;
};

module.exports = route;
