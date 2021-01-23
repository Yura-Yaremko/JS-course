// let getId = id => document.getElementById(id)

let form1 = document.forms["form1"]

document.getElementById("moveButton").addEventListener("click", () => {
    let text = move1.value
    console.log(text)
    move2.value = text
    move1.value= ""
})


document.getElementById("plcHld").addEventListener("blur", () => {
    let text1 = plcHld.value
    plcHld.value = ""
    plcHld.placeholder = text1
   
})



































