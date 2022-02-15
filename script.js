var string = "Welcome to Zoom!!";
var array = string.split("");
var timer;
console.log("Imhere");
function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',10); 

}
frameLooper();

$(document).ready(function(){
    var position=('#text').position();
        $('html,body').animate({ scrollTop: position.top}, 500);
    });