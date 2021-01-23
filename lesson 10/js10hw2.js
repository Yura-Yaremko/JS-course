
document.getElementById("chkbox").addEventListener("click", () => {
    if (document.getElementById("chkbox").checked == true){
        document.getElementById('ftrButton').disabled = false
    }
    
document.getElementById("ftrButton").addEventListener("click", () => {
    let frstName = document.getElementById("inputTextFistName").value
    localStorage.setItem('firstname', frstName);
    let FistName = localStorage.getItem("firstname") 
    document.getElementById("firstName").innerHTML = FistName
    console.log(FistName)

    let scndName = document.getElementById("inputTextSecondName").value
    localStorage.setItem('secondname', scndName);
    let SecondName = localStorage.getItem("secondname") 
    document.getElementById("secondName").innerHTML = SecondName
    console.log(SecondName)

    let email = document.getElementById("inputTextEmail").value
    localStorage.setItem('email', email);
    let Email = localStorage.getItem("email") 
    document.getElementById("email").innerHTML = Email
    console.log(Email)

    if (document.getElementById("inputRadio2").checked == true ){
        localStorage.setItem("state", "woman")
    } else if (document.getElementById("inputRadio1").checked == true){
        localStorage.setItem("state", "man")
    } else if (document.getElementById("inputRadio2").checked == false && 
    document.getElementById("inputRadio1").checked == false) {
        localStorage.setItem("state", "forgot to chose")
    }
    let State = localStorage.getItem("state")
    if (State == "woman") {
        document.getElementById("state").src = "../img/woman.png"
    } 

    let Positin = document.getElementById("slct");
    var pstn = Positin.options[Positin.selectedIndex].text;
    localStorage.setItem("position", pstn)
    let Positionn = localStorage.getItem("position")
    document.getElementById("position").innerHTML = Positionn

    document.getElementById("box2").style.display = "flex"
    document.getElementById("box1").style.display = "none"
})
})




































