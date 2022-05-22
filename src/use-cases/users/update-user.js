const updateUser = ({ enUpdateUser, usersDb, encrypt }) => {
  return async function find(info) {
    let data = await enUpdateUser(info);
    let msg = "";
    data = {
      email: data.getEmail(),
      password: data.getPassword(),
      firstName: data.getFirstName(),
      lastName: data.getLastName(),
    };

    const checkEmail = await usersDb.findByEmail({ data });
    if (!checkEmail) {
      msg = "email or password tidak cocok";
      throw new Error(msg);
    } else {
      console.log(
        encrypt.compare(data.password, checkEmail.dataValues.password)
      );
      if (encrypt.compare(data.password, checkEmail.dataValues.password)) {
        const updateUser = await usersDb.updateUser(data);
        delete updateUser.dataValues.password;
        return updateUser;
      } else {
        msg = "email or password tidak cocok";
        throw new Error(msg);
      }
    }
    // console.log(res);

    // if (res) {
    //   console.log("res.dataValues.password", res.dataValues.password);
    //   console.log("data.password", data.password);
    //   console.log(encrypt.compare(data.password, res.dataValues.password));
    //   if (encrypt.compare(data.password, res.dataValues.password)) {
    //     delete res.dataValues.password;
    //     return res;
    //   } else {
    //     msg = "email or password tidak cocok";
    //     throw new Error(msg);
    //   }
    // }

    // msg = "email tidak ditemukan";

    // if (res) {
    //   msg = res;
    //   return msg;
    // } else {
    //   throw new Error(msg);
    // }
  };
};

module.exports = updateUser;
