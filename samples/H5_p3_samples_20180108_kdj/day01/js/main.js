//alert(' 使用require 加载 main.js 成功！！！')


require.config({
	
	baseUrl:'js',
	
	paths:{
		"m1" : 'moudle1',
		"m2" : "moudle2",
		"jQuery":'jquery-1.12.3',
		"underscore":'underscore'
	},
	shim:{
		"jQuery":{
			"exports" :"$"
		},
		"underscore":{
			"exports": "_"
		}
	}
	
})



//使用模块  
require(['m1','m2',"jQuery","underscore"],function(m,m2,$,_){
	
	console.log(m)
//	var r = m(2,3)
	
//	console.log('result:' + r)

	var r = m.calculteCone(5,5);
	console.log('体积是：' + r)
	
	
	var r2 = m2.showResult();
	console.log('面积是：' + r2)
	
	console.log($)
	
	
	$('#box').animate({width:'200px'},2000,function(){
		console.log('动画完毕')
		
		$(this).hide(3000)
	})
	
	
	
	_.each([1,2,3,4],function(e){
		console.log(e)
	})
	
	var arr = [1,2,3];
	var newarr = _.map(arr,function(ele,index){
		return ele + '￥' + index
	})
	console.log(newarr)
	
	var newarr = _.filter(arr,function(ele){
		return ele %2 == 0
		
	})
	console.log(newarr)
	
	
	var obj = {
		pop:function(){
			
		}
	}

	var isa = _.isArray(obj)
	console.log('是否是数组：' + isa)
	
	
	
})
