
// let i = 1
// for (; i <= 3; ) {
//     console.log(`Loop №${i}`)
//     i++
// }

// while(умова циклу) {
//     тіло циклу
// }


// let i = 1
// while(i <= 3) {
//     console.log(`Loop №${i}`)
//     i++
// }

// let count = 0
// let ask = prompt("Write YES")
// while(ask != "yes") {
//     ask = prompt("write YES")
//     count++
// }
// console.log(count)

// let i = 1, j
// while (i <= 10) {
//     document.write(`<h2>Loop outside ${i}</h2>`)
//     j = 1
//     while(j <= 3) {
//         document.write(`<h3>Loop inside ${j}</h3>`)
//         j++
//     }
//     i++
// }


// do{
//     тіло циклу
// } while (умова)

// let i = 4
// do{
//     if ( i <= 3) {
//         console.log(`Loop №${i}`)
//         i ++
//     }
// } while (i <= 3)

                //Task 1

// let repeat = 1
// let counter = 0
// while (repeat <= 5) {

//     let number = +prompt("Input your number")
//     console.log(number)
//     if (number < 0) {
//         counter++
//     } else if (number == null) { //0
//         alert("You have canceled")
//     } else if (number == "") {
//         alert("You have forgotten to input your number")
//     }
//     repeat++

// }
// console.log(counter)


// let count = 0
// let i = 1;
// while (i <= 5) {
//     let num = +prompt("Write number")
//     i++
//     if (num < 0) {
//         count++
//     }
// }
// console.log(count)


                //Task 2

// let repeat = 1
// let count = 0
// let num = +prompt("Input your number")
//  while (num > 0) {
//     num = +prompt("Input your number")
//     repeat++
//     if (num > 0) {
//         count++
//     }
// }
// console.log(count)


                //Task 3
// let repeat = 0
// let num = +prompt("Input your number for numbers of stars")
// let direct = +prompt("Input your number for direction")

// while (repeat != num) {
//     if (direct == 1) {
//         document.write("*")
//     repeat++
//     } else if (direct == 2) {
//         document.write("*<br/>")
//     repeat++
//     }

// }

// let count = prompt("write count")
// let dir = prompt("1 -, 2 |")
// let i = 1 
// while (i <= count) {
//     if (dir == 1) {
//         document.write("* ")
//     } else if (dir == 2) {
//         document.write("*<br/>")
//     }
//     i++
// }


                //Task 4 

// let count = 0
// let test = confirm("Do you want to stop?")
// while (test == false){
//     test = confirm("Do you want to stop?")
//     document.write("* ")
//     count++
// }


// let count = 0
// let test = confirm("Do you want to stop?")
// do{
//     test = confirm("Do you want to stop?")
//     document.write("* ")
//     count++
// } while (test != true)


// for(let i = 1; i <= 10; i++) {
//     if (i == 5){
//         continue
//     }
//     document.write(`<h1>Loop №${i}</h1>`)
// }


// let i = 0
// while(true){
//     if (i == 5){
//         break
//     }
//     i++
//     alert("ff")
// }

                //Task 5

// let i = 1
// let pass = prompt("Input your password")
// let attempts = 5
// while (i <= 5 && pass != "password"){
//     if (pass.toLocaleLowerCase() == "password"){
//         alert("Welcome.")
//     } else  if (attempts == 1){
//         return alert("Sorry, try again later.")

//     }
//     pass = prompt("Input your password again, you have " 
//     + attempts + " attempsts left.")
//     attempts--
//     i++
// }



