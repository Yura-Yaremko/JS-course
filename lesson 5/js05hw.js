let td = +prompt("Input nummber of td", "5") //кількість рядків
let tr = +prompt("Input number of tr", "5") // кількість комірок
let tdWidth = +prompt("Input your number for width td", "5") // ширина комірок
let tdHeight = +prompt("Input your number for heigth td", "5") // висота комірок

document.write(`<table style="border: 2px solid blue">`)
for (let i = 1; i <= tr; i++) {
    document.write(`<tr>`)
    for (let n = 1; n <= td; n++) {
        document.write(`<td style="width: ${tdWidth}px; height: ${tdHeight}px; border: 1px solid red; background-color: yellow"></td>`)
    }
    document.write(`</tr>`)
}
document.write(`</table>`)
