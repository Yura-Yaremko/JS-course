
let element = document.getElementsByClassName("check")




document.getElementById("button").addEventListener("click", function () {
    newTask = document.getElementById("text").value
    // alert(newTask)
    ul = document.getElementById("contentList")
    input = document.createElement("input")
    span = document.createElement("span")
    span.innerHTML = newTask
    // alert(span)
    li = document.createElement("li")
    input.classList.add("check")
    input.type = "checkbox"
    li.appendChild(input)
    li.appendChild(span)
    ul.appendChild(li)
    click_delete ()
})

function click_delete () {
    for (i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function () {
            this.nextElementSibling.remove()
            this.remove()
        })
    }

}






































