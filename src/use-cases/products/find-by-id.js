const findById = ({ enFilterProduct, productsDb }) => {
  return async function findById(info) {
      let data = await enFilterProduct(info);
      const { id } = info;

    let msg = "";
    console.log("info :", id);
    const res = await productsDb.findById(id);

    if (res) {
      return res;
    } else {
      msg = "Pencarian Product gagal";
      throw new Error(msg);
    }

    msg = "Product tidak ada";
    if (res) {
      msg = res;
      return msg;
    } else {
      throw new Error(msg);
    }
  };
};

module.exports = findById;
