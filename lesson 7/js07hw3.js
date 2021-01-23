
let num1 = +prompt("Write your first number")
let num2 = +prompt("Write your second number")
let arr

function outPut(num1, num2) {
    arr = []
    for (; num1 < num2; num1++) {
        if (num1 % 2 != 0 && num1 != 1) {
            arr.push(num1)
        }
    }
    return arr
}

outPut(num1, num2)
alert(arr)