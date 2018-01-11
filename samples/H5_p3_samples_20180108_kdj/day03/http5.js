var  http = require('http');
var  fs = require('fs');
var  querystring = require('querystring')
var  url = require('url')

http.createServer(function(req,res){

        if(req.url != '/favicon.ico'){

            var urlstr = req.url;
            console.log(urlstr)
            var urlobj = url.parse(urlstr);
            console.log(urlobj)   
            var query = urlobj.query;
            var params = querystring.parse(query)
            console.log(params)      
        }

}).listen(3013,function(){
    console.log('server start ...')
})

//url 包括那几部分 协议 + 主机名 + 端口号 + path + query + hash
// var myurl = 'http://wwww.baidu.com:80/abc/bbc?name=aaaa&age=111#home'

// console.log(url.parse(myurl))
