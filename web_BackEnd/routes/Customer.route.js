const express = require('express');
const router = express.Router();
const customerController = require('../controller/customer.controller');
const superController = require('../controller/superUser.controller');
const  {protect} = require('../middleware/customer-Auth');


router.post('/login', customerController.customerLogin);
router.post('/signup', customerController.customerSignup);
router.get('/farmer', customerController.getFarmList);
router.get('/farmer/:farmer_id', protect, customerController.getProductsList);
router.post('/addcarts', protect, customerController.addCart); 

router.get('/carts',protect, customerController.getcarts)

router.post('/orders', protect, customerController.makeOrder);
router.get('/customerlist', superController.getAllCustomers);

router.get('/orderlist', protect, customerController.getAllOrder);
router.patch('/active/:customerid', protect, superController.changeCustomerStatus);
router.patch('/password/:customerid',protect, superController.reSetCustomerPasswords);



module.exports = router;