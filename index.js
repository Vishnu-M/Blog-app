const http = require('http');
const url = require('url');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root"
});

conn.connect(function(err){
    if (err){
        throw err;
    }
    console.log('Connected');
})

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello");

    var q = url.parse(req.url,true);
    console.log(q);
    // conn.query(q., function(err,result){
    //     if (err) throw err;
    //     console.log("Result : " + result);
    // });
    
    

}).listen(8090);

console.log("Server Started at 127.0.0.1:8090.....");