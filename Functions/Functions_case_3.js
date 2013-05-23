//gets average and max value from 3 random numbers
		var y = Math.random()*5;
		var x = Math.random()*5;
		var z = Math.random()*5;
		var midValue;
		var maxValue; 
		function compareFirst() {
  
			if(x>y){
				midValue = x;
			}else{
				midValue = y;
			}

		console.log(x);
		console.log(y);
		console.log(z);
		console.log("Промежуточное значение равно:" + midValue);
		}
		
		function compareSecond() {
			if(midValue>z){
				midValue=maxValue;
			}else{
				z = maxValue;
			}
			}
		compareFirst();
		compareSecond();
		console.log("Максимальное значение равно:" + maxValue);