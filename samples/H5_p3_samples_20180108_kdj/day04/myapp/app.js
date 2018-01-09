var express = require('express');

var app = express();

// all 路由，每次会先进入all
app.all('/',function(req,res,next){
    // res.send('进入all 路由')
    console.log('allll')
    next();
    // res.send('alll')
})

//路由
app.get('/',function(req,res){
    //使用 send 给浏览器响应
    res.send('Hello world!');
})


app.get('/home',function(req,res){
    res.send('Hello home!');
})

app.get('/index',function(req,res){
    // res.send('Hello index!');
    res.sendFile(__dirname + '/笔记.txt')
    // console.log(__dirname)
    // console.log(__filename)
})

app.get('/html',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

var server = app.listen(4000,function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('服务器启动啦，地址是 http://%s:%s',host,port);
})