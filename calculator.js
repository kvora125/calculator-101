//jshint esversion 6
const express = require ("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));
app.get("/", function(req, res){
	console.log("app requested");
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
	var y=Number(req.body.operator);
	var x=Number(req.body.num1);
	var z=Number(req.body.num2);
	var result = null;
	if(y===1)
	{
		result = x+z;
	}
	if(y===2)
	{
		result = x-z;
	}
	if(y===3)
	{
		result = x*z;
	}
	if(y===4)
	{
		result = x/z;
	}
	res.send("Result: "+result)
});

app.listen(3000, function(){
	console.log("server started")
});
