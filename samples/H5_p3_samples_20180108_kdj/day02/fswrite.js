var fs = require('fs');

fs.writeFile('日记.txt','今天天气不错',function(err){
    if(err){
        console.log(err)
    }
})