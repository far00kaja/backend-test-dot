const checkEmail = ({ encrypt }) => {
  return function select({ email, password } = {}) {
    if (!email) {
      throw new Error("Please enter email");
    }
    if (!password) {
      throw new Error("Please enter password");
    }
    return Object.freeze({
      getEmail: () => email,
      getPassword: () => password,
      // getPassword: () => encrypt.encryption(password),
    });
  };
};

module.exports = checkEmail;
