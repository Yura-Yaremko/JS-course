let nutCracker = document.getElementById("nutcracker")
let getId = id => document.getElementById(id)
let offSetTop = getId("nutcracker").offsetTop
console.log(offSetTop)
getId("up").addEventListener("click", () => {
    let go = nutCracker.offsetTop 
    if (go > 10) {
        nutCracker.style.top = go - 10 + "px"
        nutCracker.style.transform = "rotate(0deg)"
    }
})

getId("down").addEventListener("click", () => {
    let go = nutCracker.offsetTop 
    if (go < window.innerHeight - 210) {
        nutCracker.style.top = go + 10 + "px"
        nutCracker.style.transform = "rotate(180deg)"
    }
})

getId("left").addEventListener("click", () => {
    let go = nutCracker.offsetLeft
    if (go > 10) {
        nutCracker.style.left = go - 10 + "px"
        nutCracker.style.transform = "rotate(270deg)"
    }
})

getId("right").addEventListener("click", () => {
    let go = nutCracker.offsetLeft 
    if (go < window.innerWidth - 110) {
        nutCracker.style.left = go + 10 + "px"
        nutCracker.style.transform = "rotate(90deg)"
    }
})











































