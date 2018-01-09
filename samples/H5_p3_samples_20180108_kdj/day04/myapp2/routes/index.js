var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',clazz: '1709A'});
});

router.get('/pic',function(req,res){
  res.render('upload',{img:''})
})

var img;
router.post('/upload',function(req,res){
	
	  var filename = req.files[0].filename;
	  if(filename){   
	     var src = 'http://localhost:3000/upload/'+filename;	
	     res.render('upload',{img: src})
	  }else{
	  	res.render('upload',{img: ''})
	  }
       
	  
})



router.post('/add',function(req,res){
      var name = req.body.name;
      res.send('data:' + name)
})


router.get('/add',function(req,res){
      var name = req.query.name;
      res.send('data:' + name)
})

module.exports = router;
