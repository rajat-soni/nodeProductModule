let http = require('http');
http.createServer(function(resq,resp)
{
    
    resp.write('hello i am new server');
    resp.end();
}).listen(5000);