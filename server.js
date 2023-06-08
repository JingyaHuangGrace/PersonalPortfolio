//express.js-Jingya Huang 301221651 June 6, 2023
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();

app.listen(3008);
module.exports = app;

console.log('Server running at http://localhost:3008/');