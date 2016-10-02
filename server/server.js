var express = require('express');
var morgan = require('morgan');

var app = express();

app.listen(8000, function() {
  console.log('Listening');
});

app.use(morgan('dev'));

app.use(function(req, res, next) {
  console.log('reached the app server!');
  next();
});

// really simple routing
app.get('/', function(req, res) {
  res.status(200);
  res.send('this is the response for the root GET endpoint\n');
});

app.get('/cookies', function(req, res) {
  res.status(200);
  res.send('have a cookie!\n');
})
