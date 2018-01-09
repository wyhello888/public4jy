var   util = require('util');


var obj = {
    name: '小王'
}


var r =  util.inspect(obj)
// console.log(r)

console.log( util.inspect(global))