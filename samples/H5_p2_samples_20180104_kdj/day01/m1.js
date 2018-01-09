/*
 
 * 
 * author: Davie kong 
 * email:iscooleye@163.com
 * 使用立即执行函数 封装模块
 * 
 * */


var util = (function(){
	
	
	
	//函数名前的 _ 下划线，表示 私有变量， 变量名开头的下划线是一种约定 
	var _count = 0;
	var _width = 100;
	
	function increase(){
		return _count + 1;
	}
	
	function decrease(){
		return _count--;
	}
	
	function _calculate(){
		return _width * _width;
	}
	
	function showResult(){
		return _calculate()
	}
	
//	return increase;

	// public 共有的 
	return{
		increase: increase,
		decrease: decrease,
		showResult: showResult
	}
	
	
	
})()

//console.log(util)

console.log(util.increase(),util.decrease())

console.log(util.showResult())


//jQuery 源码分析
(function(win){
	
	
	
	var jQuery = function(){
		
	}
	
	var $ = jQuery;
	
//	return  jQuery;
	
	win.jQuery = jQuery;
	
})(window)


