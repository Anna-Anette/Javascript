$(".digit, .operation").click(function () {
    var new_text = $(this).text();
    var old_text = $("#input").val();
    $("#input").val(old_text + new_text);
});

$(".remove").click(function() {
    var str = $("#input").val().slice(0, -1);
    $("#input").val(str);
});

$(".clear").click(function () {
    var text = "";
    $("#input").val(text);
});

function firstDigit (){
    var first = $("#input").val();
    return parseFloat(first);
}
function secondDigit (){
    var second = $("#input").val();
    return parseFloat(second);
}
$("#equals").click(function() {
    var str = $("#input").val();
    /*
    var first = parseFloat(str.slice(0, str.indexOf("/")));
    var second = parseFloat(str.slice(str.indexOf("/") +1, str.lenght));
    */
    $("#input").val(eval(str));
});


function divide(x,y){
    return x / y;
}/*
function multiply(x,y){
    return x * y;
}
function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function equals(x){
    return x;
}
*/

















































/*
 function Calculate($digit){
 this.$DOMElement = $digit;
 }
 Calculate.prototype.divide = function(){

 }
 Calculate.prototype.multiply = function(){};
 Calculate.prototype.subtract = function(){};
 Calculate.prototype.add = function(){};
 Calculate.prototype.remove = function(){};
 Calculate.prototype.equal = function(){};
 Calculate.prototype.clear = function(){};
 Calculate()
*/
