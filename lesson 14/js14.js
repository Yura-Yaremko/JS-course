// let str1 = "Hello"

// console.log(str1)
// console.log("Hello.length =", str1.length)
// console.log("Hello.charAt(1) =", str1.charAt(1))
// console.log("Hello.toUpperCase() =", str1.toUpperCase())
// console.log("Hello.toLowerCase() =", str1.toLowerCase())

// let myName = prompt("Write your name")
// let res = myName.charAt(0).toUpperCase()
// for (i = 1; i < myName.length; i++) {
//     res += myName.charAt(i).toLowerCase()
// }
// console.log(res)

// console.log("Hello world".indexOf("world"))
// console.log("Hello world".indexOf("l", 5))
// console.log("Hello world".indexOf("q"))

// let str2 = "Hello world"
// let res = ""
// let start = 0
// while(true){
//     let pos = str2.indexOf("l", start)
//     if(pos == -1) break
//     res += pos + " "
//     start = pos + 1
// }
// console.log(res)

let str3 = "JavaScript"
console.log(str3)
console.log("JavaScript", str3.substring(4))
console.log("JavaScript", str3.substring(4, 7))
console.log("JavaScript", str3.substring(4, -2))
console.log("JavaScript", str3.substring(4, 0))
console.log("JavaScript", str3.substring(0, 4))
console.log("substr")
console.log("JavaScript", str3.substr(4))
console.log("JavaScript", str3.substr(4, 2))
console.log("JavaScript", str3.substr(4, -2))
console.log("JavaScript", str3.substr(-4, 2))
console.log("slice")
console.log("JavaScript", str3.slice(4))
console.log("JavaScript", str3.slice(4, 7))
console.log("JavaScript", str3.slice(4, -2))
console.log("JavaScript", str3.slice(-4, 2))


// let myName = prompt("Write your name")
// let res = myName.charAt(0).toUpperCase() + myName.substr(1).toLowerCase()
// let res = myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase()
// let res = myName.charAt(0).toUpperCase() + myName.substring(1).toLowerCase()
// console.log(res)

let str4 = "HTML5 CSS3 JS "
let res = str4.split(" ")
console.log(res)
let res2 = res.join(" ")
console.log(res2)

let inc = res2.includes("CSS3")
console.log(inc)
let rep = res2.repeat(3)
console.log(rep)














