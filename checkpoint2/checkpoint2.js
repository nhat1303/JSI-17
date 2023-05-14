let start1 = document.getElementById("start1")
let stop1 = document.getElementById("stop1")
let start2 = document.getElementById("start2")
let stop2 = document.getElementById("stop2")
let start3 = document.getElementById("start3")
let stop3 = document.getElementById("stop3")
let start4 = document.getElementById("start4")
let stop4 = document.getElementById("stop4")
let start5 = document.getElementById("start5")
let stop5 = document.getElementById("stop5")
let display1 = document.getElementById("display1")
let display2 = document.getElementById("display2")
let display3 = document.getElementById("display3")
let display4 = document.getElementById("display4")
let display5 = document.getElementById("display5")

let stopall = document.getElementById("stop_all")

let timer1 = null
let timer2 = null
let timer3 = null
let timer4 = null
let timer5 = null



let [ second1 , minute1]= [0,0]
let [ second2 , minute2]= [0,0]
let [ second3 , minute3]= [0,0]
let [ second4 , minute4]= [0,0]
let [ second5 , minute5]= [0,0]

function StopWatch1(){
    second1++
    if ( second1 == 60){
        minute1=1
    }
    display1.innerHTML = minute1 + ":  " + second1

}

function StopWatch2(){
    second2++
    if ( second2 == 60){
        minute2=1
    }
    display2.innerHTML = minute2 + ":  " + second2

}
function StopWatch3(){
    second3++
    if ( second3 == 60){
        minute3=1
    }
    display3.innerHTML = minute3 + ":  " + second3

}
function StopWatch4(){
    second4++
    if ( second4 == 60){
        minute4=1
    }
    display4.innerHTML = minute4 + ":  " + second4

}
function StopWatch5(){
    second5++
    if ( second5 == 60){
        minute5=1
    }
    display5.innerHTML = minute5 + ":  " + second5

}


// START 
function Start1(){
    if ( timer1 != null){
        clearInterval(StopWatch1)


    }  else{
        timer1 = setInterval(StopWatch1,1000)
        display1.innerHTML = minute1 + " :  " + second1
    }

}
function Start2(){
    if ( timer2 != null){
        clearInterval(StopWatch2)


    }  else{
        timer2 = setInterval(StopWatch2,1000)
        display2.innerHTML = minute2 + " :  " + second2
    }

}
function Start3(){
    if ( timer3 != null){
        clearInterval(StopWatch3)


    }  else{
        timer3 = setInterval(StopWatch3,1000)
        display3.innerHTML = minute3 + " :  " + second3
    }

}
function Start4(){
    if ( timer4 != null){
        clearInterval(StopWatch4)


    }  else{
        timer4 = setInterval(StopWatch4,1000)
        display4.innerHTML = minute4 + " :  " + second4
    }

}
function Start5(){
    if ( timer5 != null){
        clearInterval(StopWatch5)


    }  else{
        timer5 = setInterval(StopWatch5,1000)
        display5.innerHTML = minute5 + " :  " + second5
    }

}


// STOP 
function Stop1(){
    clearInterval(timer1)
    
    second1=0
    minute1 = 0
    display1.innerHTML = minute1 + " :  " + second1

}


function Stop2(){
    clearInterval(timer2)
    
    second2=0
    minute2 = 0
    display2.innerHTML = minute2 + " :  " + second2

}

function Stop3(){
    clearInterval(timer3)
    
    second3=0
    minute3 = 0
    display3.innerHTML = minute3 + " :  " + second3

}

function Stop4(){
    clearInterval(timer4)
    
    second4=0
    minute4 = 0
    display4.innerHTML = minute4 + " :  " + second4

}

function Stop5(){
    clearInterval(timer5)
    
    second5=0
    minute5 = 0
    display5.innerHTML = minute5 + " :  " + second5

}





start1.addEventListener("click", Start1)
stop1.addEventListener("click",Stop1)

start2.addEventListener("click", Start2)
stop2.addEventListener("click",Stop2)

start3.addEventListener("click", Start3)
stop3.addEventListener("click",Stop3)

start4.addEventListener("click", Start4)
stop4.addEventListener("click",Stop4)

start5.addEventListener("click", Start5)
stop5.addEventListener("click",Stop5)

// STOP ALL 

stopall.addEventListener("click", function(){
    Stop1()
    Stop2()
    Stop3()
    Stop4()
    Stop5()
})