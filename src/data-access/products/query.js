const query = ({ connects, models }) => {
  return Object.freeze({
    findAll,
    findById,
    minStock,
  });

  async function findAll(data) {
    try {
      const { page, limit, sorting, keyword } = data;

      const Product = models.Product;
      if (sorting.toUpperCase() === "DESC" || sorting.toUpperCase() === "ASC") {
        console.log(`sorting by ${sorting.toUpperCase()}`);
        sorting.toUpperCase();
      } else {
        throw new Error("Failed");
      }

      const res = await Product.findAndCountAll({
        order: [["updatedAt", `${sorting.toUpperCase()}`]],
        limit: limit,
        offset: page,
      });
      console.log("res : ", res);
      return res;
    } catch (error) {
      console.log(`Product Error in query findAll :`, error);
    }
  }

  async function findById(id) {
    try {
      console.log("modelssss : ", id);
      const Product = models.Product;

      const res = await Product.findOne({
        where: {
          id: id,
        },
      });
      console.log("res : ", res);
      return res;
    } catch (error) {
      console.log(`Product Error in query findByEmail :`, error);
    }
  }
  async function minStock(id) {
    try {
      const Product = models.Product;
      const product = await Product.findOne({
        where: {
          id: id,
        },
      });
      product.set({
        productStock: productStock - 1,
      });
      let result = await product.save();
      return result;
    } catch (error) {
      console.log(`Product Error in query minStock :`, error);
    }
  }
};

module.exports = query;
