require("dotenv").config;

const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {

    let token = req.headers.authorization;
    console.log(token);

    if (!token) {
        res.status(404).send("Need token for verification");
    }
    else {
        try {
            // token = token.split('')[1];
            // console.log(res);
            token = token.slice(7);
            console.log(token);
            const decoded = await jwt.verify(token, process.env.SECRET_KEY);
            // console.log(decoded);
            req.user = decoded;
            return next();

        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = checkToken;