

document.write(`<table style="border: 1px solid silver;">`)
// for (let i = 1; i <= 8; i++) {
    
    // for (let n = 1; n < 10; n++) {
       
        for (num1 = 1; num1 < 10; num1++ ) {
            document.write(`<tr>`)
            for (num2 = 1; num2 < 10; num2++){
                document.write(`<td style="background: blue; border: 1px solid silver;">`)
                res= num1 * num2
                document.write(`${num1} * ${num2} = ${res}`)
                
                document.write(`</td>`)
            }
            document.write(`</tr>`)
        }
            
    // }
    
// }
document.write(`</table>`)



// t td  //кількість рядків
//  tr  // кількість комірок