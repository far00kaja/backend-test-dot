const query = ({ connects, models }) => {
  return Object.freeze({
    findAll,
    findById,
    findByProductId,
    insertOne,
    deleteClaim,
  });

  async function findAll(data) {
    try {
      console.log("data : ", data);
      const { page, limit, sorting, keyword, authorization } = data;

      const UserClaim = models.UserClaim;
      if (sorting.toUpperCase() === "DESC" || sorting.toUpperCase() === "ASC") {
        console.log(`sorting by ${sorting.toUpperCase()}`);
        sorting.toUpperCase();
      } else {
        throw new Error("Failed");
      }

      const res = await UserClaim.findAndCountAll({
        order: [["updatedAt", `${sorting.toUpperCase()}`]],
        limit: limit,
        offset: page,
      });
      console.log("res : ", res);
      return res;
    } catch (error) {
      console.log(`UserClaim Error in query findAll :`, error);
    }
  }

  async function findById(id, authorization) {
    try {
      const UserClaim = models.UserClaim;
      const User = models.User;
      const getEmail = await User.findOne({
        where: {
          email: authorization,
        },
      });
      const res = await UserClaim.findOne({
        where: {
          id: id,
          userId: getEmail.dataValues.id,
        },
      });
      return res;
    } catch (error) {
      console.log(`UserClaim Error in query findById :`, error);
    }
  }

  async function insertOne(productId, userId) {
    try {
      const Claim = models.UserClaim;
      const res = await Claim.create({
        userId: userId,
        productId: productId,
        status: "dikeranjang",
      });
      return res;
    } catch (error) {
      console.log("ERRROR : ", error);
    }
  }

  async function findByProductId(productId) {
    try {
      const UserClaim = models.UserClaim;
      const res = await UserClaim.findOne({
        where: {
          productId: productId,
        },
      });
      return res;
    } catch (error) {
      console.log(`UserClaim Error in query findByProductId :`, error);
    }
  }

  async function deleteClaim(data) {
    try {
      console.log("delete Claim : ", data.id);
      console.log("delete Claim : ", data);
      const UserClaim = models.UserClaim;
      // const Product = models.Product;
      const userClaim = await UserClaim.findOne({
        where: {
          id: data.id,
        },
      });

      let res = await userClaim.destroy();
      console.log("UserClaim deleted and saved : ", res);
      return res;
    } catch (error) {
      console.log("ERROR : ", error);
    }
  }
};

module.exports = query;
