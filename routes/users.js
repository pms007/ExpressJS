var express = require('express');
var router = express.Router();

router.use(function(req,res,next){
	console.log("Time:",Date.now());
	next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Get request query */
router.get('/:user_id',function(req,res,next){
	res.send(req.params);
});

module.exports = router;
