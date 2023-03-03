var mysql = require('mysql');
var conn = mysql.createConnection({
host :'localhost',
user :'root',
password : '',
database  : 'no_tbl'
});
conn.connect(function(erro){

    if(erro) throw erro;
   conn.query("select * from no_tbl" , function(err,result){
   if(err) throw err;
    console.warn(result)
   })

});