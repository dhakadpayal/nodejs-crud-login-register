const express = require('express');
const app = express();
const route = require('./routes/UserRoute');
//useAll routes
const userRoute = require('./routes/UserAllRoute');

require('dotenv').config();

const PORT  = process.env.PORT ||5000 ;
//let port = 3000;

app.use(express.json());
//Authentication login register
app.use('/api/auth',route);
//all routes 
app.use('/api/',userRoute);

app.listen(PORT,()=>{
    console.log(`server started at   ${PORT}`)
});