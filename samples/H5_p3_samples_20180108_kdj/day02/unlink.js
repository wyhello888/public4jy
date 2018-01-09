var fs = require('fs');

fs.unlink('./日记.txt',function(err){
    if(err) console.log(err)
})