const updatePassword = ({}) => {
  return function select({
    email,
    password,
    newPassword,
    confirmPassword,
  } = {}) {
    if (!email) {
      throw new Error("Please enter email");
    }
    if (!password) {
      throw new Error("Please enter password");
    }
    if (!newPassword) {
      throw new Error("Please enter newPassword");
    }
    if (!confirmPassword) {
      throw new Error("Please enter confirmPassword");
    }
    if (newPassword !== confirmPassword) {
      throw new Error("newPassword and confirmPassword tidak cocok");
    }
    return Object.freeze({
      getEmail: () => email,
      getPassword: () => password,
      getConfirmPassword: () => confirmPassword,
      getNewPassword: () => newPassword,
    });
  };
};

module.exports = updatePassword;
