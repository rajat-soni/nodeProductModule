var http = require('http');

http.createServer(function(req,res)
{
    
    res.write("hello team  i am new moon");
    res.end();
}).listen(2300);