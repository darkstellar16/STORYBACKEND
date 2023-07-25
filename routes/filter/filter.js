const express = require("express");

const route = express.Router();

const filterData = require("../../controller/filter/filter.js");

route.get("/", filterData);


module.exports = route;