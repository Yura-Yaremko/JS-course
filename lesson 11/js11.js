// document.getElementById("cbox").addEventListener("click", () => {
//     if(document.getElementById("cbox").checked == true) {
//         document.getElementById("text").style.fontWeight = "bold"
//     } 
//     if (document.getElementById("cbox").checked == false) {
//         document.getElementById("text").style.fontWeight = "normal"
//     }
// })

// let f1 = document.forms["f1"]

// document.getElementById(" ").addEventListener("click", () => {
//     document.getElementById("cbox").checked = "checked"
// })


// document.getElementById("cbox").checked = "checked"


// document.getElementById("check").addEventListener("click", () => {
//     let checkelements =  document.getElementsByClassName("cbox")
//     for (i=0; i < checkelements.length; i++) {
//         checkelements[i].checked = true
//     }
// })

// document.getElementById("uncheck").addEventListener("click", () => {
//     let checkelements =  document.getElementsByClassName("cbox")
//     for (i=0; i < checkelements.length; i++) {
//         checkelements[i].checked = false
//     }
// })

// document.getElementById("radio1").addEventListener("click", () => {
//     alert(document.getElementById("radio1").value)
// })
// document.getElementById("radio2").addEventListener("click", () => {
//     alert(document.getElementById("radio2").value)
// })
// document.getElementById("radio3").addEventListener("click", () => {
//     alert(document.getElementById("radio3").value)
// })


// let radioelements = document.getElementsByClassName("radio")

// for (i = 0; i < radioelements.length; i++) {
//     radioelements[i].addEventListener("click", function () {
//         // alert(this.value)
//         alert(this.nextElementSibling.innerHTML)
//         // console.log(radioelements[i].value)
//     })
// }


// let selectElements = document.getElementsByClassName("select")

// for (i=0; i < selectElements.length; i++) {
//     selectElements[i].addEventListener("change", function (){
// this.innerHTML += "+"
//         alert(this.value)

//     })
// }


// document.getElementById("button").addEventListener("click", () => {
//     alert(selectElements[i])
// })


let selectElements = document.getElementsByClassName("select")

document.getElementById("select").addEventListener("change", function () {
    for (let i = 0; i < selectElements.length; i++) {
        if (selectElements[i].selected){
            selectElements[i].innerHTML += "+"
            selectElements[i].value += "+"
        }
    }
})

document.getElementById("button").addEventListener("click", function () {
    alert(select.value)
})

















