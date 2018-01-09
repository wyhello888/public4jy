var express = require('express');
var router = express.Router();

var fs = require('fs');


router.get('/', function(req, res, next) {
  res.render('student', { title: '学生信息' });
});


router.post('/adduser',function(req,res){

        var username = req.body.username;
        var password = req.body.password;

        fs.readFile('./public/data/student.json',function(err,data){
            if(err){
                console.log(err)
            }else{
                // console.log(data.toString())
                var json = JSON.parse(data.toString());
                json.push({username:username,password:password});
                fs.writeFile('./public/data/student.json',JSON.stringify(json),function(err){
                    if(err) console.log(err)
                    else res.send(username + password)
                })
            }
        })

        
})
module.exports = router;

