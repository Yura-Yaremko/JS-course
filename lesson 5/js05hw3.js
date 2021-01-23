

let num = prompt("Input your number")
var numSplit = num.split("")
console.log(numSplit)
let sum = 0
for (let i = 0; i < numSplit.length; i++) {
    // var numSplitInt = parseInt(numSplit)
    console.log( numSplit[i])
    sum += parseInt(numSplit[i])
}

console.log(sum)
