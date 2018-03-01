var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//User schema
var userSchema = new Schema({
	userName:{
		type: String,
		required: true,
	},
	firstName:{
		type: String,
		required: true,
	},
	lastName:{
		type: String,
		required: true,
	}
});

var users = module.exports = mongoose.model('users', userSchema);
