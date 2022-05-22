const checkEmail = ({ ucCheckEmail }) => {
  return async function post(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      if (httpRequest.headers["Referrer"]) {
        source.referrer = httpRequest.headers["Referrer"];
      }

      const data = await ucCheckEmail({ ...info, source });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: data,
        message: "success",
      };
    } catch (e) {
      console.log("check-controller on controller error  : ", e);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
        message: "failed",
      };
    }
  };
};

module.exports = checkEmail;
