let getId = x => document.getElementById(x)

let id = 1


getId("addUser").addEventListener("click", () => {
    let login = getId("login").value
    let password = getId("password").value
    let email = getId("email").value
    let number = `${id}`
    let arrPerson = []
    let div = document.createElement("div")
    div.setAttribute("id", `new-box${id}`)
    let person = {
        number: number,
        login: login,
        password: password,
        email: email
    }
    arrPerson.push(person)
    // console.log(arrPerson)
    span1 = document.createElement("span")
    span2 = document.createElement("span")
    span2.setAttribute("id", `new-login_${id}`)
    span3 = document.createElement("span")
    span3.setAttribute("id", `new-password_${id}`)
    span4 = document.createElement("span")
    span4.setAttribute("id", `new-email_${id}`)
    span1.innerHTML = person.number
    span2.innerHTML = person.login
    span3.innerHTML = person.password
    span4.innerHTML = person.email
    div.appendChild(span1)
    div.appendChild(span2)
    div.appendChild(span3)
    div.appendChild(span4)

    let editButton = document.createElement("button")
    editButton.innerHTML = "Edit"
    editButton.setAttribute("class", "edit")
    editButton.setAttribute("value", `${id}`)

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    deleteButton.setAttribute("class", "delete")
    deleteButton.setAttribute("value", `${id}`)

    div.appendChild(editButton)
    div.appendChild(deleteButton)

    getId("box2").appendChild(div)


    let deletButtons = document.getElementsByClassName("delete")
    for (i = 0; i < deletButtons.length; i++) {
        deletButtons[i].addEventListener("click", function () {
            getId(`new-box${this.value}`).remove()
        })
    }

    let editButtons = document.getElementsByClassName("edit")
    for (i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener("click", function () {
            // let span_login = getId(`new-login_${this.value}`)
            // content1 = span_login.innerHTML
            // getId("login").value = content1
            getId("login").value = getId(`new-login_${this.value}`).innerHTML

            // let span_password = getId(`new-password_${this.value}`)
            // content2 = span_password.innerHTML
            // getId("password").value = content2
            getId("password").value = getId(`new-password_${this.value}`).innerHTML

            // let span_email = getId(`new-email_${this.value}`)
            // content3 = span_email.innerHTML
            // getId("email").value = content3
            getId("email").value = getId(`new-email_${this.value}`).innerHTML

            let value = `${this.value}`
            console.log(value)

            getId("addUser").addEventListener("click", function () {
                
                let new_content1 = getId("login").value
                // let a = getId(`new-login_${value}`).innerHTML
                getId(`new-login_${value}`).innerHTML = new_content1
                console.log(new_content1)
                // console.log(getId("box2").lastChild)

                // getId("box2").lastChild.remove()
                // getId(`new-box${value}`).remove()
                // getId(`new-box${value}`).nextElementSibling.remove()
            })

            // let value = `${this.value}`
            // console.log(value)

            // getId("login").addEventListener("change", function () {
            //     let new_content1 = getId("login").value
            //     getId(`new-login_${value}`).innerHTML = new_content1
            //     console.log(new_content1)
            // })


            // console.log(span_login)
        })
    }

    id += 1

    getId("box1").reset()
})





























































