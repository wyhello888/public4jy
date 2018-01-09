define(['m1'],function(m){
	
	
	function showResult(){
		
		var str = '';
		
		str = m.calculateCircle(5);
		
		return str;
		
	}
	
	return{
		showResult: showResult
	}
	
	
	
})