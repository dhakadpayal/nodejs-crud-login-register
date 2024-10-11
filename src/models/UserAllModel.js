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