function moveArrow() {
    var x = new Date();
    var s = x.getSeconds();
    var m = x.getMinutes();
    var h = x.getHours();

    document.getElementById("seconds_arrow").style.MozTransform = 'rotate(' + (s*6) + 'deg)';
    document.getElementById("minutes_arrow").style.MozTransform = 'rotate(' + (m*6) + 'deg)';
    document.getElementById("hours_arrow").style.MozTransform = 'rotate(' + (h*30) + 'deg)';
}
// moveArrow();



setInterval(
    moveArrow,
    1000
);