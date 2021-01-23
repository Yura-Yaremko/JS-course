let obj1 = {}
let obj2 = new Object()

// let obj3 = {
//     name: "Ivan",
//     age: 25
// }

// console.log(obj3)
// console.log(obj3.name)
// console.log(obj3["name"])

// obj4 = new Object()
// obj4.name = "Ivan"
// obj4.age = 25
// console.log(obj4)

// let person1 = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     age: 25
// }

// let person2 = [
//     "Petro",
//     "Petriv",
//     32
// ]

// console.log(person1)
// console.log(person2)

// const person = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     age: 25,
//     "date of birth": "01.01.2000"
// }

// person.city = "Lviv"
// person.city = "Kyiv"
// console.log(person)
// console.log(person["date of birth"])


// const person = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     age: 25,
//     "date of birth": {
//         date: "01",
//         month: "01",
//         year: "2000"
//     },
//     sayYear: function() {
//         console.log(`I was born ${this["date of birth"].year}`)
//     }
// }

// console.log(person)
// person.sayYear()

// function Person() {
//     this.firstName = "Ivan"
//     this.lastName = "Ivanov"
//     this.age = 25
// }

// let person = new Person()
// console.log(person)

// let arr = []

// function Person(name, sname, age) {
//     this.firstName = name
//     this.lastName = sname
//     this.age = age
//     this.sayYear = f1
// }

// function f1() {
//     console.log(`I have ${this.age}`)
// }

// let person = new Person("Ivan", "Ivanov", 25)
// console.log(person)
// person.sayYear()
// let person1 = new Person("Petro", "Petriv", 32)
// person1.sayYear()


// arr.push(person)
// let person1 = new Person("Petro", "Petriv", 32)
// console.log(person1)
// arr.push(person1)
// console.log(arr)


// let getId = x => document.getElementById(x)
// let personsArr = []

// getId("ready").addEventListener("click", () => {
//     let name = getId("firstName").value
//     let name2 = getId("lastName").value
//     let day = getId("birthday").value
//     let person = {
//         firstName: name,
//         secondName: name2,
//         birthday: day
//     }
//     console.log(person)
//     personsArr.push(person)
//     console.log(personsArr)
//     getId("firstName").value = ""
//     getId("lastName").value = ""
//     getId("birthday").value = ""
// })

let getId = x => document.getElementById(x)

let arrPerson = []

function Person (name, sname, age) {
    this.firstName = name
    this.lastName = sname
    this.age = age
    this.sayData = function () {
        console.log(`${this.firstName} ${this.lastName} ${this.age}`)
    }
}


getId("add").addEventListener("click", () => {
    let firstName1 = getId("firstName").value
    let lastName1 = getId("lastName").value
    let age1 = getId("age").value
    let newPerson = new Person(firstName1, lastName1, age1)
    arrPerson.push(newPerson)
    console.log(arrPerson)
    newPerson.sayData()
    getId("form").reset()
})



























