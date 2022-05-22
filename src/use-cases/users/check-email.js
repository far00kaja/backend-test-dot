const checkEmail = ({ enCheckEmail, usersDb, encrypt }) => {
  return async function find(info) {
    let data = await enCheckEmail(info);
    let msg = "";
    data = {
      email: data.getEmail(),
      password: data.getPassword(),
    };
    const res = await usersDb.findByEmail({ data });
    // console.log(res);

    if (res) {
      console.log("res.dataValues.password", res.dataValues.password);
      console.log("data.password", data.password);
      console.log(encrypt.compare(data.password, res.dataValues.password));
      if (encrypt.compare(data.password, res.dataValues.password)) {
        delete res.dataValues.password;
        return res;
      } else {
        msg = "email or password tidak cocok";
        throw new Error(msg);
      }
    }

    msg = "email tidak ditemukan";

    if (res) {
      msg = res;
      return msg;
    } else {
      throw new Error(msg);
    }
  };
};

module.exports = checkEmail;
