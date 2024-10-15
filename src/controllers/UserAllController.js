const UserAllModel = require('../models/UserAllModel');
 

 //post data to database;
let  postController = async(req,res)=>{
    console.log(req);
   const data = new UserAllModel({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email
  });
  try {
      let dataSave = await data.save();
      res.status(200).json(dataSave)
  }
  catch (error) {
      res.status(400).json({message: error.message});
  }
    
 }

 //get all data
 const getAllController = async(req,res)=>{
   try{
      const data = await UserAllModel.find();
      res.status(200).json(data)
      console.log(data);
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//get one data by id 
 const getOneController = async(req,res)=>{
    console.log(req.params.id);
   try{
      const data = await UserAllModel.findById(req.params.id);
      res.status(200).json(data);
      console.log(data);
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
 }
//update data
const updateController =async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await UserAllModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.status(200).send(result)
        console.log(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
//delete data by id 
 const deleteController = async(req,res)=>{
    
    try{
        const id = req.params.id
       // console.log(id);
        const data = await UserAllModel.findByIdAndDelete(id);
        res.send(` Document with ${data.name}  has been deleted `);
        console.log(data.name);
    }
    catch(error){
            res.status(500).json({message:error.message});
    }
  
}

//export controllers
  module.exports = {
                    postController,
                    getAllController,
                    getOneController,
                    updateController,
                    deleteController
                }

                     
                     
                     
                  