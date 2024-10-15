const { check } = require("express-validator")

let UserValidator =[
        
               check('name','Invalid name').isAlpha().notEmpty(),
               check('username','Invalid username').isAlpha().notEmpty(),
               check('email','Invalid email').isEmail(),
               check('password','Invalid password').notEmpty().isLength({min:6,max:10})
               .matches(/\d/).withMessage('atleast one digit')
               
        ]
module.exports = {UserValidator}