const createClaim = ({}) => {
  return function select({ authorization, productId } = {}) {
    let key = "";
    // if (!id) {
    // throw new Error("Please enter email");
    if (!productId) {
      throw new Error("Please enter query productId");
    }

    if (!authorization) {
      throw new Error("Tidak ada authorization pada request header");
    }
    return Object.freeze({
      getAuthorization: () => authorization,
      getProductId: () => productId,
    });
  };
};

module.exports = createClaim;
