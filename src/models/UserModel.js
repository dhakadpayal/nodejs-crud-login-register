const mongoose = require('../db/Config.js');
const userSchema = mongoose.Schema({
    
        name:{
            type:String ,
            required:true
        },
        username:{
            type:String ,
            required:true
        },
        email:{
            type:String ,
            required:true
        },
        password:{
            type:String ,
            required:true
        }
    
})
const UserModel = new mongoose.model('users',userSchema);
module.exports = UserModel;