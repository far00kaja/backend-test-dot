const filterClaim = require("./filter-claim");
const createClaim = require("./create-claim");
const deleteClaim = require("./delete-claim");

const enFilterClaim = filterClaim({});
const enCreateClaim = createClaim({});
const enDeleteClaim = deleteClaim({});

module.exports = Object.freeze({
  enFilterClaim,
  enCreateClaim,
  enDeleteClaim,
});

module.exports = {
  enFilterClaim,
  enCreateClaim,
  enDeleteClaim,
};
