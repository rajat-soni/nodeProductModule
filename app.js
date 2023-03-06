const express = require('express');
const  app = express();
const router = express.Router();
const checkUrl = require('./middleWire');


app.get('/Home',function(req,resp){
    // resp.send('hello express i am Home page');
    resp.sendFile(__dirname+'/home.html')
})


app.get('/Category',function(req,res){ // get function means here for get somthing. like we are getting simple msg here.
    res.send('Hi exprees i am category page')
})


router.get('/aboutus',checkUrl,function(req,res){
    // res.send('Hi exprees i am about us page')
    res.sendFile(__dirname+'/aboutus.html')
})


router.get('/login', checkUrl,function(req,res){ // routing page 
    // res.send('Hi exprees i am Login page')
    res.sendFile(__dirname+'/loginPage.html') 
})
   
app.use('/',router);

app.listen(4500)