let f1 = document.forms["f1"]
// let f1 = document.forms[0]
// let f1 = document.forms.f1
// console.log(f1)
// console.log(f1.name)
// console.log(f1.elements)
// console.log(f1[2])
// console.log(f1.tb)

f1.tb.addEventListener("click", () => {
    let tt = f1.tt.value
    let tp = f1.tp.value
    console.log(tt, tp)
    // f1.tt.value = ""
    // f1.tp.value = ""
    f1.reset()
    f1.tt.placeholder = tt
})

// let f2 = document.forms["f2"]

// for (let i = 0; i < f2.elements.length; i++) {
//     f2.elements[i].addEventListener("click", function () {
//         document.body.style.background = this.value
//         // document.body.style.background = f2.elements[i].value
//     })

// }

// let f3 = document.forms["f3"]

// f3.checkbox.addEventListener("click", function () {
//     if (f3.checkbox.checked) {
//         f3.area.style.display = "block"
//     } else {
//         f3.area.style.display = "none"
//     }
// })

// let f4 = document.forms["f4"]

// f4.colors.addEventListener("change", function () {
//     for (i = 0; i < f4.colors.options.length; i++) {
//         if (f4.colors.options[i].selected)
//             document.body.style.background = this.value
// document.body.style.background = f4.colors.options[i].value
//     }
// })

/*
    Властивості форми
    .name
    .elements
*/
/*
    Властивості елементів
    .name
    .length
    .value
    .checked(radio | checkbox)
    .selected(select)
    .iptions(only select)
    .defaultValue
*/


let f5 = document.forms["f5"]

f5.change.addEventListener("click", function () {
    if (this.type == "button") {
        this.type = "checkbox"
    } else {
        this.type = "button"
        this.checked = false
    }
})




















