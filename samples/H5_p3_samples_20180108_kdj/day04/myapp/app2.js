var express = require('express');

var app = express();

//acd  &&  abcd
app.get('/ab?cd',function(req,res){

    res.send('ab?cdab?cdab?cdab?cdab?cdab?cd')

})

app.get('/home',function(req,res){
    res.redirect('/home2')
})

app.get('/home2',function(req,res){
    res.send('home2')
})

app.get('cart',function(){
    
})

app.listen(4001,function(){
    console.log('server start...')
})