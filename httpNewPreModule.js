var http = require('http'); // http module pre difine module for nnode


var JsonData = [
                    {"name":"John", "age":30, "city":"New York"},
                    {"name":"John", "age":30, "city":"New York"},
                    {"name":"John", "age":30, "city":"New York"},
                    {"name":"John", "age":30, "city":"New York"},
                    {"name":"John", "age":30, "city":"New York"},
                    {"name":"John", "age":30, "city":"New York"},
                    {"name":"John", "age":30, "city":"New York"},
                    {"name":"John", "age":30, "city":"New York"},
]
http.createServer(function(req,res){ // for creating the sever with anonyms function //

res.writeHead(200,{'Content-Type':'application/json'});

res.write(JSON.stringify(JsonData)); // write function takes the string as input for json is should be used JSON.stringfy funtion for json to string converstion.
res.end();
}).listen(6000);