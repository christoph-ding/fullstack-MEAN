var returnFlavor = function(req, res, next) {
  var flavor = req.body.flavor;
  res.status(200);
  res.send('have a ' + flavor + ' cookie!\n');
}

module.exports = {
  returnFlavor: returnFlavor
}
