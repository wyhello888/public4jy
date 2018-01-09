var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

var fs = require('fs');
var shortId = require('short-id');

var path = './public/msg.json';

//跳转登录页
app.get('/login',function(req,res){
	
	res.sendFile(__dirname + '/login.html')
		
})

app.get('/loginAction',function(req,res){
	res.redirect('/')
})


//进入聊天页面
app.get('/',function(req,res){
	//sendFile 使用绝对路径返回文件
	res.sendFile(__dirname + '/index.html')
})
/*
 
 * send 接口用来获取用户发送的消息
 *  构造一个消息对象， 把消息对象存在json文件中，并且把次对象返回给浏览器
 * 浏览器解析这个对象，展示在页面
 * */
app.get('/send',function(req,res){
	
	var msg = req.query.msg;
	var username = req.query.username;
	
	fs.readFile(path,function(err,data){
		if(err){
			console.log(err)
		}else{
			var json = JSON.parse(data.toString());
			console.log(json)
			var id= shortId.generate();
			var time = new Date();
			var message = {id:id,username: username,msg:msg,time: time};
			json.push(message);
			fs.writeFile('./public/msg.json',JSON.stringify(json),function(err){
				if(err){
					console.log(err)
				}else{
				     res.json(message) 
				}			
			})
		}
		
	})
	
})

/*
 *
 * 获取最新消息
 * 前端通过定时器，自动请求服务器，获取最新消息
 * */
app.get('/getmsg',function(req,res){
	
	fs.readFile(path,function(err,data){
		if(err){
			console.log(err)
		}else{
			var json = JSON.parse(data.toString());
			var newmsg = json.pop();
			res.json(newmsg);
		}
		
	})
	
})


app.listen(4010,function(){
	console.log('server start  http://localhost:4010')
})

