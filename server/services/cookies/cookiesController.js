var returnFlavor = function(req, res, next) {
  var flavor = req.body.flavor;

  if (flavor === 'undefined') {
    res.status(400);
    res.send('you did not choose a flavor\n');
  } else {
    res.locals.msg = 'you chose a ' + flavor + ' cookie!\n';
    next();
  }
}

module.exports = {
  returnFlavor: returnFlavor
}
