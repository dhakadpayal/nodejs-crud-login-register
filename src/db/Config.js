const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>{
    console.log('Database Connected');
})
.catch(()=>{ 
    console.log(' Database Not Connected');
})
module.exports = mongoose;