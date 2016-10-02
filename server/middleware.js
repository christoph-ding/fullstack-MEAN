var morgan = require('morgan');
var bodyParser = require('body-parser');

var sayHello = function(req, res, next) {
  console.log('reached the app server!');
  next();
}

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());

  // routing
  var cookieRouter = require('./services/cookies/cookiesRouter.js')(express);
  app.use('/cookies', sayHello, cookieRouter);

}
