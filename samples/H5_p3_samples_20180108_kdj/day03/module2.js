var foo = function(){
    console.log('this is foo')
}

var fzz = function(){
    console.log('this is fzz')
}

var number = 100;

var bool = true;

var arr = [1,4,5,'hello']

var obj = {
    foo: function(){},
    fzz: fzz,
    number: number,
    bool: bool,
    arr:arr
}

module.exports = obj;