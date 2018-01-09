var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { src: ''});
});


router.post('/upload',function(req,res){
	
	var filename = req.files[0].filename;
	
	console.log(filename)

	var src = 'http://localhost:3000/upload/' + filename;
	
	res.render('index',{ src: src })
})
module.exports = router;
