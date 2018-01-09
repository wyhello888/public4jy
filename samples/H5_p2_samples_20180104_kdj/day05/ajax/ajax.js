function ajax(method,data,url,callback){			
	//创建 XMLHttpRequest 一个实例
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest;
	}else{
		xhr = new ActiveXObject('Microsoft.XMLHTTP')
	}
	//简历连接  
	xhr.open(method,url,true);
	
	//发送数据
	if(method.toUpperCase() == 'POST'){
		xhr.setRequestHeader("Content-type","application/json");
		xhr.send(JSON.stringify(data));
	}else{
		xhr.send();
	}
	
	//接受返回的数据
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState == 4   && xhr.status == 200){
			var res = xhr.responseText;
			callback(res)
		}
	}
}