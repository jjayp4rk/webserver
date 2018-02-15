var express = require('express');
var path = require('path');
var https = require('https');
var http = require('http');

//Initiate
var app = express();

app.use(express.static('public'));

// Home route
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname +'/index.html'));
});

// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...')
});
