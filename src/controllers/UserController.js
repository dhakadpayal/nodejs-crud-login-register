const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerController = async(req,res)=>{
    const { name,username,email,password} = req.body;
    const user = await UserModel.findOne({email:email});
    if(user){
        res.send({status:"failed",message:"Email already exists"});
    }
    else{
        if(name&&username&&email&&password){
            
              try {
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password,salt);
                
                const doc  = new UserModel({
                    name:name,
                    email:email,
                    username:username,
                    password:hashPassword 
                  
                    
                })
                await doc.save();
                const saved_user = await UserModel.findOne({email:email});
                //jwt token 
                const token = jwt.sign({ userID:saved_user._id},process.env.SECRET_KEY,{expiresIn:'5d'});

                res.send({status:"success",message:"Register successfully",token:token,doc:doc});
              } catch (error) {
                res.send({status:"failed",message:"Unable to register"});
              }
            
           
        }
        else{
            res.send({status:"failed",message:"All fields are required"});
        }
    }
}
//
const loginController = async(req,res)=>{
     const {email,password} = req.body;
     console.log(email);
     if(email&&password){
        const user = await UserModel.findOne({email:email})
        if(user != null){
            const isMatch = await bcrypt.compare(password,user.password);
            if((user.email == email)&&isMatch){
                const token= jwt.sign({userID:user._id},process.env.SECRET_KEY,{expiresIn:'5d'});
                res.send({status:"success",message:"login successfully",token:token})
            }
            else{
                res.send({status:"failed",message:"not log in "})
            } 
        }
        else{
            res.send({status:"failed",message:"Unauthorize"})
        }
     }
     else{
        res.send({status:"failed",message:"All field are required"})
     }
}
module.exports = {registerController,loginController}
