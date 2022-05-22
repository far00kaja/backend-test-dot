const express = require("express");
const router = express.Router();

const makeExpressCallback = require("../../express-callback/app");

const route = require("./route");

const routes = route({router, makeExpressCallback});
const services = Object.freeze({
  routes,
});

module.exports = services;

module.exports = {
  routes,
};

module.exports = router;
