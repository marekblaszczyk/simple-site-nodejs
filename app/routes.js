var express = require('express');
var router = express.Router();

var path = require('path')

// homepage
router.get('/', function(req, res) {
	console.log('Home Page');
	res.render('pages/home')
});

// about page
router.get('/about', function(req, res) {
	console.log('About Page');
	var users = [
		{name: 'Nicolas', email: 'nicolas@email.com', avatar: 'https://www.placecage.com/150/150'},
		{name: 'Bill', email: 'bill@email.com', avatar: 'http://www.fillmurray.com/150/150'},
		{name: 'Steven', email: 'steven@email.com', avatar: 'http://www.stevensegallery.com/150/150'},
		{name: 'Kitten', email: 'kitten@email.com', avatar: 'http://www.placekitten.com/150/150'}
	];
	res.render('pages/about', {users: users})
});

// contact page
router.get('/contact', function(req, res) {
	console.log('Contact Page')
	res.render('pages/contact')
});

router.post('/contact', function(req, res) {
	console.log(req.body.message);
	res.send('Thanks for contact us, ' + req.body.name)
});

module.exports = router;
