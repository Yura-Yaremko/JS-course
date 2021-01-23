let getId = x => document.getElementById(x)

// let interval
number = 25
getId("plus").addEventListener("click", function () {
    getId("numbers").innerHTML = number += 1
})


getId("minus").addEventListener("click", function () {
    getId("numbers").innerHTML = number -= 1
})

getId("start").addEventListener("click", function () {
    let minutes = getId("numbers").innerHTML
    let seconds = 60
    getId("timer1").innerHTML = `${minutes}`
    getId("timer2").innerHTML = `00`
    interval = setInterval(function () {
        if (minutes < 10) minutes = "0" + minutes
        if (seconds < 10) seconds = "0" + seconds
        getId("timer1").innerHTML = `${minutes - 1}`
        getId("timer2").innerHTML = `${seconds - 1}`
        seconds -= 1

        if (seconds == 0) {
            seconds = 60
            minutes -= 1
        }


        getId("stop").addEventListener("click", function () {
            clearInterval(interval)
            let new_minutes = getId("timer1").innerHTML
            let new_seconds = getId("timer2").innerHTML

            getId("start").addEventListener("click", function () {
                getId("timer1").innerHTML = new_minutes
                getId("timer2").innerHTML = new_seconds
            })
        })



        getId("reset").addEventListener("click", function () {
            clearInterval(interval)
            getId("timer1").innerHTML = `00`
            getId("timer2").innerHTML = `00`
        })


    }, 1000)
})


// getId("reset").addEventListener("click", function () {
//     clearInterval(interval)
//     getId("timer1").innerHTML = `00`
//     getId("timer2").innerHTML = `00`
// })


// getId("stop").addEventListener("click", function () {
//     clearInterval(interval)
//     let new_minutes = getId("timer1").innerHTML
//     let new_seconds = getId("timer2").innerHTML
//     console.log(new_minutes)
//     console.log(new_seconds)
//     getId("start").addEventListener("click", function () {
//         getId("timer1").innerHTML = new_minutes
//         getId("timer2").innerHTML = new_seconds
//     })
// })































































