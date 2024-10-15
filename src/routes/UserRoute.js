const express = require('express');
const route = express.Router();
const {registerController,loginController} = require('../controllers/UserController');
const {UserValidator} = require('../validators/UserValidator');

//create authentication
route.post('/register',UserValidator,registerController);
route.post('/login',loginController);
module.exports = route;