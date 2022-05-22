const query = ({ connects, models }) => {
  return Object.freeze({
    findByEmail,
    claimProcess,
    updatePassword,
    updateUser,
  });

  async function findByEmail({ data }) {
    try {
      console.log("datanya ", data);
      const { email } = data;
      const User = models.User;
      console.log("emailnya ", email);

      const res = await User.findOne({
        where: {
          email: email,
        },
        include: [
          {
            model: models.UserClaim,
          },
        ],
        // attributes: {
        //   exclude: ["password"],
        // },
      });
      // console.log("res : ", res);
      return res;
    } catch (error) {
      console.log(`User Error in query findByEmail :`, error);
    }
  }

  async function claimProcess(dataClaim) {
    try {
      const { email, point } = dataClaim;
      console.log("datanya ", dataClaim);
      const User = models.User;
      console.log("emailnya ", email);
      // return true;

      const user = await User.findOne({
        where: {
          email: email,
        },
        include: [
          {
            model: models.UserClaim,
          },
        ],
      });
      if (user.point <= point) {
        return "point tidak mencukupi";
      }
      user.set({
        point: user.point - point,
      });
      user.save();
      console.log("saved : ", user);
      return user;
    } catch (error) {
      console.log(`User Error in query claimProcess :`, error);
    }
  }

  async function updatePassword(dataClaim) {
    try {
      const { email, newPassword } = dataClaim;
      console.log("datanya ", dataClaim);
      const User = models.User;
      console.log("emailnya ", email);

      const user = await User.findOne({
        where: {
          email: email,
        },
        // include: [
        //   {
        //     model: models.UserClaim,
        //   },
        // ],
      });

      user.set({
        password: newPassword,
      });
      user.save();
      console.log("saved : ", user);
      return user;
    } catch (error) {
      console.log(`User Error in query claimProcess :`, error);
    }
  }

  async function updateUser(dataClaim) {
    try {
      console.log("datanya ", dataClaim);
      const { email, firstName, lastName } = dataClaim;
      const User = models.User;
      console.log("emailnya ", email);

      const user = await User.findOne({
        where: {
          email: email,
        },
        // include: [
        //   {
        //     model: models.UserClaim,
        //   },
        // ],
      });

      user.set({
        firstName: firstName,
        lastName: lastName,
      });
      user.save();
      console.log("saved : ", user);
      return user;
    } catch (error) {
      console.log(`User Error in query UpdateUser :`, error);
    }
  }
};

module.exports = query;
