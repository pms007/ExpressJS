var express = require('express');
var router = express.Router();

//GET
router.get('/get', function(req,res,next){
	res.send('Got Get Request');
});

//POST
router.post('/post', function(req,res,next){
	res.send('Got Post Request');
});

//PUT
router.put('/put', function(req,res,next){
	res.send('Got Put Request');
});

router.delete('/delete', function(req,res,next){
	res.send('Got Delete Request');
});

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

module.exports = router;
