// function sayHello (name) {
//     return console.log(`Hi, my name is ${name}`)
// }
// sayHello("Ivan")

// let sayHello1 = function (name) {
//     return console.log(`Hi, my name is ${name}`)
// }
// sayHello1("Petro")

// let sayHello2 = name => console.log(`Hi, my name is ${name}`)
// sayHello("Pavlo")


// let sayHello3 = () => console.log("Hello1")
// sayHello3()


// let sayHello4 = (a, b) => console.log(`Hello ${a} ${b}`)
// sayHello4("Ivan", "Ivanov")


// let suma = (a, b) => {
//     let c = a + b
//     return console.log(c)
// }
// suma(10, 5)

// function getId (id) {
//     return document.getElementById(id)
// }

// let getId = id => document.getElementById(id)
// getId("h1").style.color = "red"

// let sum = new Function("a, b", "return a+b")
// let res = sum(10, 5)
// console.log(res)


// let age = +prompt("Write your age")

// if (age>= 18){
//     function myAge(){
//         console.log("Welcome")
//     }
// } else {
//     function myAge(){
//         console.log("You can't enter")
//     }
// }
// myAge()


// let age = +prompt("Write your age")
// let myAge;
// if (age >= 18) {
//     myAge = function () {
//         console.log("Welcome")
//     }
// } else {
//     myAge = function () {
//         console.log("You can't enter")
//     }
// }
// myAge()


let getId = id => document.getElementById(id)

// getId("but").onclick = function (event) {
//     // console.log("Click works")
//     // console.log("event", event)
//     getId("box").style.backgroundColor = "red"
//     getId("but").innerHTML = "new button"
//     this.style.width = "100px"
//     this.style.height = "40px"
//     console.log(this)
// }

getId("box").onmouseover = function () {
    this.style.backgroundColor = "black"
    console.log("onmouseover")
}


getId("box").onmouseout = function () {
    this.style.backgroundColor = ""
    console.log("onmouseout")
}

// // let count = 0
// getId("box").onmousemove = function () {
//     // count++
//     // console.log(count)
//     console.log("onmousemove")
// }


// getId("box").onmousedown = function () {
//     this.style.transform = "scale(1.2)"
// }

// getId("box").onmouseup = function () {
//     this.style.transform = "scale(1)"
// }

// getId("text").onfocus = function () {
//     getId("style").style.background = "yellow"
// }


// getId("text").onblur = function () {
//     getId("style").style.background = ""
// }

// getId("text").onchange = function () {
//     getId("style").style.background = "red"
// }


// getId("but").onclick = function () {
//     document.body.style.background = "gray"
//     alert("click 1")
// }

// getId("but").onclick = function () {
//     document.body.style.fontSize = "30px"
//     alert("click 2")
// }

// function f1() {
//     document.body.style.background = "grey"
//     alert("click 1")
// }

// function f2() {
//     document.body.style.fontSize = "30px"
//     alert("click 2")
// }

// getId("but").addEventListener("click", f1)
// getId("but").addEventListener("click", f2)

// window.addEventListener("click", function(event){
//     console.log(event.target)
// })
































