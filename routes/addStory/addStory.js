const express = require("express");

const route = express.Router();

const storyData = require("../../controller/addStory/addStory.js");

const auth = require("../../middleware/auth.js");

route.post("/",auth,storyData);

module.exports = route;

   