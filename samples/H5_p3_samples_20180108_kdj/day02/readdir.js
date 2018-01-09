var fs = require('fs');

fs.readdir('img',function(err,files){
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(files)
    }
})