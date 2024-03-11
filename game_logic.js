
var cnt = 25 * 60, preCnt = null;
const states = [
    "25:00", 
    "05:00",
    "10:00"
];
function click1(){
    reset();
    document.getElementById("clock").innerHTML = states[0];
    cnt = 25 * 60;
}

function click2(){
    reset();
    document.getElementById("clock").innerHTML = states[1];
    cnt = 5 * 60; 
}

function click3(){
    reset();
    document.getElementById("clock").innerHTML = states[2];
    cnt = 10 * 60;
}

function click4(){
    reset();
    var setTime = prompt("How many minutes you want to set ?");
    while(setTime < 0){
        setTime = prompt("How many minutes you want to set ?");
    }
    if(setTime == null) setTime = 0;
    setTime = Math.floor(setTime);
    cnt = setTime * 60;
    if(setTime < 10) setTime = "0" + setTime;
    document.getElementById("clock").innerHTML = (setTime + ":00");
}
var myInterval;

function startCountDown(){

    if(document.getElementById("start").innerText == "start"){
        document.getElementById("start").innerHTML = "pause";
        if(preCnt == null) preCnt = cnt;

        myInterval = setInterval(cal, 1000);
        function cal(){
            if(cnt > 0){
                cnt--;
                var mininutes = Math.floor(cnt/60);
                var seconds = Math.floor(cnt % 60);

                if(mininutes < 10) mininutes = "0" + mininutes;
                if(seconds < 10) seconds = "0" + seconds;
                var timeClock = mininutes + ":" + seconds; 

                document.getElementById("clock").innerHTML = timeClock;
            }
            else{
                clearInterval(myInterval);
            } 
        }
    }
    else{
        document.getElementById("start").innerHTML = "start";
        clearInterval(myInterval);
    }
  }

function reset(){
    clearInterval(myInterval);
    document.getElementById("start").innerHTML = "start";
    cnt = preCnt;
    preCnt = null;
    stateInStart = true;
    if(cnt / 60 == 25) document.getElementById("clock").innerHTML = states[0];
    else if(cnt / 60 == 5) document.getElementById("clock").innerHTML = states[1];
    else if(cnt / 60 == 10) document.getElementById("clock").innerHTML = states[2];
    else{
        let setTime = cnt/60;
        if(setTime < 10) setTime = "0" + setTime;
        document.getElementById("clock").innerHTML = (setTime + ":00");
    }
  } 

  function setBackground(){
    var inputLink = prompt("please input link image you want to change");
    inputLink = " url( " + inputLink + ")" ;
    document.body.style.backgroundImage = inputLink;
  }