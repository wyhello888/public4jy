/*
 *  聊天页先判断用户是否登陆，也就是是否把username保存，如果没有登陆，就跳转到登录页
 * 
 * */

var username = null;
if(!localStorage.username){
	window.location.href = 'http://localhost:4010/login'
}else{
	username = localStorage.username;
}

var id;
/*
 * 1、点击发送按钮，获取用户输入的消息
 * 2、把消息发送给服务器
 * 3、接受服务器返回的数据，展示在页面
 * */
$('#send').click(function(){
	sendMsg();
})

//监听键盘事件，抬起回车键是发送消息
document.addEventListener('keyup',function(e){
	var keycode = e.keyCode;
	if(keycode == 13){
		sendMsg();
	}
})

/*
 * 通过定时器，让浏览器自动请求服务器，获取最新消息
 * 
 * */
setInterval(function(){
	$.get('http://localhost:4010/getmsg',function(res){
		if( id != res.id ){
			insertMsg(res)
		}
	})
},1000)

//封装发送消息函数，点击发送按钮和回车调用
function sendMsg(){
	var val = $('#input').val();
	//非空校验
	if(val != '' && val != 'undefined'){
		$('#input').val('')
		
		$.get('http://localhost:4010/send',{username : username,msg:val},function(res){
			insertMsg(res)
		})
	}
}

function insertMsg(res) {
	 var p = document.createElement('p');
	 p.innerHTML = res.username + ': ' + res.msg + ' - ' + res.time;
	 $("#message-window").append(p);	
	 id = res.id;
//	var div = document.createElement('div');
//	var avatar = document.createElement('div');
//	avatar.innerText = res.username;
}
