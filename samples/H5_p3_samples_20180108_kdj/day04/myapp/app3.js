var express = require('express');

var app = express();

var home = require('./home');
var find = require('./find');

app.get('/',function(req,res){
    res.send('//////')
})

app.use('/homes',home);
app.use('/find',find);


app.listen(4002,function(){
    console.log('server start...')
});