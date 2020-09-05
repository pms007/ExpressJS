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

module.exports = router;
