const express = require("express");

const route = express.Router();

const delData = require("../../controller/delete/delete.js");

route.delete("/", delData);


module.exports = route;