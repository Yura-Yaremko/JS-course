// let someText = prompt("Write here some text")
// let text1 = someText.split(" ")
// let res = 0
// for (i = 0; i < text1.length; i++) {
//     if (text1[i] == "html") {
//         res += 1
//     }
// }
// console.log(res)

let someText = prompt("Write here some text")
let text1 = someText.split(" ")
let word = prompt("Write the word the number you want to know.")
let res = 0

for (i = 0; i < text1.length; i++) {
    if (text1[i] == word) {
        res += 1
    }
}
console.log(res)






















































