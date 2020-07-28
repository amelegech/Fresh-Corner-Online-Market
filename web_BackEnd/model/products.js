const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    farmName :String,
    prodName: String,  
    price:Number, 
    healthInfo :String,
    
})
module.exports=mongoose.model('Product', productSchema)