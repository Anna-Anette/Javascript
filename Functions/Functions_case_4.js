/*
Create summ via binar; binar creates via comparing between 2 arrays
*/

var firstArray = [1,3,5,7,2];
var secondArray = [2,3,4,7,2];


function getBinIndex(a,b){
var result = 0;
	for(var i = 0; i < a.length; i++){
		if(a[i] != b[i]){
			result += Math.pow(2, i);
		}
	}
	console.log(result);
}


getBinIndex(firstArray,secondArray);



//tests
var a = [1];
var b = [1];
getBinIndex(a,b);
console.log(getBinIndex(a,b) == 0);
