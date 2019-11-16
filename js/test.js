//1.生成1到100之间的随机
var random = Math.floor(Math.random() * 100 + 1);
console.log(random);
var success = document.getElementById("success");
success.style.display = "none";
//2.获取我们在输入框中输入的值
function　getInputNum(){
	var inputNum = document.getElementById("getNum").value;
	
	while(true){
		if(inputNum > random){
			alert("输入太大了,再小一点吧!");
			break;
		}else if(inputNum < random){
			alert("输入太小了,再大一点吧!");
			break;
		}else{
			success.style.display = "block";
			var btn = document.getElementById("btn");
			btn.style.background = "silver";
			btn.setAttribute("disabled",true);
			break;
		}
	}
	document.getElementById("getNum").value='';
}
	
