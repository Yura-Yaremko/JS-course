

// let numbers = +prompt("How much numbers in geometric sequence you want")
// let denominator = +prompt("Which denominator you want")
// let element
// let summOfAll = 0

// function suma(numbers, denominator) {
//     for (i = 1; i <= numbers; i++){
//         element = i * denominator
//         summOfAll += element
//     }
//     return summOfAll
// }
// suma(numbers, denominator)
// console.log(element)
// console.log(summOfAll)


let numbers = +prompt("How much numbers in geometric sequence you want")
let denominator = +prompt("Which denominator you want")
let summOfAll 

function suma(numbers, denominator) {
    summOfAll = 1 * ((1 - (Math.pow(denominator, numbers))) / (1 - denominator))
    return summOfAll
}
suma(numbers, denominator)
console.log(summOfAll)


