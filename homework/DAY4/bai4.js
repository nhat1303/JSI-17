// CAU 9 
let m = [1,2,3,4,5,6,"hh", "9",80,100]
let newM = m.filter((x) => x%1 ==0);
console.log(newM)

let mSquared = newM.map((x)=> Math.pow(x,2))
console.log(mSquared)

// CAU 10 
let sentence =  " High knowledge, high return "
let arr_sentence = sentence.split(" ")
let newArr_sent = arr_sentence.filter((x) => x!= "")
console.log(newArr_sent)
let lower_arr = newArr_sent.map((x) => x.toLowerCase())
console.log(lower_arr)


// BAITAP 
let [seconds1, minutes1, hours1]= [0,0,0];
let [seconds2, minutes2, hours2]= [0,0,0];
let [seconds3, minutes3, hours3]= [0,0,0];
let [seconds4, minutes4, hours4]= [0,0,0];
let [seconds5, minutes5, hours5]= [0,0,0];

// DISPLAYTIME 
let displayTime1 = document.getElementById("displaytime1")
let displayTime2 = document.getElementById("displaytime2")
let displayTime3 = document.getElementById("displaytime3")
let displayTime4 = document.getElementById("displaytime4")
let displayTime5 = document.getElementById("displaytime5")

// BUTTON 
let start1 = document.getElementById("Start-1")
let stop1 = document.getElementById("Stop-1")

let start2 = document.getElementById("Start-2")
let stop2 = document.getElementById("Stop-2")

let start3 = document.getElementById("Start-3")
let stop3 = document.getElementById("Stop-3")

let start4 = document.getElementById("Start-4")
let stop4 = document.getElementById("Stop-4")

let start5 = document.getElementById("Start-5")
let stop5 = document.getElementById("Stop-5")

let stopall = document.getElementById("stopall")
let startall = document.getElementById("startall")
let pauseall = document.getElementById("pauseall")
let timer1 = null
let timer2 = null
let timer3 = null
let timer4 = null
let timer5 = null

function stopWatch1(){
    seconds1++;
    if ( seconds1 == 60){
        seconds1 = 0
        minutes1++
        if( minutes1 == 60){
            minutes1 = 0
            hours1++
        }
    }
    displayTime1.innerHTML= hours1 + ": " + minutes1 + ": " + seconds1
}

function stopWatch2(){
    seconds2++;
    if ( seconds2 == 60){
        seconds2 = 0
        minutes2++
        if( minutes2 == 60){
            minutes2 = 0
            hours2++
        }
    }
    displayTime2.innerHTML= hours2 + ": " + minutes2 + ": " + seconds2
}

function stopWatch3(){
    seconds3++;
    if ( seconds3 == 60){
        seconds3 = 0
        minutes3++
        if( minutes3 == 60){
            minutes3 = 0
            hours3++
        }
    }
    displayTime3.innerHTML= hours3 + ": " + minutes3 + ": " + seconds3
}

function stopWatch4(){
    seconds4++;
    if ( seconds4 == 60){
        seconds4 = 0
        minutes4++
        if( minutes4 == 60){
            minutes4 = 0
            hours4++
        }
    }
    displayTime4.innerHTML= hours4 + ": " + minutes4 + ": " + seconds4
}

function stopWatch5(){
    seconds5++;
    if ( seconds5 == 60){
        seconds5 = 0
        minutes5++
        if( minutes5 == 60){
            minutes5 = 0
            hours5++
        }
    }
    displayTime5.innerHTML= hours5 + ": " + minutes5 + ": " + seconds5
}

// WATCH START 
function watchStart1(){
    if ( timer1 != null){
        clearInterval(timer1)
    }
    timer1 = setInterval(stopWatch1,1000);   
}

function watchStart2(){
    if ( timer2 != null){
        clearInterval(timer2)
    }
    timer2 = setInterval(stopWatch2,1000);   
}
function watchStart3(){
    if ( timer3 != null){
        clearInterval(timer3)
    }
    timer3 = setInterval(stopWatch3,1000);   
}
function watchStart4(){
    if ( timer4 != null){
        clearInterval(timer4)
    }
    timer4 = setInterval(stopWatch4,1000);   
}
function watchStart5(){
    if ( timer5 != null){
        clearInterval(timer5)
    }
    timer5 = setInterval(stopWatch5,1000);   
}
// WATCH STOP 
function watchStop1(){
    clearInterval(timer1)
    seconds1=0
    minutes1=0
    hours1=0
    displayTime1.innerHTML = "0: 0: 0"
}

function watchStop2(){
    clearInterval(timer2)
    seconds2=0
    minutes2=0
    hours2=0
    displayTime2.innerHTML = "0: 0: 0"
}

function watchStop3(){
    clearInterval(timer3)
    seconds3=0
    minutes3=0
    hours3=0
    displayTime3.innerHTML = "0: 0: 0"
}


function watchStop4(){
    clearInterval(timer4)
    seconds4=0
    minutes4=0
    hours4=0
    displayTime4.innerHTML = "0: 0: 0"
}


function watchStop5(){
    clearInterval(timer5)
    seconds5 = 0
    minutes5 = 0 
    hours5 = 0
    displayTime5.innerHTML = "0: 0: 0"
}

// STOPALL 
function stopAll(){

    watchStop1()
    watchStop2()
    watchStop3()
    watchStop4()
    watchStop5()
}

// STARTALL
function StartAll(){
    watchStart1()
    watchStart2()
    watchStart3()
    watchStart4()
    watchStart5()

}

// PAUSEALL 
function PauseAll(){
    clearInterval(timer1)
    clearInterval(timer2)
    clearInterval(timer3)
    clearInterval(timer4)
    clearInterval(timer5)
}


start1.addEventListener("click", watchStart1)
stop1.addEventListener("click", watchStop1)

start2.addEventListener("click", watchStart2)
stop2.addEventListener("click", watchStop2)

start3.addEventListener("click", watchStart3)
stop3.addEventListener("click", watchStop3)

start4.addEventListener("click", watchStart4)
stop4.addEventListener("click", watchStop4)

start5.addEventListener("click", watchStart5)
stop5.addEventListener("click", watchStop5)

stopall.addEventListener("click",stopAll)
startall.addEventListener("click",StartAll)
pauseall.addEventListener("click", PauseAll)

