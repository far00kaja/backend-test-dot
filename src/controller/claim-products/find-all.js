const findAll = ({ ucFindAll }) => {
  return async function get(httpRequest) {
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
        keyword:
          httpRequest.query.keyword === undefined
            ? ""
            : httpRequest.query.keyword,
        authorization: httpRequest.headers["Authorization"],
      };
      
      const data = await ucFindAll(toView);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: data,
        message: "success",
      };
    } catch (e) {
      console.log("findall-controller on controller error  : ", e);
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

module.exports = findAll;
