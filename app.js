var a = document.getElementById("setHours");
var b = document.getElementById("setMins");
var c = document.getElementById("setSec");
var d = "";

var hours = document.getElementById("hours");
var mins = document.getElementById("min");
var seconds = document.getElementById("sec");
var interval;
console.log(setHours);


function setT() {
    
      hours.innerHTML = a.value;
     mins.innerHTML =  b.value ;
     seconds.innerHTML = c.value;
     document.getElementById('getData').className='hidden';
     document.getElementById('time').className='after-get'
   
}


function time() {
    c.value--
    seconds.innerHTML = c.value;

    if (c.value == 0) {
        b.value--;
        mins.innerHTML = b.value;
        c.value = 60;
    } else if (b.value == 0) {
        a.value--
        hours.innerHTML = a.value
        b.value = 60;
    }

}




function start() {
    interval = setInterval(time, 1000)
    document.getElementById('play').style.display='none';
    document.getElementById('buttns').style.marginLeft='90px'
}




function pause(){
    clearInterval(interval);
    document.getElementById('play').style.display='';
    document.getElementById('buttns').style.marginLeft=''
    
}

function reset(){
 pause()      
 hours.innerHTML = 0
 mins.innerHTML =  0
seconds.innerHTML = 0
document.getElementById('getData').className='input';
document.getElementById("time").className='hidden'
 a.value = ''
 b.value = ''
 c.value = ''
}