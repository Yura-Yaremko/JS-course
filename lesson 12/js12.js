let getId = id => document.getElementById(id)

getId("edit").addEventListener("click", () => {
    document.getElementById("boxEdit").style.display = "flex"
    document.getElementById("boxStyle").style.display = "none"
    document.getElementById("boxTableAndList").style.display = "none"
    document.getElementById("boxList").style.display = "none"
    document.getElementById("boxTable").style.display = "none"
    let box = document.getElementById("boxText-content")
    let text = box.innerHTML
    document.getElementById("textarea").value = text
    document.getElementById("add").style.display = "inline"
    document.getElementById("save").style.display = "inline"
    document.getElementById("textarea").style.display = "inline"
})

getId("style").addEventListener("click", () => {
    document.getElementById("boxStyle").style.display = "flex"
    document.getElementById("boxEdit").style.display = "none"
    document.getElementById("boxTableAndList").style.display = "none"
    document.getElementById("boxList").style.display = "none"
    document.getElementById("boxTable").style.display = "none"
})

/* STYLE FOR EDIT */

/* BUTTON SAVE */

getId("save").addEventListener("click", function () {
    let content = document.getElementById("textarea").value
    let box = document.getElementById("boxText-content")
    box.innerHTML = content
    document.getElementById("add").style.display = "none"
    document.getElementById("save").style.display = "none"
    document.getElementById("textarea").style.display = "none"
})

/* BUTTON ADD */

getId("add").addEventListener("click", function () {
    document.getElementById("boxStyle").style.display = "none"
    document.getElementById("boxEdit").style.display = "none"
    document.getElementById("boxTableAndList").style.display = "flex"
    document.getElementById("boxText").style.display = "none"
    document.getElementById("buttons").style.display = "none"
})

/* TABLE OR LIST */

getId("table(tableOrList)").addEventListener("click", function () {
    if (document.getElementById("table(tableOrList)").checked == true) {
        document.getElementById("boxTableAndList").style.display = "none"
        document.getElementById("boxTable").style.display = "flex"
    }
})

getId("list(tableOrList)").addEventListener("click", function () {
    if (document.getElementById("list(tableOrList)").checked == true) {
        document.getElementById("boxTableAndList").style.display = "none"
        document.getElementById("boxList").style.display = "flex"
    }
})

// getId("list(tableBox)").addEventListener("click", function () {
//     if (document.getElementById("list(tableBox)").checked == true) {
//         document.getElementById("boxTable").style.display = "none"
//         document.getElementById("boxList").style.display = "flex"
//     }
// })

// getId("table(tableBox)").addEventListener("click", function () {
//     if (document.getElementById("table(tableBox)").checked == true) {
//         document.getElementById("boxTable").style.display = "flex"
//         document.getElementById("boxList").style.display = "none"
//     }
// })

// getId("table(list)").addEventListener("click", function () {
//     if (document.getElementById("table(list)").checked == true) {
//         document.getElementById("boxTable").style.display = "flex"
//         document.getElementById("boxList").style.display = "none"
//     }
// })

// getId("list(list)").addEventListener("click", function () {
//     if (document.getElementById("list(list)").checked == true) {
//         document.getElementById("boxTable").style.display = "none"
//         document.getElementById("boxList").style.display = "flex"
//     }
// })

/* SIZE OF TEXT */

let radioFontSizeElements = document.getElementsByClassName("radioFontSize")

for (i = 0; i < radioFontSizeElements.length; i++) {
    radioFontSizeElements[i].addEventListener("click", function () {
        let size = this.value
        let mainText = document.getElementsByClassName("main-text")
        for (n = 0; n < mainText.length; n++) {
            mainText[n].style.fontSize = size
        }
    })
}

/* FONT FAMILY */

getId("select").addEventListener("change", function () {
    let fontFamily = getId("select").value
    let mainText = document.getElementsByClassName("main-text")
    for (n = 0; n < mainText.length; n++) {
        mainText[n].style.fontFamily = fontFamily
    }
})

/* COLORS OF TEXT*/

