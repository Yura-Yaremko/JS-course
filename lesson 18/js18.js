// console.log("floor(5.9)",Math.floor(5.9))
// console.log("ceil(5.1)",Math.ceil(5.1))
// console.log("round(5.5)",Math.round(5.5))
// console.log("5.65459.toFixed(2)",5.65459.toFixed(2))

// let r = prompt("write number")
// let rl = Math.PI*r*r
// console.log(Math.floor(rl))

// console.log("pow(2, 3)", Math.pow(2, 3))
// console.log("sqrt(16)", Math.sqrt(16))
// console.log("abs(-16)", Math.abs(-16))
// console.log("max(-16, 4, 0, 2)", Math.max(-16, 4, 0, 2))
// console.log("min(-16, 4, 0, 2)", Math.min(-16, 4, 0, 2))

// console.log("random()", Math.random())

// let rand = Math.round(Math.random() * 10)
// console.log("random = ", rand)

// let arr = []
// let item1 = "Text0"
// let item2 = "Text1"
// let item3 = "Text2"
// let item4 = "Text3"
// let item5 = "Text4"
// arr.push(item1, item2, item3, item4, item5)
// console.log(arr)

// let rand = Math.round(Math.random() * 5)
// if (rand > 0) {
//     rand--
// }
// console.log(rand)
// document.write(arr[rand])

// let arr = [10, 20, 30, 40, 50]

// let rand = Math.floor(Math.random()*arr.length)
// console.log(arr[rand])


// let minValue = +prompt("Write minimal value of random number")
// let maxValue = +prompt("Write maximum value of random number")
// let arr = []


// function randomizer(min,max) {

//     for (; min < max; min++) {
//         arr.push(min)
//     }
//     let randomValue = Math.floor(Math.random()*arr.length)
//     console.log(randomValue)
//     console.log(arr[randomValue])
// }

// randomizer(minValue,maxValue)
// console.log(arr)


// function randomizer(min, max) {
//     let random = min + Math.random()*(max-min)
//     rand = Math.round(random)
//     console.log(rand)
// }
// randomizer(10, 20)


// function decimal(num) {
//     let dec = ((num + "").indexOf(".")) + 1
//     let findDecCount = (num + "").slice(dec).length
//     num = (num - Math.floor(num)).toFixed(findDecCount)
//     console.log(findDecCount)
//     console.log(dec)
//     console.log(num)
// }

// decimal(777.57)





// let getId = x => document.getElementById(x)

// getId("button").addEventListener("click", () => {
//     let random1 = Math.floor(Math.random() * 255)
//     let random2 = Math.floor(Math.random() * 255)
//     let random3 = Math.floor(Math.random() * 255)

//     document.body.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`
//     console.log(random1)
//     console.log(random2)
//     console.log(random3)
// })

let btnRAnd = document.querySelector("#button")

btnRAnd.addEventListener("click", () => {
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    let a = Math.random().toFixed(2)
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
})



























