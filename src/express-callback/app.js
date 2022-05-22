const makeExpressCallback = (controller) => {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referrer: req.get("referrer"),
        "User-Agent": req.get("User-Agent"),
        Cookie: req.get("Authorization"),
        "Access-Controll-Allow-Origin": "*",
        Authorization: req.get("Authorization"),
      },
    };

    console.log("httpReq : ", httpRequest);

    controller(httpRequest)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set("Access-Control-Allow-Origin", "*");
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send({
          status: httpResponse.statusCode,
          result: httpResponse.body,
          message: httpResponse.message,
        });
      })
      .catch((error) => {
        console.log("express-callback error on : ", error);
        res.sendStatus(500);
      });
  };
};

module.exports = makeExpressCallback;
