var menu = {
    width:  300,
    height: 200,
    title: "Menu"
};
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}


function multiplyNumeric(a) {
	for(var key in a){
		if(isNumeric(a[key]) == true){
			a[key] *= 2;
		}
	}
	return a;
}
