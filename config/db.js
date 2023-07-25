require("dotenv").config();
const mongoose = require("mongoose");


// const  mongo_url  = "mongodb+srv://shubham:shubh@cluster0.oraafuo.mongodb.net/?retryWrites=true&w=majority";

const  MONGO_URL=process.env.MONGOURL;

// console.log(mongo_url);
const connection = async () => {

    try {
        mongoose.connect(MONGO_URL, { useNewUrlParser: true })
        console.log("Data base Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;