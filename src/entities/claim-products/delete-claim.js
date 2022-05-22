const deleteClaim = ({}) => {
  return function select({ authorization, id } = {}) {
    let key = "";
    // if (!id) {
    // throw new Error("Please enter email");
    if (!id) {
      throw new Error("Please enter params id after claim/:id");
    }

    if (!authorization) {
      throw new Error("Tidak ada authorization pada request header");
    }
    return Object.freeze({
      getAuthorization: () => authorization,
      getId: () => id,
    });
  };
};

module.exports = deleteClaim;
