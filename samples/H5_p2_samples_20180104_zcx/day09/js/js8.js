console.log("hello");

var text1 = document.getElementById("text1");
var btn1  = document.getElementById("btn1");
var tbody = document.getElementsByTagName("tbody")[0];
//console.log(btn1);

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
	td1.appendChild(ch);
	
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
