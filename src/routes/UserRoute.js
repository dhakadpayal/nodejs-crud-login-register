const express = require('express');
const route = express.Router();

const {registerController,loginController} = require('../controllers/UserController');


route.post('/register',registerController);
route.post('/login',loginController);




module.exports = route;