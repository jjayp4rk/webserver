var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var apiController = require('./controllers/apiController');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

//Initiate
var app = express();
var port = process.env.port || 3000;

mongoose.connect('mongodb://localhost/userdb');
let db = mongoose.connection;

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

// Check connection
db.once('open', function(){
	console.log('Connected to MongoDB');
});

// Check for database errors
db.on('error', function(err){
	console.log(err);
});

// Bring in Models

var users = require('./models/userdb');

// Home route
app.get('/', function(req, res){
  	users.find({}, function(err, user){
  		if(err){
  			console.log(err);
  		} else {
  			res.sendFile(path.join(__dirname +'/public/index.html'));
  		}
  	});
});
//
// app.get('/userlist', function(req, res){
// 	res.sendFile(path.join(__dirname + '/public/add_user.html'));
// });

apiController(app)

// Start Server
app.listen(port, function(){
  console.log('Server started on port 3000...')
});
