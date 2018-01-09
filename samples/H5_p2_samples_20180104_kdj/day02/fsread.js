var fs = require('fs');

console.time('f1')
fs.readFile('./bigdata.txt',function(err,data){
    if(err){
        console.error(err)
    }else{
        // console.log(data)
        //111
        // console.log( data.toString())
    }
})

console.timeEnd('f1')

//222
console.log('--------------华丽的分割线-------------')


console.time('f2')
var file = fs.readFileSync('./bigdata.txt');
//33
// console.log(file.toString())

console.timeEnd('f2')