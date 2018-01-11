var http = require('http');

http.createServer(function(req,res){

    console.log('请求方法：' + req.method)
    console.log('请求url：' + req.url)
    console.log('请求头：' + JSON.stringify(req.headers))
    console.log('httpVersion：' + req.httpVersion)

    res.end('hello')

}).listen(3011,function(){
    console.log('server start。。。。。')
})