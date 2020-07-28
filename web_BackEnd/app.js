const express = require('express');
const nodemailer = require('nodemailer');
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJsDoc =require('swagger-jsdoc');
const swaggerUi =require('swagger-ui-express');
const app = express();
const farmRoute =require('./routes/farmer.route');
const customerRoute = require('./routes/Customer.route');


// Connect To MongoDB & access the link in the .env
dotenv.config(); 
//mongoose.connect(process.env.DB_CONNECT,
  // {useNewUrlParser:true, useUnifiedTopology: true}, ()=>{
      // console.log('My MongoDB Is Connected...!')
   //} )
  

app.use(bodyParser.json());
app.use(express.json({extended: false}));
app.use(cors());
//Routes
app.use('/farmers', farmRoute);
app.use('/customers', customerRoute);


//app is listening port  
const port = 2020;
mongoose.connect('mongodb://localhost:27017/Fresh-Corner',{
    useNewUrlParser:true, useUnifiedTopology:true
}).then((e)=>{
    console.log('DB compass connected')
    app.listen(port,()=>{
        console.log(`server is running on port: ${port}` )
    })
}).catch(err=>{
    console.log(err)
})
//This file suppose to save in .env
/*DB_CONNECT=mongodb+srv://AmPolo_MIU:AmPolo_MIU@amele-miu-2020.p3krb.mongodb.net/<dbname>?retryWrites=true&w=majority,*/