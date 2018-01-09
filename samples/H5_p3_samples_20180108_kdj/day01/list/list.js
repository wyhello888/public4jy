define(["json!../data/data.json"],function(json){
	
//	console.log(json)
	
	function showList(){
		
		var actors = json.actors;
		
		var ul = document.getElementById('list')
//		for(var i = 0; i < actors.length;i++){
//			
//			var li = document.createElement('li');
//			li.innerHTML = actors[i].name + '---' + actors[i].age
//			
//			ul.appendChild(li)
//			
//		}

		var str = ''
		for(var i = 0; i < actors.length;i++){
				str += "<li> " + actors[i].name + "---" + actors[i].age + " </li>"
		}
		ul.innerHTML = str;
		
	}
	
	return{
		showList : showList
	}
	
	
})