getId("colorTxt").addEventListener("click", function () {
    document.getElementById("tbl1").style.display = "table"
    document.getElementById("tbl2").style.display = "none"

    let colorsElementsTxt = document.getElementsByClassName("colorTxt")

    for (i = 0; i < colorsElementsTxt.length; i++) {
        colorsElementsTxt[i].addEventListener("click", function () {

            let colorOfText = this.innerHTML

            let mainText = document.getElementsByClassName("main-text")

            for (n = 0; n < mainText.length; n++) {
                mainText[n].style.color = colorOfText
            }
        })
    }
})

/* BACKGROUND OF TEXT */

getId("colorBack").addEventListener("click", function () {
    document.getElementById("tbl1").style.display = "none"
    document.getElementById("tbl2").style.display = "table"

    let colorsElementsBack = document.getElementsByClassName("colorBack")

    for (i = 0; i < colorsElementsBack.length; i++) {
        colorsElementsBack[i].addEventListener("click", function () {

            let colorOfBackground = this.innerHTML
            document.getElementById("boxText-content").style.background = colorOfBackground
        })
    }
})


/* STYLE OF TEXT */
/* BOLD TEXT */
getId("checkboxBold").addEventListener("click", function () {
    if (getId("checkboxBold").checked == true) {
        let mainText = document.getElementsByClassName("main-text")

        for (n = 0; n < mainText.length; n++) {
            mainText[n].style.fontWeight = "bold"
        }
    } else if (getId("checkboxBold").checked == false) {
        let mainText = document.getElementsByClassName("main-text")

        for (n = 0; n < mainText.length; n++) {
            mainText[n].style.fontWeight = "normal"
        }
    }
})
/* CURSIVE */
getId("checkboxCursive").addEventListener("click", function () {
    if (getId("checkboxCursive").checked == true) {
        let mainText = document.getElementsByClassName("main-text")

        for (n = 0; n < mainText.length; n++) {
            mainText[n].style.fontStyle = "italic"
        }
    } else if (getId("checkboxCursive").checked == false) {
        let mainText = document.getElementsByClassName("main-text")

        for (n = 0; n < mainText.length; n++) {
            mainText[n].style.fontStyle = "normal"
        }
    }
})

/* EDIT LIST */

getId("createList").addEventListener("click", function () {
    let listTag = document.createElement("ul")
    // listTag.setAttribute("id", "list")
    let countList = document.getElementById("countLi").value
    for (i = 0; i < countList; i++) {
        let li = document.createElement("li")
        listTag.appendChild(li)
        li.innerHTML = "New text"
        li.setAttribute("id", "newElements")
    }

    let marks = getId("styleSelectMarks").value
    listTag.style.listStyle = marks

    document.querySelector("#boxText-content").appendChild(listTag)
    document.getElementById("boxText").style.display = "flex"
    document.getElementById("buttons").style.display = "flex"
    document.getElementById("boxList").style.display = "none"
})

/* EDIT TABLE */

getId("cretaeTable").addEventListener("click", function () {
    let tr = getId("countTr").value
    let td = getId("countTd").value
    let widthOfTD = getId("widthTd").value
    let heigthOfTD = getId("heightTd").value
    let widthOfBorder = getId("widthBorder").value
    let typeOfBorder = getId("styleSelectBorder").value
    let colorOfBorder = getId("styleSelectColor").value
    let table = document.createElement("table")

    for (i = 0; i < tr; i++) {
        let trElement = document.createElement("tr")
        for (n = 0; n < td; n++) {
            let tdElement = document.createElement("td")
            tdElement.style.width = widthOfTD + "px"
            tdElement.style.height = heigthOfTD + "px"
            tdElement.style.borderStyle = typeOfBorder
            tdElement.style.borderColor = colorOfBorder
            tdElement.style.borderWidth = widthOfBorder + "px"
            trElement.appendChild(tdElement)
        }
        table.appendChild(trElement)
    }
    table.style.border = "2px solid red"
    document.querySelector("#boxText-content").appendChild(table)
    document.getElementById("boxText").style.display = "flex"
    document.getElementById("buttons").style.display = "flex"
    document.getElementById("buttons").style.display = "flex"
    document.getElementById("boxTable").style.display = "none"
})














































































































