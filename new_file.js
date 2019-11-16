		var success1 = document.getElementById("success");
		console.log(success1);
		success1.style.display = 'none';
		/*设定的一个随机值*/
		var randomNum = Math.floor(Math.random() * 100 + 1);
		/*1.获取的一个值*/
		/*2.比较两个值*/
		function getInputNum() {
			var Num = document.getElementById("num").value;
			while(true) {
				if(Num > randomNum) {
					alert('猜得大了，失去了一次南极双人游的机会哦');
					break;
				} else if(Num < randomNum) {
					alert('猜得小了，再仔细想想');
					break;
				} else {
					success.style.display = 'block';
					var btn = document.getElementById('btn');
					btn.style.background = 'silver';
					btn.setAttribute("disabled", true);
					alert('恭喜你，中奖了');
					break;

				}
			}
			/*3.清除并退出*/
			document.getElementById("num").value = '';

		}