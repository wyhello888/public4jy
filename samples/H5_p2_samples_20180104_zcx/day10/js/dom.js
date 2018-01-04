console.log("hello");

var text1 = document.getElementById("text1");
var btn1  = document.getElementById("btn1");
var tbody = document.getElementsByTagName("tbody")[0];
	
//console.log(btn1);
//////////////////////////////////////////////////////////
//选中多选框，该行变色，
//添加删除选中的按钮，选中的一行可以删除
var btn3 = document.getElementById("btn3");
btn3.onclick = function()
{
	//获取所有的后添加的checkbox
	var checks = document.getElementsByClassName("c1");
	for(var i =0;i<checks.length;i++)
	{
		if(checks[i].checked)
		{
			checks[i].parentNode.parentNode.remove();//删除一行
			i--;
		}
	}
}

//////////////////////////////////////////////////////////
//全部删除
var btn2 = document.getElementById("btn2");
btn2.onclick = function()
{
	var trs = document.getElementsByTagName("tr");
	for(var i=1;i<trs.length;i++)
	{
		trs[i].remove();
		i--;
	}
}
//////////////////////////////////////////////////////////

//添加信息
btn1.onclick = function()
{
//	console.log(text1.nodeType);
//	console.log(btn1.nodeType);
	var str = text1.value;
//	console.log(str);
	
	var tr = document.createElement("tr");
	//console.log(tr.nodeType);
	console.log(tbody.nodeType);
	tbody.appendChild(tr);
	
	//创建3个td
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	
	//td1的内容
	var ch = document.createElement("input");
	ch.type = "checkbox";
	ch.className = "c1";
	td1.appendChild(ch);
	//给后添加的的checkbox添加事件
	ch.onclick = function()
	{
		if(this.checked)
		{
			
		this.parentNode.parentNode.style.backgroundColor = "blue";	
		}
		else
		{
			this.parentNode.parentNode.style.backgroundColor = "white";	
		}
	}	

	
	
	//td2的内容
	td2.innerHTML = text1.value;
	
	//td3的内容
	var btn = document.createElement("input");
	
	btn.type ="button";	
	
	btn.value = "删除";

	td3.appendChild(btn);
	
// 删除按钮的点击事件
	btn.onclick = function()
	{
		this.parentNode.parentNode.remove();
	}	
}
///////////////////////////////////////////////////////////////
//全选事件
//获取静态页面的checkbox
var ch = document.getElementById("ch");


ch.onclick = function()
{
	//获取所有，后添加的checkbox 
	var checks = document.getElementsByClassName("c1");
	console.log(checks.length)
	for(var i =0;i<checks.length;i++)
	{
		checks[i].checked = this.checked;
	}
	if(this.checked)
	{
		for(var i =0;i<checks.length;i++)
		{
			checks[i].parentNode.parentNode.style.background = "blue";
		}
		//console.log("if");
	}
	else
	{
		for(var i =0;i<checks.length;i++)
		{
			checks[i].parentNode.parentNode.style.background = "white";
		}	
		//console.log("else");
	}
}
