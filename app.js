var hour = 0;
var min = 0;
var sec = 0; 
var msec = 0;
var interval;
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec>=100){
        sec++;
        msec=0
        secHeading.innerHTML=sec;
        if(sec>=60){
            min++;
            sec = 0;
            minHeading.innerHTML= min;
            if(min>=60){
                hour++;
                hourHeading.innerHTML = hour;
            }
        }
    }
}
function start(){
 interval = setInterval(timer,10)
}
function pause(){
    clearInterval(interval)
}
function restart(){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    pause();

}