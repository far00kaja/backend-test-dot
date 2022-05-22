const createClaim = ({
  enCreateClaim,
  claimProductsDb,
  productsDb,
  usersDb,
}) => {
  return async function create(info) {
    console.log("info :", info);
    let data = await enCreateClaim(info);
    const { productId, authorization } = info;

    let msg = "";
    data = {
      email: data.getAuthorization(),
    };
    // console.log()

    console.log("info :", productId);
    console.log("info :", authorization);
    //check product ada atAU tidak
    const checkProduct = await productsDb.findById(productId);
    const checkAuthorization = await usersDb.findByEmail({ data });
    console.log("checkAuthorization :", checkAuthorization);
    if (checkProduct && checkAuthorization) {
      // check apa point mencukupi
      if (
        checkAuthorization.dataValues.point >=
        checkProduct.dataValues.productPoint
      ) {
        let dataClaim = {
          point: checkProduct.dataValues.productPoint,
          email: data.email,
        };
        console.log(dataClaim);
        // console.log(data);
        const user = await usersDb.claimProcess(dataClaim);
        // const user = await usersDb.findByEmail({ email:'admin@admin@gmail.com' });
        console.log("user");
        console.log(user);
        // return user;
        const res = await claimProductsDb.insertOne(
          checkProduct.dataValues.id,
          checkAuthorization.dataValues.id
        );
        console.log("berhasil : ", res);
        return res;
      } else {
        msg = `point anda tidak mencukupi untuk melakukan claim`;
        throw new Error(msg);
      }
    } else {
      msg = `Product yang dicari tidak dapat ditemukan!`;
      throw new Error(msg);
    }
  };
};

module.exports = createClaim;
