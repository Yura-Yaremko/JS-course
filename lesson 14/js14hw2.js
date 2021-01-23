let email = prompt("Write your email")
let res = 0
for (i=0; i < email.length; i++){
    if(email[i] == "@"){
        res += 1
    }
}
// console.log(res)
// console.log(email.length)
// console.log(email)
if (email.indexOf("@") == 0) {
    alert("Your email isn't correct.")
} else if (email.indexOf("@") == email.length - 1) {
    alert("Your email isn't correct.")
} else if (email.indexOf("@") == -1) {
    alert("Your email isn't correct.")
}else if(res > 1){
    alert("Your email isn't correct.")
}else {
    alert("Your email is correct.")
}













































































