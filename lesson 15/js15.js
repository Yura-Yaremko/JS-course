// let arr1 = []
// let arr2 = new Array()
// let arr3 = [10, 20, "Ivan", true]
// let arr4 = new Array(10, 20, "Ivan", true)
// console.log(arr3)
// console.table(arr4)
// let arr5 = [5]
// let arr6 = new Array(5)
// console.log(arr5)
// console.log(arr6)

// let arr7 = [10, 20, [30, 40]]
// console.log(arr7)
// console.log(arr7.length)
// console.log(arr7[0])
// console.log(arr7[2][1])
// arr7[2] = 30
// console.log(arr7)
// arr7[3] = 40
// console.log(arr7)
// arr7[10] = 50
// console.log(arr7)
// arr7.length = 3
// console.log(arr7)
// arr7.length = 10
// console.log(arr7)


// let arrNumber = [10, 20, 30, 40, 50]

// for (i = 0; i < arrNumber.length; i++) {
//     arrNumber[i] += 5
// }

// console.log(arrNumber)


// let count = +prompt("Write how much numbers in array you want.")
// let arr1 = []
// let arr2 = []
// let arrSum = []

// for (i= 0; i < count; i++){
//     let numbers1Array = +prompt("Write your number for 1 array.")
//     arr1.push(numbers1Array)
//     let numbers2Array = +prompt("write your number for 2 array.")
//     arr2.push(numbers2Array)
//     let sum = numbers1Array + numbers2Array
//     arrSum.push(sum)
// }

// console.log(arr1)
// console.log(arr2)
// console.log(arrSum)


// let a = []
// let b = []
// let c = []
// let length = +prompt("Write length for array")
// for (let i = 0; i < length; i++){
//     a[i] = +prompt(`Write ${i}/${length-1} arr1`)
//     b[i] = +prompt(`Write ${i}/${length-1} arr2`)
//     c[i] = a[i] + b[i]
// }
// console.log(a, b, c)


// let fruits = ["orange", "banana", "apple"]
// let veggies = ["potato", "tomato", "onion"]
// let salat = fruits.concat(veggies)
// console.log(salat)
// salat.sort()
// console.log(salat)
// salat.reverse()
// console.log(salat)
// let salatStr = salat.join(" ")
// console.log(salatStr)
// let shift = salat.shift()
// console.log(shift)
// console.log(salat)
// let unshift = salat.unshift("garlic")
// console.log(unshift)
// console.log(salat)
// let pop = salat.pop()
// console.log(pop)
// console.log(salat)
// let push = salat.push("cucumber", "milk")
// console.log(push)
// console.log(salat)
// let splice = salat.splice(3, 1)
// let splice = salat.splice(3, 2)
// let splice = salat.splice(3, 2, "olives", "wine")
// let splice = salat.splice(3, 0, "olives", "wine")
// let splice = salat.splice(-2, 0, "olives", "wine")

// console.log(splice)
// console.log(salat)
// salat.sort()
// console.log(salat)
// let slice = salat.slice(2)
// let slice = salat.slice(-4, -2)
// console.log(slice)
// console.log(salat)


let getId = x => document.getElementById(x)

let colors = ["red", "green", "blue", "yellow"]
let bcg = 0
getId("box").addEventListener("mouseover", function () {
    this.style.background = colors[bcg]
    bcg++
    if (bcg == colors.length) {
        bcg = 0
    }
})




















