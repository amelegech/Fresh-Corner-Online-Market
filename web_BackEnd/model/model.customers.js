const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const customerSchema= new Schema({
    fname: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'Customer'
    },
    active:{
      type:Boolean,
      default:true
    },
    cart:{
        products:[],
        totalPrice: Number,
        totalOrder: Number,
        prodName:String,
            
    }
    
})
module.exports= mongoose.model('Customer', customerSchema);