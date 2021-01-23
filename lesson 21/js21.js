$(function () {

    // let val
    // $('li').each(function (index, elem) {
    //     $(elem).mouseover(function () {
    //         let r = Math.round(Math.random() * 255)
    //         let g = Math.round(Math.random() * 255)
    //         let b = Math.round(Math.random() * 255)
    //         $('li').eq(index).animate({
    //             padding: '4px 25px 4px 25px',
    //         })

    //         $('body').css({
    //             backgroundColor: `rgb(${r}, ${g}, ${b})`
    //         })

    //     })
    //     $(elem).mouseout(function () {
    //         $('li').eq(index).animate({
    //             padding: '4px 8px 4px 8px',
    //         })
    //     })
    //     console.log(index)
    //     console.log(elem)
    // })

    // let r, g, b
    // $('li').each(function (index, element) {
    //     $(element).mouseover(function () {
    //         r = Math.round(Math.random() * 255)
    //         g = Math.round(Math.random() * 255)
    //         b = Math.round(Math.random() * 255)
    //         $('body').animate({
    //             backgroundColor: `rgb(${r}, ${g}, ${b})`
    //         })
    //         $(this).animate({
    //             width: '+=100'
    //         }, 500)
    //     })
    //     $(element).mouseout(function () {
    //         $(this).animate({
    //             width: '-=100'
    //         })
    //     })
    // })

    // $(window).resize(function (event) {
    //     $('.resize').text(`Width: ${window.innerWidth},
    //      Height: ${window.innerHeight}`)
    // })

    // $(window).scroll(function (event) {
    //     $('.scroll').text(`ScrollY: ${window.scrollY}, 
    //     ScrollTop: ${$(this).scrollTop()}`)
    // })

    // $(window).on('resize scroll', function () {
    //     $('.resize').text(`Width: ${window.innerWidth},
    //     Height: ${window.innerHeight}`)

    //     $('.scroll').text(`ScrollY: ${window.scrollY}, 
    //  ScrollTop: ${$(this).scrollTop()}`)

    // })

    // $(window).on({
    //     resize: function () {
    //         $('.resize').text(`Width: ${window.innerWidth},
    //     Height: ${window.innerHeight}`)
    //     },
    //     scroll: function () {
    //         $('.scroll').text(`ScrollY: ${window.scrollY}, 
    //     ScrollTop: ${$(this).scrollTop()}`)
    //     }
    // })

    // $(window).trigger('resize')

    // $(window).one({
    //     resize: function () {
    //         $('.resize').text(`Width: ${window.innerWidth},
    //     Height: ${window.innerHeight}`)
    //     },
    //     scroll: function () {
    //         $('.scroll').text(`ScrollY: ${window.scrollY}, 
    //     ScrollTop: ${$(this).scrollTop()}`)
    //     }
    // })

    // $(window).on({
    //     resize: function () {
    //         $('.resize').text(`Width: ${window.innerWidth},
    //     Height: ${window.innerHeight}`)
    //     },
    //     scroll: function () {
    //         $('.scroll').text(`ScrollY: ${window.scrollY}, 
    //     ScrollTop: ${$(this).scrollTop()}`)
    //     }
    // })
    // $(window).off({
    //     resize: function () {
    //         $('.resize').text(`Width: ${window.innerWidth},
    //     Height: ${window.innerHeight}`)
    //     },
    //     scroll: function () {
    //         $('.scroll').text(`ScrollY: ${window.scrollY}, 
    //     ScrollTop: ${$(this).scrollTop()}`)
    //     }
    // })


    // $(window).scroll(function (event) {
    //     let scrollNum = $(this).scrollTop()
    //     // console.log(scrollNum)
    //     if (scrollNum >= 500 && scrollNum <= 549) {
    //         // $('.box').css({
    //         //     opacity: '0.3'
    //         // })

    //         $('.box').animate({
    //             opacity: '0.3'
    //         })
    //     } else if (scrollNum >= 550 && scrollNum <= 599) {
    //         // $('.box').css({
    //         //     opacity: '0.5'
    //         // })

    //         $('.box').animate({
    //             opacity: '0.5'
    //         })
    //     } else if (scrollNum >= 600 && scrollNum <= 650) {
    //         // $('.box').css({
    //         //     opacity: '0.7'
    //         // })

    //         $('.box').animate({
    //             opacity: '0.7'
    //         })
    //     } else if (scrollNum > 650) {
    //         // $('.box').css({
    //         //     opacity: '1'
    //         // })

    //         $('.box').animate({
    //             opacity: '1'
    //         })
    //     } else if (scrollNum <= 499) {
    //         // $('#box').css({
    //         //     opacity: '0'
    //         // })

    //         $('.box').animate({
    //             opacity: '0'
    //         })
    //     }

    // })

    // $('.box').click(function () {
    //     $(window).scrollTop(0)

    // })


    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.box').fadeIn()
        } else {
            $('.box').fadeOut()
        }
    })

    $('.box').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 800)
    })













































































})