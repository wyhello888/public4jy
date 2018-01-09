var express = require('express');

var router = express.Router();


router.get('/',function(req,res){
    res.send('find')
})

router.get('/product',function(req,res){
    res.send('find 页面的 商品')
})

router.get('/tiger',function(req,res){
    res.send('find页面的 老虎')
})

module.exports = router;