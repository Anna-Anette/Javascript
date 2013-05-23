/**
 * Created with JetBrains WebStorm.
 * User: Kirk
 * Date: 20.01.13
 * Time: 18:44
 * To change this template use File | Settings | File Templates.
 */
function move (a,b) {
    const x1 = 38;
    const y1 = 38;
    const step = 56;
    var x = x1 + (step * (a));
    var y = y1 + (step * (b));
    document.getElementById("figure").style.left = x + "px";
    document.getElementById("figure").style.top = y + "px";
}
function convertSymbolToCoord(a){
    return "ABCDEFGH".indexOf(a);
}
function convertDigitToCoord(a) {
    return '87654321'.indexOf(a);
}
function stringIsCorrect(string) {
    if(string.length != 2){
        alert("Wrong number of coordinates. Expected two.");
        return false;
    }
    if (convertSymbolToCoord(string[0]) == -1){
        alert("First symbol must be a letter between \"A\" and \"H\"! ");
        return false;
    }
    if(convertDigitToCoord(string[1])== -1){
        alert("Second symbol must be  a number between 1 and 8!");
        return false;
    }
    return true;
}
function isBlack (x,y){
	if((x + y- 1)% 2 == 0){
		document.getElementById("figure").style.backgroundColor = "#ffffff";
		document.getElementById("figure").style.color = "#000000";
	}else{
		document.getElementById("figure").style.backgroundColor = "#000000";
		document.getElementById("figure").style.color = "#ffffff";
	}
}
function setUp() {
    move(0,0);
    function handler (){
        var cord_string =  document.getElementById("coords_input").value.toUpperCase();
        if (stringIsCorrect(cord_string)) {
			isBlack(convertSymbolToCoord(cord_string[0]), convertDigitToCoord(cord_string[1]));
            move(convertSymbolToCoord(cord_string[0]), convertDigitToCoord(cord_string[1]));
        }
    }
    document.getElementById("move_button").addEventListener("click",handler);
    document.getElementById("coords_input").addEventListener("keydown",
        function(event){
            if(event.keyCode == 13){
                handler();
            }
        }
    );
	document.getElementById("board").addEventListener("click",
		(function(e){
		    const step = 56;
			const board_border = 24;
			const figure_width = 26;
			document.getElementById("figure").style.top = e.pageY  + "px";
			document.getElementById("figure").style.left = e.pageX + "px";
			var x = Math.floor((e.pageX - (board_border/2))/step);
			var y = Math.floor((e.pageY - (board_border/2))/step);
			if (e.pageX < board_border/2 || e.pageX > (step*8 + board_border/2 ) || e.pageY < board_border/2 || e.pageY > (step* 8 + board_border/2)){
				alert("Out of board!");
				document.getElementById("figure").style.backgroundColor = "red";
				return false;
				}else{
					isBlack(x,y);
					move(x,y);
				}
			})
		);	
	}
setUp();
