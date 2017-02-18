var express = require('express');
var router = express.Router();

var path = require('path')

// homepage
router.get('/', function(req, res) {
	console.log('Home Page');
	res.sendFile(path.join(__dirname, '../index.html'))
});

// about page
router.get('/about', function(req, res) {
	res.send('About Page');
		res.sendFile(path.join(__dirname, '../about.html'))
});

// contact page
router.get('/content');
router.post('/content');

module.exports = router;
