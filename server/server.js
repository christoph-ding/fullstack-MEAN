var express = require('express');

var app = express();

app.listen(8000, function() {
  console.log('Listening');
});

require('./middleware.js')(app);

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

// === Example of using a module like an api ===
// var test = require('./test.js').hiddenVariable;
// console.log('test is: ', test);

// === Example of how passing an object to a module works === 
// var person = {
//   'name': 'steve',
//   'shoesOn': false
// }

// var test2 = require('./test2.js')(person);
// console.log('our person is: ', person);
