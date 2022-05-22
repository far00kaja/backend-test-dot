const findById = ({ ucFindById }) => {
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
        const toView = {
            ...info,
            source,
            id: httpRequest.params.id,
            page: httpRequest.query.page,
            limit: httpRequest.query.limit,
            sorting: httpRequest.query.sorting,
          };
        const data = await ucFindById(toView);
  
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: data,
          message: "success",
        };
      } catch (e) {
        console.log("findById-controller on controller error  : ", e);
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
  
  module.exports = findById;
  