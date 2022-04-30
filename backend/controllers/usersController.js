const User = require("../models/User.js");
const mongoose = require("mongoose");
const { registerUserSchema } = require("../validations/userValidation.js");

const getAllUsers = async (req, res) => {
    try{ 

      const users = await User.find();

      res.json(users);
    } catch(err){
        res.json({message: err.message})
    }
}

const getAllUsersAsArray = async (req, res) => {
    try{ 

      const users = await User.find();

      return users;
    } catch(err){
        console.console(err.message);
    }
}

const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
 
    } catch(err){
        res.json({message: err.message})
    }
}

const updateUser = async (req, res) => {
    try{
        const isUserDataValid = await registerUserSchema.validate(req.body);

        if(!isUserDataValid){
            res.json({message: "Cannot update user due to invalid data!"});
        }
        const updatedUser = await User.updateOne({id: req.params.id}, req.body);
        res.json({
            messsage: "Succesfully updated user",
            updatedUser
})

    } catch(err){
        res.json({message: err.message});
    }
}

const deleteUser = async (req, res) => {
    try{
       const deletedUser = await User.deleteOne({id: req.params.id});
       res.json({message: "Succesfully deleted user", deletedUser})
    } catch(err){
      res.json({message: err.message})
    }
}

module.exports = {
    getAllUsers,
    getAllUsersAsArray,
    getUserById,
    deleteUser,
    updateUser
}

