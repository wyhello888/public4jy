var express = require('express');

var router = express.Router();

router.get('/',function(req,res){
    res.send('home')
})

router.get('/menu',function(req,res){
    res.send('home 页面的 menu')
})

router.get('/remai',function(req,res){
    res.send('home页面的 热卖')
})

module.exports = router;