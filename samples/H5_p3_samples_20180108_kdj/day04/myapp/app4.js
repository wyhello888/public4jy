var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json   {name:ddd} 
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded  k=v&k2=v2

//get  query请求参数  http://www.baidu.com/?name=aa&age=12
//get  path          http://www.baidu.com/xiaoming/12
app.get('/',function(req,res){

        var name = req.query.name;
        var age = req.query.age;
        // console.log(name,age)
        res.send('参数是'+name+age)
})

app.get('/home/:name/:age/:hobby',function(req,res){
    var name = req.params.name;
    var age = req.params.age;
    var hobby = req.params.hobby;

    res.send('params参数：' + name + ',' + age + ',' + hobby)
})


app.get('/index',function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/user',function(req,res){
    
    console.log('-------------')
    var username = req.body.username;
    var password = req.body.password;
    // console.log(username + password)

    // res.send('hello')
    res.send('表单数据：' + username + ',' + password)
})

app.listen(4010,function(){
    console.log('server start........')
})