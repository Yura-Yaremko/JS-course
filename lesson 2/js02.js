// Js operator

/* 
    +, -, /, *, %, **
    <, >, <=, >=
    =, ==, ===, !, !=, !==
    &&, ||
    n =+ => n += i, n-=i, n*=i

    i++, ++i -> i = i + 1
    i--, --i
*/

// if (умова) {
//     тіло умови
// }

// let n = 100;
// if (n < 50) {
//     console.log("yes")
// }


// let myAge = prompt("Write your age");
// if (myAge >= 18) {
//     console.log("Welcome")
// }else if (myAge == null) {
//     console.log("You have canceled the login")
// }else if (myAge < 18) {
//     console.log("Bye - bye")
// }else {
//     console.log("Input the number")
// }

// let zero = prompt("Write your number.");
// if (zero > 0) {
//     console.log("Positive number:", zero);
// } else if (zero < 0) {
//     console.log("Negative number:", zero);
// } else if (zero == "") {
//     console.log("Input the number.")
// } else if (zero == 0) {
//     console.log("0:", zero);
// } else if (zero == null) {
//     console.log("You have canceled the login.");
// } else {
//     console.log("Input your number, not text.")
// }

// let ask1 = prompt("Прізвище першого президента України?");

// if (ask1 == "Кравчук" || ask1 == "кравчук") {
//     console.log("Відповідь вірна")
// }

// let count = 0;
// console.log(count);
// if (ask1.toLowerCase() == "кравчук") {
//     console.log("Відповідь вірна")
//     count++
// }
// console.log(count);

// let life = +prompt("How old are you?");
// if (life >= 0 && life <= 3) {
//     console.log("Baby");
// }else if (life > 3 && life <= 6) {
//     console.log("Kindergarten");
// } else if (life > 6 && life <= 17) {
//     console.log("Student in school");
// } else if (life > 17 && life <= 24) {
//     console.log("Student in university");
// } else if (life > 24 && life <= 65) {
//     console.log("Worker")
// } else if (life > 65 ) {
//     console.log("Retired")
// } else {
//     console.log("Input correct value!!!")
// }

// let life = prompt("How old are you?");
// if (life >= 0 && life <= 3 || "baby" || (life == 100 && life <= 103)) {
//     console.log("Baby");
// }

// let phoneNumber = prompt("Write number");
// if (phoneNumber == "+38") {
//     let pass = prompt ("Write pass")
//     if (pass == 1111) {
//         console.log("Welcome")
//     } else {
//         console.log("Wrong password")
//     }
// }else {
//     console.log("Your number isn't been in data.")
// }

// let n1 = 10;
// let n2 = "10";
// if (n1 === n2) {
//     console.log ("yes")
// } else {
//     console.log("no")
// }

// let ask = confirm("Do you like coffee?")
// if (ask) console.log("Me too")
// else console.log("I like tea too!")

// let age = +prompt("How old are you?")
// let correct = age >= 18 ? "yes" : "no"
// console.log(correct)

// let task = +prompt("Write the number");
// if (task >= 6 && task <= 7) {
//     console.log("Holiday")
// } else if (task >=1 && task < 6) {
//     console.log("Weekday")
// } else if (task > 7 || task < 1) {
//     console.log("!!!SUCH A DAY DOES NOT EXIST!!!")
// }

                //Homework
                //Task 1
// let ask1 = prompt("Прізвище першого президента України?");                
// let counter = 0;
// console.log(counter);
// if (ask1.toLowerCase() == "кравчук") {
//     console.log("Відповідь вірна.")
//     counter++
// } else {
//     console.log("Відповідь невірна.")
// }
// let ask2 = prompt("Число П");
// if (ask2 == 3.14) {
//     console.log("Відповідь вірна.")
//     counter++
// } else {
//     console.log("Відповідь невірна")
// }
// let ask3 = prompt("Столиця України?")
// if (ask3.toLowerCase() == "київ") {
//     console.log("Відповідь вірна.")
//     counter++
// } else {
//     console.log("Відповідь невірна.")
// }
// let ask4 = prompt("Яка кількість днів у тижні?")
// if (ask4 == 7) {
//     console.log("Відповідь вірна.")
//     counter++
// } else {
//     console.log("Відповідь невірна.")
// }
// let ask5 = prompt("У якому році почалась Друга світова війна?")
// if (ask5 == 1939) {
//     console.log("Відповідь вірна.")
//     counter++
// } else {
//     console.log("Відповідь невірна.")
// }
// let ask6 = prompt("Найвища гора світу?")
// if (ask6.toLowerCase() == "еверест" || ask6.toLowerCase() == "джомолунгма"){
//     console.log("Відповідь вірна.")
//     counter++
// } else {
//     console.log("Відповідь невірна.")
// }
// let ask7 = prompt("Який сьогодні рік?")
// if (ask7 == 2020) {
//     console.log("Відповідь вірна.")
//     counter++
// } else {
//     console.log ("Відповідь невірна.")
// }
// let ask8 = prompt("Скільки кольорів в прапорі України?")
// if (ask8 == 2) {
//     console.log("Відповідь вірна.")
//     counter++
// } else {
//     console.log("Відповідь невірна.")
// }
// let ask9 = prompt("Яка дата дня незалежності України?")
// if (ask9.toLowerCase() == "24 серпня" || ask9.toLowerCase() == "24серпня") {
//     console.log("Відповідь вірна.")
//     counter++
// } else {
//     console.log("Відповідь невірна.")
// }
// let ask10 = prompt("В якому віці людина має право водити авто?")
// if (ask10 == 18) {
//     console.log("Відповідь вірна.")
//     counter++
// } else {
//     console.log("Відповідь невірна.")
// }
// console.log(counter)
// if (counter <= 3) {
//     alert("Ваш результат не є досить добрий : " + counter + " правильних відповідей.")
// } else if (counter <= 6) {
//     alert("Ваш результат середнього рівня: " + counter + " правильних відповідей.")
// } else if (counter <= 9) {
//     alert("Ваш результат є хороший: " + counter + " правильних відповідей.")
// } else if (counter == 10) {
//     alert ("Ваш результат відмінний: " + counter + " правильних відповідей.")
// }

                //Task 2

// let auto = prompt("Input your name")
// if (auto == "name") {
//     let pass = prompt("Input your password") 
//     if (pass == "logos") {
//         alert("Welcome")
//     } else if (pass == null) {
//         alert("You have canceled the login.")
//     }else if (pass == "") {
//         alert("Ypu forgot to input your password.")
//     } else {
//         alert("The password isn't correct.")
//     }
// } else if (auto == null) {
//     alert("You have canceled the login.")
// }else if (auto == "") {
//     alert("You forgot to input your name.")
// } else {
//     alert("Sorry, but i don't know who you are.")
// }

                //Task 3

let month = prompt("Write your number here to choose the month.")
if (month == 1) {
    alert("January") 
} else if (month == 2) {
    alert("February")
}else if (month == 3) {
    alert("March")
}else if  (month == 4) {
    alert("April")
}else if (month == 5) {
    alert("May")
} else if (month == 6) {
    alert("June")    
} else if (month == 7) {
    alert("July")
} else if (month == 8) {
    alert("August")
} else if (month == 9) {
    alert("September")
} else if (month == 10) {
    alert("October")
} else if (month == 11) {
    alert("November")   
} else if (month == 12) {
    alert("December")    
} else {
    alert("Choose another number.")
}

