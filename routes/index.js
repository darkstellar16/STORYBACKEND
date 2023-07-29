const express = require("express");

const route = express.Router();

const register = require("./register/register.js");

const login = require("../routes/login/login.js");

const story = require("./addStory/addStory.js")

const filter = require("../routes/filter/filter.js");

const mystory = require("../routes/mystory/mystory.js");

const bookmark = require("../routes/bookmark/bookmark.js")

const del = require("../routes/delete/delete.js");


route.use('/register', register);
route.use('/login', login);
route.use('/story', story);
route.use('/filter', filter);
route.use('/mystory', mystory);
route.use('/bookmark', bookmark);
route.use('/remove', del);

module.exports = route;