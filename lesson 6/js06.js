// let body = document.body
// console.log(body)
// console.log(body.children)

// let arr = ["elem1", "elem2", "elem3"]
// console.log(arr[1])
// console.log(arr[3])


// for (let i = 0; i < arr.length; i ++) {
//     console.log("arr - ", arr[i])
// }


// console.log(body)
// console.log(body.children)
// console.log(body.children.length)
// console.log(body.children[0])

// let box = document.getElementById("box")
// console.log(box)
// console.log(box.innerHTML)
// box.innerHTML += "<h1>New Box</h1>"
// console.log(box)
// box.style.backgroundColor = "bisque"
// box.style.color = "red"
// box.style.textAlign = "center"


// let link = document.getElementById("link")
// console.log(link)
// link.href = "https://www.google.com/"
// link.innerHTML = "google"
// link.target = "_blank"

// let text = document.getElementsByClassName("text")
// console.log(text[0])
// text[0].style.color = "red"
// text[1].style.color = "red"

// for (let i = 0; i < text.length; i++) {
//     text[i].style.color = "red"
//     text[i].innerHTML = "new text for P"
// }

// let li = document.getElementsByTagName("li")
// console.log(li)


// let qs = document.querySelector(".text")
// console.log(qs)

// let qsAll = document.querySelectorAll("#box, p.text, a[target='_blank'], ul>li")
// console.log(qsAll)


// let h2T = document.createElement("h2")
// let iT = document.createElement("i")
// iT.innerHTML = "Creat tags JS"
// h2T.appendChild(iT)
// document.getElementById("box").appendChild(h2T)




// let list = prompt("ul or ol", "ul")
// let countLi = prompt("How much li you want", "4")

// if (list == "ul") {
//     let ulList = document.createElement("ul")
//     for (let i = 1; i <= countLi; i++) {
//         let liElements = document.createElement("li")
//         ulList.appendChild(liElements)
//         let textLi = prompt("What text you want to see", "hjjhghjj")
//         liElements.innerHTML = textLi
//     }
//     document.body.appendChild(ulList)
// } else if (list == "ol") {
//     let olList = document.createElement("ol")
//     for (let i = 1; i <= countLi; i++) {
//         let liElements = document.createElement("li")
//         olList.appendChild(liElements)
//         let textLi = prompt("What text you want to see", "ghjhghj")
//         liElements.innerHTML = textLi
//     }
//     document.body.appendChild(olList)
// } else {
//     alert("Chose another option")
// }


let list = prompt("write ol or ul")
let countList = prompt("write count LI")
let textList = prompt("write text LI")

let listTag = document.createElement(list)
for (let i = 1; i <= countList; i++) {
    let li = document.createElement("li")
    li.innerHTML = textList
    li.style.color = "red"
    li.style.fontSize = "22px"
    listTag.appendChild(li)
}
document.querySelector(".text").appendChild(listTag)











