const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { registerUserSchema, loginUserSchema } = require("../validations/userValidation");
const { hashPassword } = require("../helpers/hashPassword");
const { getAllUsers, getAllUsersAsArray } = require("./usersController");
const { generateJWT } = require("../helpers/generateJWT");

const registerUser = async (req, res) => {
  try{

    const isUserDataValid = await registerUserSchema.validate(req.body);

    if(!isUserDataValid){
      res.json({message: "Invalid user data!"});
    }

    const users = await getAllUsersAsArray();

    const { firstname, lastname, username, email, password } = req.body;

    const isEmailFound = users.find(user => user.email === email);

    if(isEmailFound){
      res.json({message: "Email already exists"});
    }

    const isUsernameFound = users.find(user => user.username === username);

    if(isUsernameFound){
       res.json({message: "Username already exists"});
    }

    const hashedPassword = await hashPassword(password, 10);

    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword
    })

    await newUser.save();

    const jwtToken = generateJWT({ id: newUser._id });

    res.json({
      message: "Succesfully registered user!",
      newUser,
      token: jwtToken
     })

  } catch(err){
      res.json({message: err.message});
  }
}

const loginUser = async (req, res) => {
   try{
      const isUserDataValid = await loginUserSchema.validate(req.body);

      if(!isUserDataValid){
        res.json({message: "Invalid data!"});
      }

      const users = await getAllUsersAsArray();

      const { email, password } = req.body;

      const foundUser = users.find(user => user.email === email);

      if(!foundUser){
        res.json({message: "Invalid credentials!"});
      }

      const arePasswordsEqual = await bcrypt.compare(password, foundUser.password);

      if(!arePasswordsEqual){
        res.json({message: "Invalid credentials!"});
      }

      const jwtToken = generateJWT({id: foundUser._id});

      res.json({
        message: "Succesfully logged in!",
        user: foundUser,
        token: jwtToken
      })

   } catch(err){
     res.json({message: err.message});
   }
}

module.exports = {
    registerUser,
    loginUser
}