const {
  enCheckEmail,
  enUpdatePassword,
  enUpdateUser,
} = require("../../entities/users/app");

const usersDb = require("../../data-access/users/app");
const { encrypt } = require("../../functions/app");
const checkEmail = require("./check-email");
const updateUser = require("./update-user");
const updatePassword = require("./update-password");

const ucCheckEmail = checkEmail({ enCheckEmail, usersDb, encrypt });
const ucUpdateUser = updateUser({ enUpdateUser, usersDb, encrypt });
const ucUpdatePassword = updatePassword({ enUpdatePassword, usersDb, encrypt });

const services = Object.freeze({
  ucCheckEmail,
  ucUpdateUser,
  ucUpdatePassword,
});

module.exports = services;
module.exports = {
  ucCheckEmail,
  ucUpdateUser,
  ucUpdatePassword,
};
