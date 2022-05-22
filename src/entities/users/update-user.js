const updateUser = ({}) => {
  return function select({ email, password, firstName, lastName } = {}) {
    if (!email) {
      throw new Error("Please enter email");
    }
    if (!password) {
      throw new Error("Please enter password");
    }
    if (!firstName) {
      throw new Error("Please enter firstName");
    }
    if (!lastName) {
      throw new Error("Please enter lastName");
    }
    return Object.freeze({
      getEmail: () => email,
      getPassword: () => password,
      getFirstName: () => firstName,
      getLastName: () => lastName,
    });
  };
};

module.exports = updateUser;
