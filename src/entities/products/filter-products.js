const filterProduct = ({}) => {
  return function select({ id, page, limit, sorting, keyword } = {}) {
    let key = "";
    if (!id) {
      // throw new Error("Please enter email");
      if (!page) {
        throw new Error("Please enter query page");
      }
      if (!limit) {
        throw new Error("Please enter query limit");
      }
      if (!sorting) {
        throw new Error("Please enter query sorting");
      }
    }

    if (!keyword) {
      key = "";
      keyword = "";
    } else {
      key = keyword;
    }
    return Object.freeze({
      getId: () => id,
      getKeyword: () => keyword,
      getPage: () => page,
      getLimit: () => limit,
      getSorting: () => sorting,
    });
  };
};

module.exports = filterProduct;
