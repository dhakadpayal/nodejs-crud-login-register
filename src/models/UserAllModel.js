const mongoose = require('../db/Config.js');
const userAllSchema = mongoose.Schema({
    
        name:{
            type:String ,
            required:true
        },
        age:{
            type:Number ,
            required:true
        },
        email:{
            type:String ,
            required:true
        }
       
    
})
const UserAllModel = new mongoose.model('usersAll',userAllSchema);
module.exports = UserAllModel;
//create name email age new model().save().then().catch(); pure din 
//get all data find()
//get one data getFindById(id)
//update data with id  findByIdUpdate();
//delete data with id  findByIdDelete();
