let getId = x => document.getElementById(x)
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let timer1 = document.getElementById("timer1")
let minutes = document.getElementById("numbers")
let seconds = 60
// let myInterval = -1

start.addEventListener("click", function () {
    myInterval = setInterval(function () {
        time--
        timer2.innerHTML = time
        if (seconds == 0){
            minutes -= 1
            seconds = 60
        }
    }, 1000)
})


stop.addEventListener("click", function () {
    clearInterval(myInterval)
})

reset.addEventListener("click", function () {
    clearInterval(myInterval)
    title.innerHTML = `00 : 00`
})

number = 25
getId("plus").addEventListener("click", function () {
    getId("numbers").innerHTML = number += 1
})


getId("minus").addEventListener("click", function () {
    getId("numbers").innerHTML = number -= 1
})





