var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/hao',function(req,res){
	
	var name = req.body.name;
	var age = req.body.age;
	
	res.json({name:name,age:age})
})

app.get('/jsonp',function(req,res){
	
	var callback = req.query.callback;
	
	var data = {name:'abc',age:111};
	data = JSON.stringify(data);
	
	res.send(callback + '('+data+')');
//	res.send('foo('+data+')')
//  res.send('alert(1100)')
})

app.get('/jsonp2',function(req,res){
	
	var data = {name:'abc',day:1000000000};
	data = JSON.stringify(data);
	
	res.send('foo('+data+')')
//res.send('alert(1100)')
})


app.get('/jqjsonp',function(){
	
	var data = {name:'abc',day:1000000000};
	res.jsonp(data);
})

app.listen(4008,function(){
	console.log('server start......')
})
