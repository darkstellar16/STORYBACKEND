const express = require("express"); 
const route = express.Router();
const {addOrUpdateUser, getUsersWithPosts} = require('../../controller/bookmark/bookmark.js')

route.post("/add",addOrUpdateUser);
route.get("/",getUsersWithPosts);

module.exports = route;