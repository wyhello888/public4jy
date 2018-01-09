var express = require('express');
var router = express.Router();

var fs = require('fs');

var shortId = require('short-id');

var path = './public/data/student.json';

/**    ----1  渲染注册页--- */
router.get('/', function(req, res, next) {
  res.render('regist', { title: 'Express' });
});

/**    ----2  处理表单提交信息--- */
router.post('/regist', function(req, res, next) {

    var username = req.body.username;
    var password = req.body.password;

    if(username != '' && password != ''){
        fs.readFile(path,function(err,data){

            if(err){
                console.log(err)
            }else{
                var json = JSON.parse(data.toString());
                var id = shortId.generate();
                var user = {id:id,username: username,password : password}
                json.push(user);

                fs.writeFile(path,JSON.stringify(json),function(){
                    //重定向到登录页
                    res.redirect('/student/tologin')
                })
            }

        })
    }
    
  });



/**    ----3  渲染显示登录页面--- */
router.get('/tologin',function(req,res){
    res.render('login')
})


/**    ----4  处理登录页表单信息--- */
  router.post('/login',function(req,res){

        var username = req.body.username;
        var password = req.body.password;

        fs.readFile(path,function(err,data){

            if(err){
                console.log(err)
            }else{
                var json = JSON.parse(data.toString());

                var f = false;
                for(var i = 0;i < json.length;i++){
                    var user = json[i];
                    if(user.username == username && user.password == password){
                        f = true;
                        //登录成功，跳转到成功页面
                        res.redirect('/student/tosuccess')
                    }
                }
                if(!f){
                    res.redirect('/student/tologin');
                }
                
            }

        })


  })

 /**    ----5  显示成功页面--- */ 
router.get('/tosuccess',function(req,res){
    res.render('success')
})

router.get('/todetail',function(){
	res.render('detail')
})

  

module.exports = router;
