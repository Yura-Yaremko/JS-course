let getId = id => document.getElementById(id)

getId("box").style.backgroundColor = "purple"
getId("box").style.border = "5px solid yellow"
getId("box").style.borderStyle = "inset"
getId("box").style.color = "black"

getId("box").onmouseover = function () {
    this.style.backgroundColor = "yellow"
    this.style.border = "5px solid green"
    this.style.borderStyle = "inset"
    this.style.color = "blue"
    getId("box").innerHTML = "Do you want to know which?"
}

getId("box").onmouseout = function () {
    this.style.backgroundColor = "purple"
    this.style.border = "5px solid yellow"
    this.style.borderStyle = "inset"
    this.style.color = "black"
    getId("box").innerHTML = "I have a secret!"
}

getId("box").onmousedown = function () {
    this.style.backgroundColor = "black"
    this.style.border = "5px solid yellow"
    this.style.borderStyle = "inset"
    this.style.color = "white"
    getId("box").innerHTML = "But i won't tell you anything"
}

getId("box").onmouseup = function () {
    this.style.backgroundColor = "yellow"
    this.style.border = "5px solid green"
    this.style.borderStyle = "inset"
    this.style.color = "blue"
    getId("box").innerHTML = "Do you want to know which?"
}