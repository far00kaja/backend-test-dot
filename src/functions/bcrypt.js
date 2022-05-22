const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUND);

const encryption = function (enPlaintext) {
  return bcrypt.hashSync(enPlaintext, bcrypt.genSaltSync(saltRounds));
};

const compare = function (enPlainText, dbEncrypt) {
  return bcrypt.compareSync(enPlainText, dbEncrypt);
};
module.exports = Object.freeze({
  encryption,
  compare,
});
