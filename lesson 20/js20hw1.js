$(function () {
    // $('body').mouseover(function () {
    //     let r = Math.round(Math.random() * 255)
    //     let g = Math.round(Math.random() * 255)
    //     let b = Math.round(Math.random() * 255)
    //     console.log(r)
    //     console.log(g)
    //     console.log(b)
    // })

    setInterval(function () {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        let topPosition = Math.round(Math.random() * 90)
        let leftPosition = Math.round(Math.random() * 90)
        $('#ball').animate({
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            boxShadow: `0 0 100px rgba(${r}, ${g}, ${b}, 0.7)`,
            top: `${topPosition}%`,
            left: `${leftPosition}%`
        })
        // console.log(r)
        // console.log(g)
        // console.log(b)
    });












































































})