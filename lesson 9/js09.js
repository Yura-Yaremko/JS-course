// let ball = document.querySelector(".ball")

// window.addEventListener("keydown", function (e) {
//     if (e.keyCode == 38) {
//         let go = ball.offsetTop
//         if (go > 10) {
//             ball.style.top = go - 10 + "px"
//         }
//     }
//     if (e.keyCode == 40) {
//         let go = ball.offsetTop
//         if (go < window.innerHeight - 110) {
//             ball.style.top = go + 10 + "px"
//         }
//     }
//     if (e.keyCode == 39) {
//         let go = ball.offsetLeft
//         if (go < window.innerWidth -110) {
//         ball.style.left = go + 10 + "px"
//         }
//     }
//     if (e.keyCode == 37) {
//         let go = ball.offsetLeft
//         if (go > 10) {
//             ball.style.left = go - 10 + "px"
//         }
//     }
// })


let getId = id => document.getElementById(id)
getId('add').addEventListener("click", () => {
    // getId("box").style.backgroundColor = "red"
    // getId("box").setAttribute("class", "scale")
    getId("box").classList.add("yellow", "scale")
})

getId('remove').addEventListener("click", () => {
    // getId("box").removeAttribute("class")
    getId("box").classList.remove("yellow")
})

getId('toggle').addEventListener("click", () => {
    // getId("box").removeAttribute("class")
    // getId("box").classList.toggle("scale")
    // let classN = getId("box").className
    // console.log(classN)
    // getId("box").className += "scale"
    // let getA = getId("box").getAttribute("id")
    // console.log(getA)
    let hasA = getId("box").hasAttribute("class")
    console.log(hasA)
    getId("box").id = "new"
})


















































