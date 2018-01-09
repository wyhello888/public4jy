
//filesystem
var fs = require('fs');

fs.readFile('./日记.txt',function(err,data){

    if(err){
        console.log(err)
    }else{

        var str = data.toString();
        str += '今天周五啦明天不上班.....';
        fs.writeFile('./日记.txt',str,function(err){
            if(err){
                console.log(err)
            }
        })
    }

})