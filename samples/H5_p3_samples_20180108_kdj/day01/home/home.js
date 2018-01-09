define(["text!../home/home.html","image!img/tx.jpeg","css!../home/home.css"],function(html,img){
	
//	console.log(html)
	
	console.log(img)
	
	function insert(){
		var container = document.getElementById('container');
	
		container.innerHTML = html
		
		
		container.appendChild(img)
	}
	
	return{
		insert: insert
	}
	
})