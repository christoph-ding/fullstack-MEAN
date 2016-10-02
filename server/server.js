var express = require('express');

var app = express();

app.listen(8000, function() {
  console.log('Listening');
});

// really simple routing
app.get('/', function(req, res) {
  console.log('got to the root GET endpoint');
  res.status(200);
  res.send('this is the response for the root GET endpoint');
});
