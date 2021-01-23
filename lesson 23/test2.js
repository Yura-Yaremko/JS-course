
let getId = x => document.getElementById(x)
let mainText = document.getElementsByClassName('main-text')
let fonts = document.getElementsByClassName('fonts')
let sizes = document.getElementsByClassName('sizes')
let textColor = document.getElementsByClassName('textColor')
let backColor = document.getElementsByClassName('backColor')
let bckImage = document.getElementsByClassName('bckImage')

/* Text area, tag, user's lists and table*/
getId('tag').addEventListener('click', function () {
    getId('textSection').style.display = 'none'
    getId('area').value = getId('textSectionContent').innerHTML
    getId('textArea').style.display = 'block'
    getId('tagNav').style.display = 'flex'
    getId('mainNav').style.display = 'none'
})

getId('area').addEventListener('change', function () {
    getId('textSectionContent').innerHTML = getId('area').value
})

getId('save').addEventListener('click', function () {
    getId('tagNav').style.display = 'none'
    getId('mainNav').style.display = 'flex'
    getId('textSection').style.display = 'flex'
    getId('textArea').style.display = 'none'
    getId('userTable').style.display = 'none'
    getId('userOlList').style.display = 'none'
    getId('userUlList').style.display = 'none'
})

/* Decoration of text */

getId('bold').addEventListener('click', function () {
    getId('textArea').style.display = 'none'
    getId('textSection').style.display = 'flex'
    if (getId('bold').value == 'true') {
        getId('bold').value = 'false'
        getId('bold').style.backgroundColor = '#D7DADF'
        getId('bold').style.boxShadow = '3px 3px 3px #333'
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.fontWeight = "bold"
        }
    } else if (getId('bold').value == 'false') {
        getId('bold').value = 'true'
        getId('bold').style.backgroundColor = '#fff'
        getId('bold').style.boxShadow = '3px 3px 3px #FBFBFB'
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.fontWeight = "normal"
        }
    }
})


getId('cursive').addEventListener('click', function () {
    getId('textArea').style.display = 'none'
    getId('textSection').style.display = 'flex'
    if (getId('cursive').value == 'true') {
        getId('cursive').value = 'false'
        getId('cursive').style.backgroundColor = '#D7DADF'
        getId('cursive').style.boxShadow = '3px 3px 3px #333'
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.fontStyle = "italic"
        }
    } else if (getId('cursive').value == 'false') {
        getId('cursive').value = 'true'
        getId('cursive').style.backgroundColor = '#fff'
        getId('cursive').style.boxShadow = '3px 3px 3px #FBFBFB'
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.fontStyle = "normal"
        }
    }
})


getId('underline').addEventListener('click', function () {
    getId('textArea').style.display = 'none'
    getId('textSection').style.display = 'flex'
    if (getId('underline').value == 'true') {
        getId('underline').value = 'false'
        getId('underline').style.backgroundColor = '#D7DADF'
        getId('underline').style.boxShadow = '3px 3px 3px #333'
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.textDecoration = 'underline'
        }
    } else if (getId('underline').value == 'false') {
        getId('underline').value = 'true'
        getId('underline').style.backgroundColor = '#fff'
        getId('underline').style.boxShadow = '3px 3px 3px #FBFBFB'
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.textDecoration = 'none'
        }
    }
})


getId('strike').addEventListener('click', function () {
    getId('textArea').style.display = 'none'
    getId('textSection').style.display = 'flex'
    if (getId('strike').value == 'true') {
        getId('strike').value = 'false'
        getId('strike').style.backgroundColor = '#D7DADF'
        getId('strike').style.boxShadow = '3px 3px 3px #333'
        for (i = 0; i < mainText.length; i++) {
            mainText[i].strike()
        }
    } else if (getId('strike').value == 'false') {
        getId('strike').value = 'true'
        getId('strike').style.backgroundColor = '#fff'
        getId('strike').style.boxShadow = '3px 3px 3px #FBFBFB'
        for (i = 0; i < mainText.length; i++) {
            // mainText[i].style.textDecoration = 'none'
        }
    }
})


