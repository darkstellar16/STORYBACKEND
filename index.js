require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

let cors = require("cors")
app.use(cors());

const dataConnection = require("./config/db.js");
dataConnection();

const main = require("./routes/index.js");
app.use('/', main);

app.get('/', (req, res) => {
    res.send("Hello from express.js");
})

const port = process.env.PORT || 8000;
console.log(port);
app.listen(port, () => {
    console.log("Server is up and running")
})



