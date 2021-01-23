let getId = id => document.getElementById(id)

getId("color").addEventListener("click", () => { 
    getId("tbl").style.display = "table"
    getId("td1-1").addEventListener("click", () => {
            document.body.style.backgroundColor = "rgb(52, 193, 218)"
        })
        
    getId("td1-2").addEventListener("click", () => {
            document.body.style.backgroundColor = "brown"
        })
        
    getId("td1-3").addEventListener("click", () => {
            document.body.style.backgroundColor = "rgb(20, 202, 81)"
        })
            
    getId("td2-1").addEventListener("click", () => {
            document.body.style.backgroundColor = "green"
        })
        
    getId("td2-2").addEventListener("click", () => {
            document.body.style.backgroundColor = "rgb(197, 135, 197)"
        })
        
    getId("td2-3").addEventListener("click", () => {
            document.body.style.backgroundColor = "red"
        })
        
    getId("td3-1").addEventListener("click", () => {
            document.body.style.backgroundColor = "blue"
        })
        
    getId("td3-2").addEventListener("click", () => {
            document.body.style.backgroundColor = "purple"
        })
        
    getId("td3-3").addEventListener("click", () => {
            document.body.style.backgroundColor = "rgb(78, 109, 61)"
        })
        
        
})


getId("imagine").addEventListener("click", () => { 
    getId("tbl").style.display = "table"
    getId("td1-1").style.backgroundImage = "url('../img/1.jpg')"
    getId("td1-1").addEventListener("click", () => {
        document.body.style.backgroundImage = "url('../img/1.jpg')"
    })

    getId("td1-2").style.backgroundImage = "url('../img/2.jpg')"
    getId("td1-2").addEventListener("click", () => {
        document.body.style.backgroundImage = "url('../img/2.jpg')"
    })

    getId("td1-3").style.backgroundImage = "url('../img/3.jpg')"
    getId("td1-3").addEventListener("click", () => {
        document.body.style.backgroundImage = "url('../img/3.jpg')"
    })

    getId("td2-1").style.backgroundImage = "url('../img/4.jpg')"
    getId("td2-1").addEventListener("click", () => {
        document.body.style.backgroundImage = "url('../img/4.jpg')"
    })

    getId("td2-2").style.backgroundImage = "url('../img/5.jpg')"
    getId("td2-2").addEventListener("click", () => {
        document.body.style.backgroundImage = "url('../img/5.jpg')"
    })

    getId("td2-3").style.backgroundImage = "url('../img/6.jpg')"
    getId("td2-3").addEventListener("click", () => {
        document.body.style.backgroundImage = "url('../img/6.jpg')"
    })

    getId("td3-1").style.backgroundImage = "url('../img/7.jpg')"
    getId("td3-1").addEventListener("click", () => {
        document.body.style.backgroundImage = "url('../img/7.jpg')"
    })

    getId("td3-2").style.backgroundImage = "url('../img/8.jpg')"
    getId("td3-2").addEventListener("click", () => {
        document.body.style.backgroundImage = "url('../img/8.jpg')"
    })

    getId("td3-3").style.backgroundImage = "url('../img/9.jpg')"
    getId("td3-3").addEventListener("click", () => {
        document.body.style.backgroundImage = "url('../img/9.jpg')"
    })
})
