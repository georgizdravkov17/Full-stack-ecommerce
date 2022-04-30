const bcrypt = require("bcryptjs");

const hashPassword = async (password, salt) => {
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

module.exports = {
    hashPassword
}