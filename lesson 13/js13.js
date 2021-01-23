let getId = x => document.getElementById(x)

getId("editBtn").addEventListener("click", () => {
    let topText = getId("topBlock").innerHTML
    console.log(topText)
    getId("area").value = topText
})

getId("saveBtn").addEventListener("click", () => {
    getId("topBlock").innerHTML = getId("area").value
})

let colors = document.querySelectorAll("#colorBox>div")
// let cssColor = getComputedStyle(redColor[1])
// console.log(cssColor)
// console.log(cssColor.backgroundColor)

for (i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function () {
        let color = getComputedStyle(this).backgroundColor
        document.body.style.backgroundColor = color
    })
}




















































