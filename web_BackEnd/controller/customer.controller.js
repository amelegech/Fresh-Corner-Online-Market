const express = require('express');
const ObjectId = require('mongodb').ObjectID;
const jwt =require('jsonwebtoken');
const nodemailer = require('nodemailer')
const Customer = require('../model/model.customers');
const Farmer = require('../model/model.farmers')
const Order = require('../model/order');


exports.customerSignup = async (req,res,next)=>{
  console.log('From Back end Customer', req.body )
    const {fname, email, password} = req.body;

    let customer = await Customer.findOne({email:email});
    if(customer){
       res.json({status:'error', msg: 'farmer is already exist'}) 
    }
    else{
     let newCustomer = await Customer.create({ 
          fname:fname, 
          email:email, 
          password:password, 
          
        }) 
        console.log('from  new customer line 25', newCustomer); 
     res.status(201).json({status:true, data:"New Customer Added"})
     console.log(customer, 'when new farmer registered')
    }
}

exports.customerLogin =  async(req,res,next)=>{
    const {email, password} = req.body;
    if(!email || !password){
       return res.json({status:'error', data:'please enter valid email or password'}) 
    }
     let customer = await Customer.findOne({email:email})
     if(!customer){
        return res.json({status:'error', msg:'invalid credential'}) 
     }
  // start use JWT to get Token
 let token = await jwt.sign({id:customer._id}, process.env.ACCESS_TOKEN_SECRET)
 res.status(200).json({token: token})
},

 /**** Product list *****/
exports.getFarmList = async(req,res,next) =>{  

    try {
        let product = await Farmer.find();
     
         res.status(200).json({ success: true, data: product });
     
    } catch (err) {
        res.status(404).send(err);
    }
 }
  exports.getProductsList = async(req,res,next) =>{  

    try {
        let product = await Farmer.find({_id: req.params.farmer_id});
         res.status(200).json({ success: true, data: product });
     
    } catch (err) {
        res.status(404).send(err);
    }
 }
 /****  Cart *****/
exports.addCart = async(req,res,next)=>{
  try {


   //  console.log('fromnadd to cart  func in side  LINE 72');
    console.log('from addCrt ',req.body );
    let customer = await Customer.findOne({_id:req.customer._id})
    console.log("CUSTOMER ADD CART--->", customer)
    customer.cart.products.push(req.body)
    await customer.save();


console.log('fromnadd to cart  func in side  LINE 78-',customer);

    res.status(201).json({ success: true, data: customer })
  } catch (error) {

    console.log(error);
    res.status(404).json({ success: false, msg: error.message })
  }
    
}
 


exports.getcarts = async(req,res,next)=>{
  try {
  



    console.log('IN SERVER GET ART ',req.customer._id);
    let customer = await Customer.findOne({_id:req.customer._id})
   

    console.log('IN SERVER GET ART  customer',customer.cart);
    res.status(201).json({ success: true, data: customer.cart })
  } catch (error) {
    res.status(404).json({ success: false, msg: error.message })
  }
    
}
exports.makeOrder= async (req, res, next) => {

console.log("req.body   MAKE OREDER ", req.body);

    try {
      console.log('from makeorder  1',)
   let myOrder = await Order.create({    
      // ProdList: req.body.ProdList,
      ProdList:req.body.body.ProdList,
      //totalPrice: req.body.price, 
      customer:req.customer._id ,
      farmer :req.body.farmer
     
    })
   

    // myOrder.ProdList= req.body.body

    // await myOrder.save()

    console.log('from my order  after ', myOrder )

    console.log("  req.customer._id CUSTOMER ID FOR LOGIN PERSON  ", req.customer._id);

    let myCustomer = await Customer.findOne({_id:req.customer._id})
    console.log('From my customer', myCustomer.email);
    let farmer = await Farmer.findOne({_id:req.body.farmer});
  console.log("from makeOrder farm email", farmer.email );   //farmer.email
//about email
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
      }
   }) 

let mailOptions={
        from: myCustomer.email, //'amelemiu2020@gmail.com',                   
        to: farmer.email,
        cc:myCustomer.email ,
        subject: 'ViVa Amele!',
        text: "Fresh corener! This message from make order!"
    }
transporter.sendMail(mailOptions, function(err, data){
    if(err){
    console.log("error error!", err);
    }else{
        console.log('Hello Fresh corener! There it is my Oreder!')
    }
})
    res.status(201).json({ success: true, msg: "Order Successfully added" });
    
      } catch (error) {
        res.status(404).json({ success: false, data: error.message });
      }
  };


  


  exports.getAllOrder=  async (req,res)=>{
  
    
    try {


      console.log("req in order list req.customer._id", req.customer._id);
      // 5f0fdaef1f96a7462c047057
      
      
   let result= await Order.findOne({customer:req.customer._id}) 
   console.log('from get all oeder list ',result);
      res.status(202).json(result);



    } catch (error) {
      res.status(404).json({ success: false, msg: error.message });
    }
  
  
  }