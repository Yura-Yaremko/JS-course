
// let list = document.querySelectorAll(".list,p.text")
// console.log(list)
// for (let i = 0; i < list.length; i++) {
//     list[i].style.color = "red"
// }
// let box = document.getElementById("box")
// console.log(box)
// console.log(box.parentElement.previousElementSibling)
// console.log(box.parentElement.nextElementSibling.children.length)

// console.log(box.parentElement.removeChild(box))
// console.log(box.parentElement.nextElementSibling.lastChild)


// function sayHello() {
//     alert("Hello function JS")
// }
// sayHello()

// function sayHello(name) {
//     alert("Hello my name is " + name)
// }
// sayHello("Ivan")
// sayHello("Petro")
// let q = sayHello("Pavlo")
// console.log(q)

// function sayHello(name) {
//     alert("Hello my name is " + name)
// }

// for(let i= 1; i<=3; i++){
// let myName = prompt("Write your name")
// sayHello(myName)
// }


// function sum(a, b) {
//     let n1 = a
//     let n2 = b
//     let c = n1 + n2
//     return c 
// }
// let res = sum(2,3)
// console.log(res)


// function resume(name, sname, age, skills) {
//     let t1 = name
//     let t2 = sname
//     let t3 = age
//     let t4 = skills
//     let text = `My name is ${t1} ${t2}. I ${t3} years old. I know ${t4}`
//     return text
// }
// console.log(resume("Ivan", "Ivanov",25, "HTML5, CSS3, JS"))

// function f1() {
//     let a = 10
//     alert(a)
//     return a
// }
// f1()
// alert(a)


// let a = 20
// function f1() {
//     let a = 10
//     alert(a)
//     return a
// }
// f1()
// alert(a)

// let a = 20
// function f1() {
//     alert(a)
// }
// f1()
// alert(a)

// let a = 20
// function f1() {
//     a = 10
//     alert(a)
// }
// f1()
// alert(a)

// function f2(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// f2(1, 2, 3)

// function f2() {
//     console.log(arguments)
//     console.log(arguments[2])
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }
// f2(1, 2, 3)

// function f2(a,b,...arg) {
//     console.log(arg)
//     console.log(a,b)
//     for (let i = 0; i < arg.length; i++) {
//         console.log(arg[i])
//     }
// }
// f2(1, 2, 3, 4)


function pow(a, b) {
    let result = 1
    let check = false
    if (b != 0) {
        if (b < 0) {
            b = -b
            check = true
        }
        for (let i = 1; i <= b; i++) result *= a
        if (check) {
            result = 1 / result
        }
    }
    return result
}
console.log(pow(5, 3))
console.log(pow(4, 0))
console.log(pow(2, -2))



