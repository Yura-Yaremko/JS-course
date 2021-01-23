
let a = +prompt("Write your first number")
let b = +prompt("Write your second number")
let c = +prompt("Write your third number")

function biggestNumber(a, b, c) {
    if (a > b && a > c) {
        console.log(a)
        return a
    } else if (b > a && b > c) {
        console.log(b)
        return b
    } else if (c > a && c > b) {
        console.log(c)
        return c
    }else{
        console.log(a)
        return a
    }
}

biggestNumber(a, b, c)