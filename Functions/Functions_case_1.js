		var y = Math.random()*5;
		var x = Math.random()*5;

		var maxValue; 
		function compare() {
  
			if(x>y){
				maxValue = x;
			}else{
				maxValue = y;
			}

		console.log("Максимальное значение равно:" + maxValue);
		}
		console.log(x);
		console.log(y);
		
compare(x,y);