getId('leftText').addEventListener('click', function () {
    getId('textArea').style.display = 'none'
    getId('textSection').style.display = 'flex'
    getId('textSection').style.justifyContent = 'flex-start'
})

getId('centerText').addEventListener('click', function () {
    getId('textArea').style.display = 'none'
    getId('textSection').style.display = 'flex'
    getId('textSection').style.justifyContent = 'center'
})

getId('rightText').addEventListener('click', function () {
    getId('textArea').style.display = 'none'
    getId('textSection').style.display = 'flex'
    getId('textSection').style.justifyContent = 'flex-end'
})

/* Fonts and sizes */


for (i = 0; i < fonts.length; i++) {
    fonts[i].addEventListener('click', function () {
        let font = this.value
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.fontFamily = `${font}`
        }
    })
}

for (i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener('click', function () {
        let size = this.value
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.fontSize = `${size}px`
        }
    })
}

/* Text color */

getId('textColor').addEventListener('click', function () {
    getId('tableBoxColorText').style.display = 'flex'
    getId('page-wrapper').style.opacity = '0.5'

})

getId('tableBoxColorText').addEventListener('click', function () {
    getId('tableBoxColorText').style.display = 'none'
    getId('page-wrapper').style.opacity = '1'
})

for (i = 0; i < textColor.length; i++) {
    textColor[i].addEventListener('click', function () {
        let color = getComputedStyle(this).backgroundColor
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.color = `${color}`
        }
    })
}

/* Background color, image, file */

getId('backgroundFile').addEventListener('click', function () {
    getId('background').style.display = 'flex'
    // getId('tableBoxBackgroundColor').style.display = 'flex'
    // getId('tableBackgroundImage').style.display = 'none'
    // getId('backgroundFileBox').style.display = 'none'
    // getId('page-wrapper').style.opacity = '0.5'
    // for (i = 0; i < backColor.length; i++) {
    //     backColor[i].addEventListener('click', function () {
    //         let color = this.innerHTML
    //         document.body.style.backgroundImage = 'none'
    //         document.body.style.backgroundColor = `${color}`
    //         // console.log(color)
    //     })
    // }
})

getId('bckColor').addEventListener('click', function () {
    getId('background').style.display = 'flex'
    getId('tableBoxBackgroundColor').style.display = 'flex'
    getId('tableBackgroundImage').style.display = 'none'
    getId('backgroundFileBox').style.display = 'none'
    getId('page-wrapper').style.opacity = '0.5'
    for (i = 0; i < backColor.length; i++) {
        backColor[i].addEventListener('click', function () {
            let color = getComputedStyle(this).backgroundColor
            document.body.style.backgroundImage = 'none'

            document.body.style.backgroundColor = color
        })
    }
})

getId('tableBoxBackgroundColor').addEventListener('click', function () {
    getId('tableBoxBackgroundColor').style.display = 'none'
    getId('background').style.display = 'none'
    getId('page-wrapper').style.opacity = '1'
})

getId('bckImg').addEventListener('click', function () {
    getId('background').style.display = 'flex'
    getId('tableBackgroundImage').style.display = 'flex'
    getId('backgroundFileBox').style.display = 'none'
    getId('tableBoxBackgroundColor').style.display = 'none'
    getId('page-wrapper').style.opacity = '0.5'
    for (i = 0; i < bckImage.length; i++) {
        bckImage[i].addEventListener('click', function () {
            let img = this.getAttribute("src")
            document.body.style.backgroundColor = 'none'
            document.body.style.backgroundImage = `url('${img}')`
        })
    }
})

getId('tableBackgroundImage').addEventListener('click', function () {
    getId('tableBackgroundImage').style.display = 'none'
    getId('background').style.display = 'none'
    getId('page-wrapper').style.opacity = '1'
})

