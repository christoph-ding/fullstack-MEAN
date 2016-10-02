var express = require('express');

var app = express();

app.listen(8000, function() {
  console.log('Listening');
});

require('./middleware.js')(app, express);

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
