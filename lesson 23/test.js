
let getId = x => document.getElementById(x)
let mainText = document.getElementsByClassName('main-text')

/* Text area */
getId('tag').addEventListener('click', function () {
    getId('textSection').style.display = 'none'
    getId('area').value = getId('textSectionContent').innerHTML
    getId('textArea').style.display = 'block'
})

getId('area').addEventListener('change', function () {
    getId('textSectionContent').innerHTML = getId('area').value
})

/* Decoration of text */

getId('bold').addEventListener('click', function () {
    getId('textArea').style.display = 'none'
    getId('textSection').style.display = 'flex'
    if (getId('bold').value == 'true') {
        getId('bold').value = 'false'
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.fontWeight = "bold"
        }
    } else if (getId('bold').value == 'false') {
        getId('bold').value = 'true'
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
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.fontStyle = "italic"
        }
    } else if (getId('cursive').value == 'false') {
        getId('cursive').value = 'true'
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
        for (i = 0; i < mainText.length; i++) {
            mainText[i].style.textDecoration = 'underline'
        }
    } else if (getId('underline').value == 'false') {
        getId('underline').value = 'true'
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
        for (i = 0; i < mainText.length; i++) {
            mainText[i].strike()
        }
    } else if (getId('strike').value == 'false') {
        getId('strike').value = 'true'
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
