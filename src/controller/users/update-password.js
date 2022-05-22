const updatePassword = ({ ucUpdatePassword }) => {
    return async function post(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        console.log("AUTHORIZATION : ", httpRequest.headers);
        if (httpRequest.headers["Referrer"]) {
          source.referrer = httpRequest.headers["Referrer"];
        }
        const toView = {
          ...info,
          source,
          id: httpRequest.params.id,
          page: httpRequest.query.page,
          limit: httpRequest.query.limit,
          sorting: httpRequest.query.sorting,
          keyword:
            httpRequest.query.keyword === undefined
              ? ""
              : httpRequest.query.keyword,
          authorization: httpRequest.headers["Authorization"],
        };
  
        const data = await ucUpdatePassword(toView);
  
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: data,
          message: "success",
        };
      } catch (e) {
        console.log("updatePassword-controller on controller error  : ", e);
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
  
  module.exports = updatePassword;
  