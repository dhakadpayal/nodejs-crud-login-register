const express = require('express');
const userRoute = express.Router();

const {postController} = require('../controllers/UserAllController');
const {getAllController} = require('../controllers/UserAllController');
const {getOneController} = require('../controllers/UserAllController');
const {updateController} = require('../controllers/UserAllController');
const {deleteController} = require('../controllers/UserAllController');

//data create
userRoute.post('/create',postController);
//get all data
userRoute.get('/getAll',getAllController);
//get by id method
userRoute.get('/getOne/:id',getOneController);
// update data by Id
userRoute.patch('/update/:id',updateController);
// delete data by Id
userRoute.delete('/delete/:id',deleteController);
module.exports = userRoute;