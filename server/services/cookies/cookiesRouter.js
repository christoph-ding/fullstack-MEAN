var cookiesController = require('./cookiesController.js');

module.exports = function(express) {
  var cookieRouter = express.Router();

  cookieRouter.post('/', cookiesController.returnFlavor)

  return cookieRouter;
}
