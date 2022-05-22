const dotenv = require("dotenv");
const pg = require("pg");

//
const connect = require("./connection");
//get function from connect di atas
const connects = connect(dotenv, pg);

const services = Object.freeze({ connects });

module.exports = services;
module.exports = { connects };
