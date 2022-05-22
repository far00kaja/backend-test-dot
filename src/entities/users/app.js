const checkEmail = require("./check-email");
const updatePassword = require("./update-password");
const updateUser = require("./update-user");

const encrypt = require("../../functions/app");

const enCheckEmail = checkEmail({ encrypt });
const enUpdatePassword = updatePassword({});
const enUpdateUser = updateUser({});

const services = Object.freeze({
  enCheckEmail,
  enUpdatePassword,
  enUpdateUser,
});

module.exports = services;
module.exports = {
  enCheckEmail,
  enUpdatePassword,
  enUpdateUser,
};
