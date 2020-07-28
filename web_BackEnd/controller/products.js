const Products = require('../model/products');
const objectID = require('mongodb').objectID;


exports.addProducts= async (req, res, next) => {

    try {
    await Products.create({    
    farmName : req.body.farmName,
    prodName: req.body.prodName, 
    price:req.body.price, 
    healthInfo :req.body.healthInfo,
    
    })
    res.status(201).json({ success: true, msg: "Successfully created" });
    console.log(products, 'new product added')
      } catch (error) {
        res.status(404).json({ success: false, data: error.message });
      }
  };

 exports.getAllProducts = async(req,res,next) =>{
    try {
        await Products.find()
     .then(prod=>{
         res.status(200).json({ success: true, data: prod })
     })
    } catch (err) {
        res.status(404).send(err)
    }
 }
           
exports.updateProducts= async (req, res, next) => {
    try {
      await Products.updateOne({ _id: req.params.products_id }, { $set: req.body });
      res.status(202).json({ success: true, data: "Successfully Updated" });
    } catch (error) {
      res.status(404).json({ success: false, data: error.message });
    }
  };

exports. deleteProducts = async (req, res, next) => {
  try {
    await Products.findOneAndRemove({ _id: req.params.products_id});
    res.status(202).json({ success: true, data: "Successfully Removed" });
  } catch (error) {
    res.status(404).json({ success: false, data: error.message });
  }
}
 