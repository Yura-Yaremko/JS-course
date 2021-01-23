// let obj1 = {
//     name: "Ivan", 
//     age: 25
// }

// let obj2 = obj1
// console.log(obj1)
// console.log(obj2)
// obj2.name = "Petro"
// console.log(obj1)
// console.log(obj2)

// let obj1 = {
//     name: "Ivan", 
//     age: 25
// }

// let obj2 = {}
// for (key in obj1) {
//     obj2[key] = obj1[key]
// }

// console.log(obj1)
// console.log(obj2)
// obj2.name = "Petro"
// console.log(obj1)
// console.log(obj2)

// if("city" in obj2) {
//     obj["city"] = "Lviv"
// }   else {
//     obj2["city"] = "Kyiv"
// }
// console.log(obj2)

// let car = {
//     mark: "Audi",
//     country: "Germany",
//     concern: "VW"
// }

// let q7 = {
//     model: "Q7", 
//     price: "120000$",
//     seats: 7
// }

// car.q7 = q7
// console.log(car)
// console.log(q7)


// setTimeout(function () {
//     document.write(`<h2>setTimeout</h2>`)
// }, 2000)

// setInterval(function () {
//     document.write(`<h2>setInterval</h2>`)
// }, 2000)

// let getId = x => document.getElementById(x)

// function f1() {
//     let h2 = document.createElement("h2")
//     h2.innerHTML = "setInterval"
//     getId("box").appendChild(h2)
//     if (getId("box").children.length == 5) {
//         clearInterval(start)
//     }
// }

// let start = setInterval(f1, 2000)

// let d = new Date()
// console.log(d)
// console.log(d.getDay())
// console.log(d.getDate())
// console.log(d.getMonth())
// console.log(d.getYear())
// console.log(d.getFullYear())
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())

// let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 
// 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// console.log(daysInWeek[d.getDay()])



// let d = new Date()

// let getId = x => document.getElementById(x)

// let hours = document.createElement("span")
// let minutes = document.createElement("span")
// let seconds = document.createElement("span")

// hours.innerHTML = `${d.getHours()}:`
// minutes.innerHTML = `${d.getMinutes()}:`
// seconds.innerHTML = `${d.getSeconds()}`

// getId("box").appendChild(hours)
// getId("box").appendChild(minutes)
// getId("box").appendChild(seconds)

// setInterval(function () {
//     let d = new Date()
//     hours.innerHTML = `${d.getHours()}:`
//     minutes.innerHTML = `${d.getMinutes()}:`
//     seconds.innerHTML = `${d.getSeconds()}`
// }, 1000)


let d = new Date()

let getId = x => document.getElementById(x)

setInterval(function () {
    let d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    if (hours < 10) hours = "0" + hours
    if (minutes < 10) minutes = "0" + minutes
    if (seconds < 10) seconds = "0" + seconds
    getId("box").innerHTML = `${hours} : ${minutes} : ${seconds}`
})


























