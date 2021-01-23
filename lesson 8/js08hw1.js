
let getId = id => document.getElementById(id)


getId("box").style.backgroundColor = "purple"
getId("box").style.border = "3px solid black"


getId("box").onmouseover = function () {
    this.style.backgroundColor = "red"
}

getId("box").onmouseout = function () {
    this.style.backgroundColor = "purple"
}











