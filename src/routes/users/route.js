const {
  conCheckEmail,
  conUpdatePassword,
  conUpdateUser,
} = require("../../controller/users/app");

const route = ({ router, makeExpressCallback }) => {
  router.post("/login", makeExpressCallback(conCheckEmail));
  router.patch("/change-password", makeExpressCallback(conUpdatePassword));
  router.put("/update-profile", makeExpressCallback(conUpdateUser));
  return router;
};

module.exports = route;
