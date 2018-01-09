var fs = require('fs');

fs.exists('img',function(err,ex){
    if(err) console.log(err)
    else console.log(ex)
})