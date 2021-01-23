let getId = x => document.getElementById(x)

getId("create").addEventListener("click", () => {
    getId("box").style.display = "block"
})


getId("width").addEventListener("change", () => {
    let width = getId("width").value
    getId("box").style.width = width + "px"
})

getId("height").addEventListener("change", () => {
    let height = getId("height").value
    getId("box").style.height = height + "px"
})


let colors = document.querySelectorAll("#colors>div")
for (i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function () {
        let color = getComputedStyle(this).backgroundColor
        let border = getComputedStyle(this).border
        let outline = getComputedStyle(this).outline
        getId("box").style.backgroundColor = color
        getId("box").style.border = border
        getId("box").style.outline = outline
    })
}
console.log(colors)

let topArr = []
let leftArr = []
getId("coordinates").addEventListener("click", () => {
    let length = +prompt("Write how many times you want to move square.")
    for (i = 0; i < length; i++) {
        topArr[i] = +prompt("Write coordinates by x in %.")
        leftArr[i] = +prompt("Write coordinates by y in %.")
        getId("box").addEventListener("mouseover", () => {

            getId("box").style.top = topArr[i] + "%"
            getId("box").style.left = leftArr[i] + "%"
        })


    }
})
console.log(topArr)
console.log(leftArr)


























































