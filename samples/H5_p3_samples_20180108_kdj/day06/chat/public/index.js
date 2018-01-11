var id;
/*
 * 1、点击发送按钮，获取用户输入的消息
 * 2、把消息发送给服务器
 * 3、接受服务器返回的数据，展示在页面
 * */
$('#send').click(function(){
	var val = $('#input').val();
	//非空校验
	if(val != '' && val != 'undefined'){
		
		$('#input').val('')
		$.get('http://169.254.98.7:4010/send',{msg:val},function(res){
			
			id = res.id;
			 var p = document.createElement('p');
			 p.innerHTML = res.msg;
			 $("#message-window").append(p);
		})
	}
})

/*
 * 通过定时器，让浏览器自动请求服务器，获取最新消息
 * 
 * */
setInterval(function(){
	$.get('http://169.254.98.7:4010/getmsg',function(res){
		
		if( id != res.id ){
		 var p = document.createElement('p');
		 p.innerHTML = res.msg;
		 $("#message-window").append(p);	
		 id = res.id;
		}
	})
},1000)
