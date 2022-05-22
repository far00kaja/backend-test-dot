const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { append } = require("express/lib/response");
const client = require("./data-access/redis/redis-client");
// accessible to any
dotenv.config();
const app = express();

//body parser middleware to handle raw JSON files

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3002;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use("/users", require("./routes/users/app"));
app.use("/products", require("./routes/products/app"));
app.use("/claim", require("./routes/claim-products/app"));
app.use(async (req, res) => {
  res.status(404).send(`Route is no where to be found`);
});

module.exports = app;
