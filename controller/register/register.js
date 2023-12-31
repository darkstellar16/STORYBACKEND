const registerInfo = require("../../models/userModel.js");

const bcrypt = require("bcrypt");

const registerData = async (req, res) => {

    try {
        const {email, password } = req.body;

        if (!(email && password)) {
             return res.status(400).send("Please Input the mentioned details");   //Asking for details
        }

        const oldUser = await registerInfo.findOne({ email });
        
        if (oldUser) {
            return res.status(409).send("Please login you are already registered user");  //checking whether the user is already present or not..
        }

        const encryptedPasword = await bcrypt.hash(password, 10);

        const register = await registerInfo.create({
            email: email,
            password: encryptedPasword
        })
        res.status(200).send("User have registered successfully");
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = registerData;