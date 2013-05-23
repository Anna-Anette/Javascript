//two ways to get even numbers 


var a = [1,2,5,6,7,3];


function getSummEvenOdd(a) {
	var summ = 0;
	for(var i = 0;i<a.length; i +=2){
		summ = summ+a[i];
	}
	return summ;

}

console.log(getSummEvenOdd(a));

function getSummModule(a) {
	var summ = 0;
	for(var i = 0;i<a.length; i++){
		if(i%2 == 0){
			summ = summ+a[i];
		}
	}
	return summ;
}

console.log(getSummModule(a));

//tests 
var a = [1,2,5];
console.log(getSummEvenOdd(a) == 6);
console.log(getSummModule(a) == 6);