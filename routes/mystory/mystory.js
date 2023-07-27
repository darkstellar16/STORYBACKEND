const express = require('express')

const route = express.Router();

const mystoryData = require("../../controller/mystory/mystory.js");

route.get('/', mystoryData);


module.exports = route;  