const findAll = ({ enFilterClaim, claimProductsDb, usersDb }) => {
  return async function findAll(info) {
    let msg = "";
    let data = await enFilterClaim(info);
    console.log("datawkwk : ", info.authorization);
    console.log(usersDb);
    // data = {
    //     email: info.getEmail(),
    // }
    data = {
      email: data.getAuthorization(),
    };
    const checkAuthorization = await usersDb.findByEmail({ data });
    console.log("checkAuthorization :", checkAuthorization);
    console.log(claimProductsDb)
    if (checkAuthorization) {
      const res = await claimProductsDb.findAll(info);
      console.log("isi res nya : ", res);
      if (res) {
        return res;
      } else {
        msg = "Pencarian Product gagal";
        throw new Error(msg);
      }
    } else {
      throw new Error("Authorization tidak valid");
    }

    //   msg = "Product tidak ada";
    //   if (res) {
    //     msg = res;
    //     return msg;
    //   } else {
    //     throw new Error(msg);
    //   }
  };
};

module.exports = findAll;
