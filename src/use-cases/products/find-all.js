const findAll = ({ enFilterProduct, productsDb, client }) => {
  return async function findAll(info) {
    let msg = "";
    let data = await enFilterProduct(info);
    console.log("datawkwk : ", data);

    const productExists = await client.get("findProducts");
    console.log("productExists : ", productExists);
    if (productExists) {
      return JSON.parse(productExists);
    } else {
      const res = await productsDb.findAll(info);
      console.log("isi res nya : ", res);

      if (res) {
        console.log(res);
        // await client.hSet("findProducts", res);
        await client.set("findProducts", JSON.stringify(res));
        return res;
      } else {
        msg = "Pencarian Product gagal";
        throw new Error(msg);
      }
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
