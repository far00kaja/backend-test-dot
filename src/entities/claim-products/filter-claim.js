const filterClaim = ({}) => {
  return function select({
    id,
    page,
    limit,
    sorting,
    keyword,
    authorization,
  } = {}) {
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

    if (!authorization) {
      throw new Error("Tidak ada authorization pada request header");
    }
    return Object.freeze({
      getId: () => id,
      getKeyword: () => keyword,
      getPage: () => page,
      getLimit: () => limit,
      getSorting: () => sorting,
      getAuthorization: () => authorization,
    });
  };
};

module.exports = filterClaim;
