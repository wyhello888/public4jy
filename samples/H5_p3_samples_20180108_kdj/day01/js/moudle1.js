define(function(){
	
//	alert('使用require 写的第一个模块！ ')
	
	var _PI = 3.14;
	
	function add(x,y){
		return x + y;
	}
	
	function calculateCircle(r){
		return _PI * r*r;
	}
	
	
	function calculteCone(r,h){
		 return calculateCircle(r) * h /3
	}

	return {
		add: add,
		calculateCircle: calculateCircle,
		calculteCone: calculteCone
	}
	
	
	
	
	
	
})