getId('bckFile').addEventListener('click', function () {
    getId('background').style.display = 'flex'
    getId('backgroundFileBox').style.display = 'flex'
    getId('tableBackgroundImage').style.display = 'none'
    getId('tableBoxBackgroundColor').style.display = 'none'
    getId('page-wrapper').style.opacity = '0.5'
    getId('file').addEventListener('change', function (event) {
        console.log(event)
        console.log(event.target.files[0])
        let file = URL.createObjectURL(event.target.files[0])
        document.body.style.backgroundColor = 'none'
        document.body.style.background = `url(${file})`
    })
})

getId('backgroundFileBox').addEventListener('click', function () {
    getId('backgroundFileBox').style.display = 'none'
    getId('background').style.display = 'none'
    getId('page-wrapper').style.opacity = '1'
})


/* Login */

getId('lock').addEventListener('click', function () {
    getId('loginBox').style.display = 'flex'
})

getId('signInBtn').addEventListener('click', function () {
    let login = getId('login').value
    let password = getId('password').value
    if (login == 'admin' && password == 'admin') {
        getId('loginBox').style.display = 'none'
    } else {
        alert('Try again, you have wriiten wrong password')
        getId('loginBox').reset()
    }
})


/* User table */

getId('tableUser').addEventListener('click', function () {
    getId('userTable').style.display = 'flex'
    getId('userOlList').style.display = 'none'
    getId('userUlList').style.display = 'none'
})

getId('olListUser').addEventListener('click', function () {
    getId('userTable').style.display = 'none'
    getId('userOlList').style.display = 'flex'
    getId('userUlList').style.display = 'none'
})


getId('ulListUser').addEventListener('click', function () {
    getId('userTable').style.display = 'none'
    getId('userOlList').style.display = 'none'
    getId('userUlList').style.display = 'flex'
})

getId('createTblBtn').addEventListener('click', function () {
    let tr = getId("countTr").value
    let td = getId("countTd").value
    let widthOfTD = getId("widthTd").value
    let heigthOfTD = getId("heightTd").value
    let widthOfBorder = getId("widthBorder").value
    let typeOfBorder = getId("slctUserTbl").value
    let colorOfBorder = getId("userTblBorderClr").value
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
    document.querySelector("#textSectionContent").appendChild(table)
    getId('userTable').style.display = 'none'
    getId('area').value = getId('textSectionContent').innerHTML
})

getId('resetBtn').addEventListener('click', function () {
    getId('userTable').reset()
})

/* Ol list */

getId('createUserOlList').addEventListener('click', function () {
    let listTag = document.createElement("ol")
    let countList = document.getElementById("countLiOl").value
    for (i = 0; i < countList; i++) {
        let li = document.createElement("li")
        listTag.appendChild(li)
        li.innerHTML = "New text"
        li.setAttribute("id", "newElements")
    }

    let marks = getId("slctUserOlList").value
    listTag.style.listStyle = marks

    document.querySelector("#textSectionContent").appendChild(listTag)
    getId('userOlList').style.display = 'none'
    getId('area').value = getId('textSectionContent').innerHTML
})

getId('resetUserOlList').addEventListener('click', function () {
    getId('userOlList').reset()
})

/* Ul list */

getId('createUserUlList').addEventListener('click', function () {
    let listTag = document.createElement("ul")
    let countList = document.getElementById("countLiUl").value
    for (i = 0; i < countList; i++) {
        let li = document.createElement("li")
        listTag.appendChild(li)
        li.innerHTML = "New text"
        li.setAttribute("id", "newElements")
    }

    let marks = getId("slctUserUlList").value
    listTag.style.listStyle = marks

    document.querySelector("#textSectionContent").appendChild(listTag)
    getId('userUlList').style.display = 'none'
    getId('area').value = getId('textSectionContent').innerHTML
})

getId('resetUserOlList').addEventListener('click', function () {
    getId('userUlList').reset()
})


