var http = require('http');
var upper_case = require('upper-case');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : "text/html"});
    res.write(`<h3>Login Form</h3>
    <label>Firs Name</label><br><br>
    <input type = 'text' name = "first name" value = '' placeholder = 'Type First Name'/><br><br>
    <input type = 'text' name = "last name" value = '' placeholder = ' Type Last Name'/><br><br>
    <input type = 'number' name = "Mobile No" value = '' placeholder = ' Type Mobile No'/><br><br>
    <input type = 'email' name = "email " value = '' placeholder = ' Type email address'/><br><br>
    <input type = 'password' name = "password " value = '' placeholder = ' Type Password'/><br><br>
    <textarea placeholder = "Type address here" name = "address"> Address</textarea><br><br>
    <input type = 'submit' name = "password " value = 'send data'><br><br>`); 
    res.end();
}).listen(3000)