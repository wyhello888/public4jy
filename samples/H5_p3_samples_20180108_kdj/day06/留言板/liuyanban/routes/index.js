var express = require('express');
var router = express.Router();

var  fs = require('fs');

var shortId = require('short-id');

var path = './public/data/user.json';

/* 显示主页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*添加消息*/
router.post('/sendmsg',function(req,res){
	
	var username = req.body.username;
	var msg = req.body.msg;
	
	fs.readFile(path,function(err,data){
		
		if(err){
			console.log(err)
		}else{
			var json = JSON.parse(data.toString());
			
			var id = shortId.generate();
			var user = {id: id, username: username,msg: msg};
			json.push(user);
			fs.writeFile(path,JSON.stringify(json),function(err){
				if(err){
					console.log(err)
				}else{
					
					//把json响应给前端；
					res.json(json)
				}
				
			})
		}
	})
	
})

router.get('/delete',function(req,res){
	var id = req.query.id;
	
	fs.readFile(path,function(err,data){
		if(err){
			console.log(err)
		}else{
			var json = JSON.parse(data.toString());
			for(var i = 0;i < json.length;i++){
				if(id == json[i].id){
					json.splice(i,1);
				}
			}
			
			fs.writeFile(path,JSON.stringify(json),function(err){
				if(err){
					console.log(err)
				}else{
					res.json(json);
				}
				
			})
			
		}
		
	})
})


module.exports = router;
