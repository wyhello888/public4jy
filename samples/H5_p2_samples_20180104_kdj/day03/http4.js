var http = require('http');
var querystring = require('querystring')
var fs = require('fs');

http.createServer(function(req,res){

        var method = req.method;
        var url = req.url;
        var headers = JSON.stringify(req.headers)
        // console.log(method,url,headers)
        // 监听data事件，获取表单提交的数据，在数据发送完成后触发
        req.on('data',function(data){
            var params = data.toString();
            //params   name=ddd&age=222
            //使用 querystring  把字符串转成对象
            //k1=v1&k2=v2
            var user = querystring.parse(params);
            console.log('表单提交的数据：',user)

            fs.readFile('./user.json',function(err,data){
                if(err){
                    console.log(err)
                }else{
                    var arr = data.toString();
                    arr = JSON.parse(arr);
                    arr.push(user);
                    var str = JSON.stringify(arr);
                    fs.writeFile('./user.json',str,function(er){
                        if(er)console.log(er)
                    })
                }
            })
        })


}).listen(3012,function(){
    console.log('server start....')
})
