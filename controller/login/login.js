require("dotenv").config();

const registerInfo = require("../../models/userModel.js");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const loginData = async (req, res) => {
    try {

        const { email, password } = req.body;
        // console.log(req.body);
        if (!(email && password)) {
            return res.status(404).send("Fields required");
        }
        const user = await registerInfo.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {

            const token = jwt.sign({ email, password }, process.env.SECRET_KEY, { expiresIn: "4h" })
            // console.log(token);
            user.token = token;
            console.log(user.token)

            return res.status(200).json({ user });
        }
        else {
            res.status(400).send("invalid credentials")
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = loginData;