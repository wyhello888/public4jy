(function(){
	
	
	var _PI = 3.14;
	
	function calculateCircle(r){
		return _PI * r*r;
	}
	
	
	function calculteCone(r,h){
		 return calculateCircle(r) * h /3
	}
	
	var util = {
//		calculateCircle:calculateCircle,
		calculteCone: calculteCone
	}
	
	
	window.calculteCone = calculteCone;
	
	
})()
