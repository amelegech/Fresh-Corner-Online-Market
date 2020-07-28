const mongoose= require('mongoose');
const { ObjectID } = require('mongodb');
const Schema= mongoose.Schema;
const farmerSchema= new Schema({
    farmName: String,
    email: String,
    password: String,
    role: {
        type: String,
      default: 'Farmer' //'Farmer' //Admin
    },
    active:{
      type:Boolean,
      default:true
    },
    products:[{
    products_id:ObjectID,
    prodName: String,  
    price:Number, 
    image:String,
    prodInfo :String,
    }]
})
module.exports= mongoose.model('Farmer', farmerSchema);