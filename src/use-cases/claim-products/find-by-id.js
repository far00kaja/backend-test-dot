const findById = ({ enFilterClaim, claimProductsDb, productsDb }) => {
  return async function findById(info) {
    console.log("info :", info);
    let data = await enFilterClaim(info);
    const { id, authorization } = info;
    let msg = "";
    console.log("info :", id);
    console.log("info :", authorization);
    // const checkProduct = await productsDb.findById(productId);
    // console.log("checkProduct : ", checkProduct);
    const res = await claimProductsDb.findById(id, authorization);

    if (res) {
      return res;
    } else {
      msg = "Pencarian Claim Product gagal";
      throw new Error(msg);
    }
  };
};

module.exports = findById;
