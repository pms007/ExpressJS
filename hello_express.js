const express = require('express');

const app = express();

const port = 3000;

app.get('/',function(req,res){
	res.send('Hello World Wtih Express');
});

app.listen(port,function(){
	console.log('Server is running at http://localhost:' + port);
});