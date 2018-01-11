// var module1 = require('./module1.js');
//
// var ad = module1.adds;
//
// var  r = ad(2,3);
//
// console.log(r)
//
// var re = module1.min(10,2)
// console.log(re)
//
//
// var module2 = require('./module2.js');
//
// console.log(module2)
//
// module2.fzz()
//
// var Person = require('./module3');
//
// var p  = new Person('迪丽热巴',22);
// console.log(p.name + p.age)


var m = require('./module3.js')

var P = m.Person;

var p = new P('111',111);
console.log(p.name,p.age)
