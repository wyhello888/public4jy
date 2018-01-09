var http = require('http');

var server = http.createServer(function(req,res){

    var url = req.url;

    switch(url){
        case '/' : res.end('//////'); break;
        case '/home': res.end('home');break;
        case '/index': res.end('index');break;
    }
})

server.listen(3009);