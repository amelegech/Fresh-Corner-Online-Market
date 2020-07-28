const express = require("express");
const router = express.Router();
const objectID = require("mongodb").objectID;
const Customer = require('../model/model.customers');


router.post('/signup',async (req,res,next)=>{
    const {fname, email, password} = req.body;
    let customer = await Customer.findOne({email:email});
    if(customer){
       res.json({status:'error', msg: 'farmer is already exist'}) 
    }
    else{
     await Customer.create({ 
          fname:fname, 
          email:email, 
          password:password, 
          
        }) 
         
     res.status(201).json({status:true, data:"New Customer Added"})
     console.log(customer, 'when new farmer registered')
    }


    
})





module.exports = router;
