//index.server.routes.js-Jingya Huang 301221651 June 7, 2023

// imports the Express module and creates a new router object
var express = require('express');
var router = express.Router();
//use router.get method to render 5 views with corresponding titles
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
  });

module.exports = router;