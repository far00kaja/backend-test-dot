const {
  ucCheckEmail,
  ucUpdatePassword,
  ucUpdateUser,
} = require("../../use-cases/users/app");

const checkEmail = require("./check-email");
const updatePassword = require("./update-password");
const updateUser = require("./update-user");

const conCheckEmail = checkEmail({ ucCheckEmail });
const conUpdatePassword = updatePassword({ ucUpdatePassword });
const conUpdateUser = updateUser({ ucUpdateUser });

const services = Object.freeze({
  conCheckEmail,
  conUpdatePassword,
  conUpdateUser,
});

module.exports = services;
module.exports = {
  conCheckEmail,
  conUpdatePassword,
  conUpdateUser,
};
