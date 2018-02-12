var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var url = "mongodb://localhost:27017/mydb";

const TEMPLATE_DIR = __dirname + '/templates';







var UserSchema = new mongoose.Schema({
    username:{
        type: String,
        unique:true,
        required:true,
        trim:true
    }
    ,password:{
        type:String,
        required:true
    }
});

var User = mongoose.model('User',UserSchema);
module.exports = User;







// mongo.connect(url, function(err,dbase){
//     if ( err ) throw err;
//     db = dbase;
//     // console.log('Database created');
//     // var dbo = db.db("mydb");
//     // var obj = {username: "abh", password:"abh123"};
//     // dbo.collection("users").insertOne(obj, function(err, res){
//     //     if ( err ) throw err;
//     //     console.log("one row affected");
//     // });
//     dbase.close(0);
// });




app.use('/assets',express.static('templates/assets'));




app.get('/', function(req, res) {
    res.sendFile(path.join(TEMPLATE_DIR + '/index.html'));
});






app.post('/signup', function(req, res){
    console.log(req.body);
    if ( req.body.username && req.body.password){
        var userData = {
            username: req.body.username,
            password: req.body.password
        };

        User.create(userData, function(err, data){
            if ( err ) 
                return next(err);
            else
                return res.sendFile(path.join(TEMPLATE_DIR + '/welcome.html'));
        })
    }
});





app.listen(8090, ()=>{
    console.info("==> 🌎 Development Server started at http://127.0.0.1:8090");
});

