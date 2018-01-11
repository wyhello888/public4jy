var fs = require('fs')

fs.rmdir('./img',function(err){
    if(err) console.log(err)
})