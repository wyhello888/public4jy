var  http = require('http');

//创建 http服务
var server = http.createServer(function(req,res){
        //请求的数据在 req
        //使用res 做服务器响应
        res.end('hello http!')
})

//监听端口号 3001
server.listen(3001,function(){
    console.log('服务器启动了....')
})