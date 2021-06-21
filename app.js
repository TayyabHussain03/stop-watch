var seconds1 = 0
var minutes1 = 0;
var miliseconds1 = 0;

var minutes = document.getElementById('mint')
var seconds = document.getElementById('sec');
var miliseconds = document.getElementById('milisec');

var counter
function time() {
    miliseconds1++
    miliseconds.innerHTML = miliseconds1;
    if (miliseconds1 >= 100) {
        seconds1++
        seconds.innerHTML = seconds1;
        miliseconds1 = 0;
    } else if (seconds1 >= 60) {
        minutes1++
        minutes.innerHTML = minutes1
        seconds1 = 0

    }
}

function start(){
    counter=setInterval(time,10)
    document.getElementById("start").disabled=true;
}
function stop(){
    clearInterval(counter)
    document.getElementById("start").disabled=false;
}

function clearbtn(){
  
    minutes.innerHTML="00:";
    seconds.innerHTML="00:";
    miliseconds.innerHTML="00:";
    clearInterval(counter)
    document.getElementById("start").disabled=false;
}