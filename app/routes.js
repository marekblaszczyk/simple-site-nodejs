var express = require('express');
var router = express.Router();

var path = require('path')

// homepage
router.get('/', function(req, res) {
	console.log('Home Page');
	res.render('pages/index')
});

// about page
router.get('/about', function(req, res) {
	console.log('About Page');
	res.render('pages/about')
});

// contact page
router.get('/contact', function(req, res) {
	console.log('Contact Page')
	res.render('pages/contact')
});

router.post('/content', function(req, res){
});

module.exports = router;
