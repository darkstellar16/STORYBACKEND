const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
   
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength:5
    },
    token:{
        type:String
    }
})

const registerInfo = mongoose.model("Register", registerSchema);

module.exports = registerInfo;