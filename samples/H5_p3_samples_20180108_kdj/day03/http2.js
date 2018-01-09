var http = require('http');

var server = http.createServer();

//监听请求事件  request
server.on('request',function(req,res){
    // res.end('hello http')
    res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"})
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
    res.write('<h1>hello http1</h1>')
    res.write('<h1>hello 周一</h1>')
    res.write('<h1>hello http2</h1>')
    res.end('<h1>hello http</h1>')
})

// server.listen(3010,function(){
//     console.log('server start....')
// })
server.listen(3010);
server.on('listening',function(){
    console.log('server start。。。。。')
})