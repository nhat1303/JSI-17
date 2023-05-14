let start = document.getElementById("Start-1")
let stop = document.getElementById("Stop-1")
let timer = null
let display = document.getElementById("displaytime1")

let [second,minute,hour]=[0,0,0]
function Stop_Watch(){
    second++
    if ( second == 60){
        minute = 1
    }
    if(
        minute == 60
    ){
        hour=1
    }
    display.innerHTML=  hour + " " + minute + " " + second
}


function watchStart(){
    timer = setInterval(Stop_Watch,1000)
    if ( timer != null){
        clearInterval(Stop_Watch)
    }
}

function watchStop(){
    clearInterval(timer)
    second=0
    minute=0
    hour=0
    display.innerHTML=  hour + " " + minute + " " + second

}

start.addEventListener("click", watchStart)
stop.addEventListener("click", watchStop)