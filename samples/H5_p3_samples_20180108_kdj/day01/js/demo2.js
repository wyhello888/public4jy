require.config({
	
	paths:{
		"text":"text",
		"css":"css",
		"home":"../home/home",
		"image":"image",
		"json":"json",
		"list":"../list/list"
	}
})


require(['home',"list"],function(home,list){
	
	
	
	var insertBtn = document.getElementById('insertBtn');
	
	insertBtn.onclick = function(){
		
		home.insert();	
		
	}
	
	
	var showBtn = document.getElementById('showBtn');
	
	showBtn.onclick = function(){
		
		list.showList()
	}
	
	
})
