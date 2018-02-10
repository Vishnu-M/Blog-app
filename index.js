var express = require('express');
var app = express();
var path = require('path');

const TEMPLATE_DIR = __dirname + '/templates';


app.get('/', function(req, res) {
    app.use('/assets',express.static('templates/assets'));
    res.sendFile(path.join(TEMPLATE_DIR + '/index.html'));
});

app.listen(8090);

console.log("[+] Development Server started at http://127.0.0.1:8090");