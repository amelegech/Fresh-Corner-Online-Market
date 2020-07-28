const express = require('express');
const ObjectId = require('mongodb').ObjectID;
const jwt =require('jsonwebtoken');
const dotenv = require("dotenv"); 
const Farmer = require('../model/model.farmers');
const Customer = require('../model/model.customers');

   /*******Get all  Farmers from database ********/
exports.getAllFarmers = async (req,res, next)=>{
    try {
      const farm = await Farmer.find() 
      console.log(farm);
    return  res.status(202).json({ success: true, data:farm});
    } catch (err) {
    return  res.status(404).json({ success: false, msg: error.message });
    }
 }
 /*******Get all Customers from database ********/
 exports.getAllCustomers = async (req,res, next)=>{
    try {
      const custm = await Customer.find() 
      console.log(custm);
    return  res.status(202).json({ success: true, data:custm});
    } catch (err) {
    return  res.status(404).json({ success: false, msg: error.message });
    }
 }

 /*******Reset The password for Farmers from database ********/
 exports.reSetPasswords = async (req,res)=>{


  try {
    
    await Farmer.updateOne({_id:req.params.farmerid},{$set: {password:req.body.password}}) 
    res.status(202).json({ success: true, message:"Password successfully updated"});
  } catch (error) {
    res.status(404).json({ success: false, msg: error.message });
  }


}

/*******Change The Farmers status (Activate or Deactivate) ********/
exports.changeFarmerStatus = async (req,res, next)=>{

  try {
    await Farmer.updateOne({_id:req.params.farmerid},{$set:{active:req.body.status}})
    res.status(202).json({ success: true, message:"successfully status updated"});
  } catch (error) {
    res.status(404).json({ success: false, msg: error.message });
  }

}
/*******Reset Customer Password From database*********/
exports.reSetCustomerPasswords = async (req,res)=>{


  try {
    
    await Customer.updateOne({_id:req.params.customerid},{$set: {password:req.body.password}}) 
    res.status(202).json({ success: true, message:"Password successfully updated"});
  } catch (error) {
    res.status(404).json({ success: false, msg: error.message });
  }


}

/*******Change The Customer status (Activate or Deactivate) ********/
exports.changeCustomerStatus = async (req,res, next)=>{
console.log(req.body)
  try {
    await Customer.updateOne({_id:req.params.customerid},{$set:{active:req.body.status}})
    res.status(202).json({ success: true, message:"Status Successfully Updated"});
  } catch (error) {
    res.status(404).json({ success: false, msg: error.message });
  }

}


 