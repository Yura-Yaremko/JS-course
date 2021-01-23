$(function () {

    // $('.menu').on('click', 'a', function (event) {
    //     event.preventDefault()
    //     let id = $(this).attr('href')
    //     let top = $(id).offset().top
    //     $('html').animate({
    //         scrollTop: top
    //     }, 1500)
    // })

    // $('ul').on('click', 'a', function (event) {
    //     event.preventDefault()
    //     let id = $(this).attr('href')
    //     let top = $(id).offset().top
    //     $('html').animate({
    //         scrollTop: top
    //     }, 1500)
    // })


    $('#menu-aside').on('click', 'a', function (event) {
        event.preventDefault()
        $(this).children().addClass('click')


        let id = $(this).attr('href')
        let top = $(id).offset().top
        $('html').animate({
            scrollTop: top
        }, 1500)
    })

















































































})