# Learn ExpressJS

### Basic Routing

``
app.METHOD(PATH,HANDLER)
``
### Route Parameters

``
app.get('/users/:userId', function (req, res) {
  res.send(req.params)
})
``
### Route handlers

``
var funA = function (req, res, next) {
  console.log('FunA')
  next();
}
var funB = function (req, res, next) {
  console.log('FunB')
  next();
}
router.get('/handle/next', [funA, funB], function (req, res, next) {
  console.log('The response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Handled next method!');
});
``



