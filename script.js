let ampm= document.getElementById("ampm");
function display(){
    let date = new Date();
    let hour = date.getHours();
    let sec = date.getSeconds()
    document.getElementById("hr").innerHTML=pad(hour);
    document.getElementById("min").innerHTML=pad(date.getMinutes());
    document.getElementById("sec").innerHTML=pad(sec);
    if(hour>12){
        hour-=12;
        ampm.innerHTML="PM";
    }
    
}

function pad(num){
    return num<10?"0"+num:num;
}



setInterval(()=> display(),500);


let start = document.getElementById("start");
let stop1 = document.getElementById("stop1");
let reset = document.getElementById("reset");
 
let hour = 0;
let min = 0;
let sec = 0;
let timer;
start.addEventListener('click',()=>{
    timer = true;
    stopwatch();
})

stop1.addEventListener('click',()=>{
    timer=false;
})

reset.addEventListener('click',()=>{
    timer = false;
    hr=0;
    min=0;
    sec=0;

    document.getElementById('shr').innerHTML="00";
    document.getElementById('smin').innerHTML="00";
    document.getElementById('ssec').innerHTML="00";
})

function stopwatch(){
    if(timer){
        sec++;
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hour ++;
            min=0;
        }
        let hrstr = hour;
        let minstr = min;
        let secstr = sec;

        if(hour<10){
            hrstr = "0"+hrstr;
        }
        if(min<10){
            minstr = "0"+minstr;
        }
        if(sec<10){
            secstr = "0"+secstr;
        }

        document.getElementById('shr').innerHTML=hrstr;
        document.getElementById('smin').innerHTML=minstr;
        document.getElementById('ssec').innerHTML=secstr;
        setTimeout(stopwatch,500);
    }
}






