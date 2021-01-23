let num = +prompt("Input your number")

if (num % 2 != 0 && num != 1) {
    alert("your number: " + num + " prime")
} else if (num == 1) {
    alert("your number: " + num + " isn't prime and complex")
} else {
    alert("Your number: " + num + " complex")
}