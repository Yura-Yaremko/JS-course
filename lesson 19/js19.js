$(document).ready(function () {
    // $(selector).action()

    // let box = $("#box")
    // console.log(box)

    // $('#box').html('<h1>Hello</h1>')
    // $("#box").text('<h1>Hello</h1>')

    // $('#box').append('<h3>Append</h3>')
    // $('#box').prepend('<h3>Prepend</h3>')
    // $('#box').before('<p>Before</p>')
    // $('#box').after('<p>After</p>')

    // $('.text').before('<b>Before b</b>')

    /* Selectors
        $('*')
        $(this)
        $('tag')
        $('.class')
        $('#id')
        $('tag.class')
        $('tag.first')
        $('tag:first')
        $('tag:last')
        $('tag:pseudo-class')
        $(':header')
        $(':button')
        $('[attr]')
        $('a[target="_blank"]')
        $('a[target!="_blank"]')

    */

    // $('p').wrap('<div class="wrap"></div>')
    // $('p').wrapAll('<div class="wrapAll"></div>')
    // $('p').wrapInner ('<div class="wrapInner"></div>')

    // $('<h2>Opacha</p>').replaceAll('p')
    // $('p:first').replaceWith('Hello')

    // $('p').empty()
    // $('ol').css('border', '1px solid black')
    // $('ol').css({
    //     backgroundColor: 'bisque'
    // })
    // $('li:odd').css({
    //     backgroundColor: "green"
    // })

    // $('li:even').css({
    //     backgroundColor: "gray"
    // })

    // $('li:gt(2)').css({
    //     backgroundColor: 'green'
    // })
    // $('li:lt(2)').css({
    //     backgroundColor: 'gray'
    // })
    // $('li:eq(2)').css({
    //     backgroundColor: 'lightblue'
    // })
    // $('#box').animate({
    //     width: '90%',
    //     minHeight: '250px',
    //     backgroundColor: 'red'
    // }, 1000).animate({
    //     width: '50%',
    //     minHeight: '150px',
    //     backgroundColor: 'rgb(173, 216, 230)'
    // }, 1000)

    // $('li:contains("item 4")').css({
    //     color: "red"
    // })
    // $('div:has(h1)').css({
    //     color: 'green'
    // })
    // $('li:first').attr('id', 'first')
    // $('li:first').removeAttr('id')
    // $('li:first').addClass('new')
    // $('li:first').removeClass('new')
    // $('li:first').hasClass('new')

    // $('#get').click(function () {
    //     let val = $('#login').val()
    //     console.log(val)
    //     $(this).after(`<h4>${val}</h4>`)
    // })

    // $('#add').click(function () {
    //     $('#box').append('<div class="yellowBox"></div>')
    //     console.log($('#box').children().length)
    //     if ($('#box').children().length % 7 == 0) {
    //         $('#box').css({
    //             display: 'block'
    //         })
    //         $('#box').append('<div class="yellowBox"></div>')
    //     }

    // })

    n = 1
    $('#add').click(function () {
        $('#trElement').append('<td class="yellowBox"></td>')
        if ($('#trElement').children().length == 7) {
            $('#table').append('<tr id="trElement${n}"></tr>')
            $('#trElement${n}').append('<td class="yellowBox"></td>')
        }
        n++
    })










































})

$(function () {

})