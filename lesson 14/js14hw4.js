let getId = x => document.getElementById(x)

// getId("cenzore").addEventListener("click", () => {

//     let text = document.getElementById("area").value
//     let res = text.split(" ")
//     for (i = 0; i < res.length; i++) {
//         if (res[i] == "слово1") {
//             res[i] = "******"
//         } else if (res[i] == "слово2") {
//             res[i] = "******"
//         } else if (res[i] == "слово3") {
//             res[i] = "******"
//         }
//     }
//     let res2 = res.join(" ")
//     console.log(res2)
//     document.getElementById("area").value = res2
// })

getId("add").addEventListener("click", () => {
    let newWord = getId("forbidenWord").value
    console.log(newWord)
    let boxForbidenWord = getId("words")
    console.log(boxForbidenWord)
    let span = document.createElement("span")
    console.log(span)
    span.setAttribute("class", "word")
    span.innerHTML = newWord
    boxForbidenWord.appendChild(span)

})


let word1 = getId("words").childNodes
console.log(word1)
getId("cenzore").addEventListener("click", () => {

    let text = document.getElementById("area").value
    let res = text.split(" ")
    for (i = 0; i < res.length; i++) {
        for (n = 0; n < forbidenWords.length; n++) {
            if (res[i] == forbidenWords[n].value) {
                res[i] = "******"
            }
        }
    }
    let res2 = res.join(" ")
    console.log(res2)
    document.getElementById("area").value = res2
})

































































