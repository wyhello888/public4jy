function add(x,y){
    return x+y;
}

function max(x,y){
    // if(x > y){
    //     return x
    // }else{
    //     return x;
    // }

    return x > y ? x : y;
}

function random(start,end){
    return Math.random()*(end - start) + start;
}

module.exports.add = add;
module.exports.max = max;
module.exports.random = random;
