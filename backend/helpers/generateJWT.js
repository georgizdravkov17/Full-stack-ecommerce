require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateJWT = (payload) => {
    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET);
    return jwtToken;
}

module.exports = { generateJWT }