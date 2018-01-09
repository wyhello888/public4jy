var fs = require('fs');

fs.readFile('./data.json',function(err,data){

    if(err){
        console.error(err)
    }else{
        var  str = data.toString();
        var json = JSON.parse(str);

        //[]
        var person = {name:'迪丽热巴',age:22,job:'演员'}
        //[{name:'迪丽热巴',age:22,job:'演员'}]
        json.push(person);
        var jsonstr = JSON.stringify(json);
        fs.writeFile('./data.json',jsonstr,function(err){
            if(err) console.log(err)
        })
    }

})