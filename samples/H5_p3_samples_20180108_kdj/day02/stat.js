var fs = require('fs');

fs.stat('img',function(err,stats){
    if(err){
        console.log(err)
    }else{
        console.log(stats)
    }
})