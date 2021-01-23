
let checkelements = document.getElementsByClassName("check")

document.getElementById("button").addEventListener("click", () => {
    if (document.getElementById("button").value == "checkbox") {
        for (i = 0; i < checkelements.length; i++) {
            checkelements[i].checked = true
        }
        document.getElementById("button").value = "uncheckbox"
        document.getElementById("button").innerHTML = "Unchecked"
    } else if (document.getElementById("button").value = "uncheckbox") {
        
        for (i = 0; i < checkelements.length; i++) {
            checkelements[i].checked = false
        }
        document.getElementById("button").value = "checkbox"
        document.getElementById("button").innerHTML = "Checkbox"
    }

})

// document.getElementById("button").addEventListener("click", () => {
//     if (document.getElementById("button").value = "uncheckbox") {
//         for (i = 0; i < checkelements.length; i++) {
//             checkelements[i].checked = false
//         }
//         document.getElementById("button").value = "checkbox"
//         document.getElementById("button").innerHTML = "Checkbox"
//     }
// })




























































