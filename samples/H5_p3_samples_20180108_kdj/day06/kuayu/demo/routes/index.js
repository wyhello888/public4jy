var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/student',function(req,res){
	res.render('student')
})

router.post('/add',function(req,res){
	res.send('hello world')
})

module.exports = router;
