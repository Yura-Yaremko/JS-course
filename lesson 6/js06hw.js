
let backgroundColor = prompt("Write the background color you want", "bisque")
document.body.style.backgroundColor = backgroundColor

let fontsize = prompt("Write font size for all fonts", "20px")
document.body.style.fontSize = fontsize

let AI = prompt("Chose where you want that text will be:", "center")
document.getElementById("article").style.textAlign = AI

let sites = prompt("Write which background you want to see in p", "white")
document.getElementById("Links").style.backgroundColor = sites

let sitesCol = prompt("Writte which color for text you want", "yellow")
document.getElementById("Links").style.color = sitesCol

let ACol1 = prompt("write which color for link 1 you want", "blue")
document.getElementById("fav1").style.color = ACol1

let BCol1 = prompt("write which background color for link 1 you want", "green")
document.getElementById("fav1").style.backgroundColor = BCol1

let ACol2 = prompt("write which color for link 2 you want", "green")
document.getElementById("fav2").style.color = ACol2

let BCol2 = prompt("write which background color for link 2 you want", "blue")
document.getElementById("fav2").style.backgroundColor = BCol2

let ACol3 = prompt("write which color for link 3 you want", "yellow")
document.getElementById("fav3").style.color = ACol3

let BCol3 = prompt("write which background color for link 3 you want", "white")
document.getElementById("fav3").style.backgroundColor = BCol3

let  listStyle = prompt("write which type of list style you want", "square")
document.getElementById("list").style.listStyle = listStyle

let userSite1name = prompt("write your favorite site 1 name", "youtube")
let userSite1 = prompt("write your favorite site 1 url", "https://www.youtube.com/")
document.getElementById("fav1").innerHTML = userSite1name
document.getElementById("fav1").href = userSite1

let userSite2name = prompt("write your favorite site 2 name", "google")
let userSite2 = prompt("write your favorite site 2 url", "https://www.google.com/")
document.getElementById("fav2").innerHTML = userSite2name
document.getElementById("fav2").href = userSite2

let userSite3name = prompt("write your favorite site 3 name", "netflix")
let userSite3 = prompt("write your favorite site 3 url", "https://www.netflix.com/")
document.getElementById("fav3").innerHTML = userSite3name
document.getElementById("fav3").href = userSite3

