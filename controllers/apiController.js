var users = require('../models/userdb');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({'extended' : 'true' }));

	app.get('/api/users', function(req, res){
	  users.find(function(err,users) {
	    if(err)
	      res.send(err)
	    res.json(users);
	  });
	});

	// app.get('/api/insert', function(req, res) {
	// 	users.find()
	// 	users.forEach(function(doc,err) {
	// 		assert.equal(null, err);
	// 		resultArray.push(doc);
	// 	}, function() {
	// 		users.close();
	// 	});
	// });

	app.post('/api/users', function(req, res){
		// console.log(req.body.userName);
		// console.log(req.body.firstName);
		// console.log(req.body.lastName);
		// console.log(req.body.userName);
		// return;
		let user = new users();
		user.userName = req.body.userName;
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;

		user.save(function(err) {
			if(err) {
				console.log(err);
				return;
			} else {
				
			}
		});
		// res.send("New user added!");
		// users.create({
		// 	userName: req.body.userName,
		// 	firstName: req.body.firstName,
		// 	lastName: req.body.lastName
		// });
	});

	// app.post('/api/users', function(req, res){
	//   users.create({
	//     userName: req.body.username,
	//     firstName: req.body.firstName,
	//     lastName: req.body.lastName
	//   }, function(err, users) {
	//     if (err)
	//       res.send(err);
	//       users.find(function(err,users){
	//         if (err)
	//           res.send(err);
	//         res.json(users);
	//       });
	//   });
	// });

	app.delete('/api/users/', function(req, res){
		users.findByIdAndRemove(req.body.userId, function() {
		});
		res.send('SUCCESS!!!!');
	  // users.remove({
	  //   _id : req.params.id
	  // }, function(err, users) {
	  //   if (err)
	  //     res.send(err);
	  //   users.find(function(err, users) {
	  //     if (err)
	  //       res.send(err)
	  //     res.json(users);
	  //   });
	  // });
	});
}
