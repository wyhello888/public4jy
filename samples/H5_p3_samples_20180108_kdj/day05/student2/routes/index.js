var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/toajax',function(req,res){
  res.render('ajax')
})

router.get('/ajax',function(req,res){

  var name = req.query.name;
  var age = req.query.age;

  res.json({name:name,age:age})
  // console.log('ajax')
})

router.get('/toajax2',function(req,res){
  res.render('ajax2')
})


router.get('/topost',function(req,res){
	res.render('post');
})

router.post('/ajax2',function(req,res){
   var name = req.body.name;
   var age = req.body.age;

    console.log(name,age)
   res.json({name:name,age:age})
})

router.get('/getuser',function(req,res){
	res.sendFile(__dirname + '/test.html')
})

router.get('/json',function(req,res){
	res.json({name:'aaaaaaa'})
})

router.get('/html',function(req,res){
//	res.send('<h1>hello world</h1>')	
res.send('<h1>hello world!!!!</h1>')
})

router.get('/jq',function(req,res){
	res.render('jq')
})

router.get('/jsonp',function(req,res){

//	res.jsonp({name:'abccc',age:10})
	res.send('jsonpcallback({name:"aaaa",age:100})')
})


router.get('/touser',function(req,res){
	res.render('user');
})
router.post('/adduser',function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	
	res.send(username + ',' + password);
})

module.exports = router;
