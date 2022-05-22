const updatePassword = ({ enUpdatePassword, usersDb, encrypt }) => {
  return async function find(info) {
    let data = await enUpdatePassword(info);
    let msg = "";
    data = {
      email: data.getEmail(),
      password: data.getPassword(),
      newPassword: data.getNewPassword(),
      confirmPassword: data.getConfirmPassword(),
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
        let dataPassword = {
          email: data.email,
          newPassword: encrypt.encryption(data.newPassword),
        };
        const updatePassword = await usersDb.updatePassword(dataPassword);
        delete updatePassword.dataValues.password
        return updatePassword;
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

module.exports = updatePassword;
