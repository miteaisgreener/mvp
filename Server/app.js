var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Zillow = require('node-zillow');

// var zwsid = process.env.ZWSID || 'X1-ZQz19jamqbyih7_5f91a'
var zillow = new Zillow('X1-ZWz19jamqbyih7_5f91a');

var parameters = {
	zpid: 1111111
};

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('Client'))

app.post('/zillow', function(req,res){
	console.log(req.body.address);
	zillow.get('GetZestimate', parameters)
		.then(function(results){
		res.send(results);
		console.log(results);
	})
	
	// res.status(200).send(req.body);
})

zillow.get('GetZestimate',parameters)
.then(function(results){
	console.log(results);
})








var port = process.env.PORT || 3000

app.listen(port);
console.log('listening on port' + port);
