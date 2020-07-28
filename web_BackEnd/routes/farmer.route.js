const express = require('express');
const router = express.Router();
const farmerController = require('../controller/farmer.controller');
const superController = require('../controller/superUser.controller');
const  {protect} = require('../middleware/farm-Auth');
const multer = require('multer');

router.post('/login',farmerController.farmLogin);
router.post('/signup',farmerController.farmSignup);


router.post('/products', protect, multer().single('image'), farmerController.addProducts);
router.get('/products', protect, farmerController.getAllProducts);

router.patch('/products/:products_id',  protect, farmerController.updateProducts);
router.delete('/products/:products_id', protect, farmerController.deleteProducts);

router.get("/orders", protect, farmerController.getOrders);
router.patch("/orders/:orderid" ,  protect, farmerController.changeStatus);
router.get('/farmlists', protect, superController.getAllFarmers);
router.patch('/password/:farmerid',protect,superController.reSetPasswords);
router.patch('/activates/:farmerid',protect,superController.changeFarmerStatus);


module.exports= router;
