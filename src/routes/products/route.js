const { conFindAll,conFindById } = require("../../controller/products/app");

const route = ({ router, makeExpressCallback }) => {
  router.get("", makeExpressCallback(conFindAll));
  router.get("/:id", makeExpressCallback(conFindById));
  return router;
};

module.exports = route;
