const deleteClaim = ({
  enDeleteClaim,
  claimProductsDb,
  usersDb,
  productsDb,
}) => {
  return async function deleteClaims(info) {
    let msg = "";
    let data = await enDeleteClaim(info);
    console.log("datawkwk : ", info.authorization);
    console.log(usersDb);

    data = {
      email: data.getAuthorization(),
    };
    const checkAuthorization = await usersDb.findByEmail({ data });
    // console.log("checkAuthorization :", checkAuthorization);
    // console.log(claimProductsDb);
    if (checkAuthorization) {
      const minProductStock = productsDb.minStock(info);
      const res = await claimProductsDb.deleteClaim(info);
      console.log("isi res nya : ", res);
      if (res) {
        return res;
      } else {
        msg = "Penghapusan claim gagal";
        throw new Error(msg);
      }
    } else {
      throw new Error("Authorization tidak valid");
    }
  };
};

module.exports = deleteClaim;
