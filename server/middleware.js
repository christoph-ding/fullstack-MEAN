var morgan = require('morgan');
var bodyParser = require('body-parser');

var sayHello = function(req, res, next) {
  console.log('reached the app server!');
  next();
}

var endResReqCycle = function(req, res) {
  var msg = res.locals.msg;
  res.send(msg);
}

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());

  // routing
  var cookieRouter = require('./services/cookies/cookiesRouter.js')(express);
  app.use('/cookies', sayHello, cookieRouter, endResReqCycle);

}
