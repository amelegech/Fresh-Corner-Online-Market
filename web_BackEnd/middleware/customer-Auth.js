const jwt = require("jsonwebtoken");
const Customer = require("../model/model.customers");



exports.protect = async (req, res, next) => {

 console.log('Custom Protector is working')
  let token;
 if (
    req.headers.authorization
   
  ) {
    token = req.headers.authorization
    console.log(token);
  }

  console.log("TOKEN MIDDLEWARE CUSTOMER-->",token);

  if (!token) {
    console.log('Protector from custom !token line 20')
    return res
      .status(401)
      .json({ success: false, data: "Not authorized to access this route" });
  }

  try {
    // verify Token process.env.JWT_SECRET get the secret key

    const  verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); 
    console.log('my token', verifiedToken);
   
   req.customer =  await Customer.findById(verifiedToken.id);
   
   console.log("customer id protector from Customer Auth", req.customer );
    //req.customer =id 

  next();
  
  } catch (err) {
    return res
      .status(401 )
      .json({ success: false, data: "Not authorized to access this route" });
  }
};

// Authorize give a permission based on the role 
exports.authorize = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.Customer.role)) {
      return res.status(400).json({
        success: false,
        data: "farmer role is not authorized to access this route",
      });
    }
    next();
  };
};
