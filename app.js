var express = require('express');
var path = require('path');
var https = require('https');
var http = require('http');

//Initiate
var app = express();
var port = process.env.port || 3000;

app.use(express.static('public'));

app.use('/', function (req, res, next){
    console.log('Request URL: ' + req.url);
    next();
});
// Home route
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname +'/index.html'));
});
// API/Greeting route
app.get('/api/greeting', function(req,res) {
  res.json({name: 'Jay', lastname: 'Park'});
});

// Start Server
app.listen(port, function(){
  console.log('Server started on port 3000...')
});
