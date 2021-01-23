$('#ball').mouseover(function () {
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    let posTop = Math.round(Math.random() * 100)
    let posLeft = Math.round(Math.random() * 100)
    // let borderRadius = Math.round(Math.random() * 100)
    let width = Math.round(Math.random() * 100)
    let height = Math.round(Math.random() * 100)
    $('#ball').css({
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        left: `${posLeft}%`,
        top: `${posTop}%`,
        // borderRadius: `${borderRadius}%`,
        width: `${width}px`,
        height: `${height}px`
    })

})











































































