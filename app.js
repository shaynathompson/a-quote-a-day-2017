var express = require('express'); //web application frrame work aka ExpressJS



var app = express();

app.get('/', function(req, res)
{
	
	res.sendFile(__dirname+'/index.html');
});



app.post('/login', function(req, res){
	console.log("login *********")
	res.end("Login Successful.");
	
	
});

app.get('/queryProducts', function(req, res){
	
	res.json([{name: 'iphone7'}, {name: 'iPad mini'}]);
});

var port= process.env.port || 8080;
app.listen(port,function()
{
	console.log("Server runnin on port 3000"); /*http://localhost:3000*/
	
});

console.log("a quote a day project started")