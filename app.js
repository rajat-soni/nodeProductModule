const express = require('express');
const  app = express();
app.get('/',function(req,resp){
    resp.send('hello express');
    resp.end();
}).listen(4500)