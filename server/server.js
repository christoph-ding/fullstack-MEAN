var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.listen(8000, function() {
  console.log('Listening');
});

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log('reached the app server!');
  next();
});

// really simple routing
app.get('/', function(req, res) {
  res.status(200);
  res.send('this is the response for the root GET endpoint\n');
});

// url parameters
app.post('/cookies', function(req, res) {
  var flavor = req.body.flavor;
  res.status(200);
  res.send('have a ' + flavor + ' cookie!\n');
});

// var test = require('./test.js').hiddenVariable;
// console.log('test is: ', test);

var person = {
  'name': 'steve',
  'shoesOn': false
}


var test2 = require('./test2.js')(person);

console.log('our person is: ', person);
