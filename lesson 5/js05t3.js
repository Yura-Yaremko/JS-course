//Task 3

let list = prompt("write ol or ul")
if (list == "ol" || list == "ul") {
    let countLi = prompt("How much li you want?")
    let markLi

    if (list == "ol") {
        markLi = prompt("write 1 | I | i | A | a ")
    } else if (list == "ul") {
        markLi = prompt("write disc | circle | square")
    }
    document.write(`<${list} type="${markLi}">`)
    for (let i = 1; i <= countLi; i++) {
        let textLi = prompt("Text for li")
        document.write(`<li>${textLi}</li>`)
    }
    document.write(`</${list}>`)
} else {
    document.write("<h1>List no exists</h1>")
}

