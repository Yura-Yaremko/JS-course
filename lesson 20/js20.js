$(function () {

    // $('#box').animate({
    //     top: '45%',
    //     left: '50%',
    // }, 1000, function () {
    //     $('#text').html("I am done")
    //     $('#text').css({
    //         fontSize: '2em'
    //     })
    //     $('#box').css({
    //         width: '250px',
    //         height: '125px',
    //         transition: "transform 0.5s",
    //         transform: 'rotate("25"deg)'
    //     })

    // })


    // $('#box').animate({
    //     left: '300px',
    //     top: '300px'
    // }, 3000, function () {
    //     $(this).html("I am done")
    //     $(this).css({
    //         transform: "scale(1.2) rotate(45deg)"
    //     })
    // })



    // setInterval(function () {
    //     $('#box').animate({
    //         width: '200px',
    //         height: '200px',
    //         opacity: '0.6'
    //     }, 3000).animate({
    //         width: '100px',
    //         height: '100px',
    //         opacity: '1'
    //     }, 3000)
    // }, 1000);


    // setInterval(function () {
    //     $('.box').animate({
    //         width: '+=200',
    //         height: '+=200',
    //         opacity: '0.5'
    //     }, 3000).animate({
    //         width: '-=200',
    //         height: '-=200',
    //         opacity: '1'
    //     }, 3000)
    // })

    // let val
    // $('input').each(function (index, elem) {
    //     // console.log(index)
    //     // console.log(elem)
    //     $(elem).change(function () {
    //         val = $(this).val()
    //         $('p').eq(index).animate({
    //             width: val * 5
    //         }, 2000)
    //         $('p+span').eq(index).html(val)
    //     })
    // })

    let val
    $('li').each(function (index, elem) {
        $(elem).mouseover(function () {
            val = $(this).html()
            console.log(val)
            $('li').css({
                listStyle: `${val}`
            })
        })
    })




















})

















































































