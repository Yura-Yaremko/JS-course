$(function () {

    let time = 2
    let num = 0

    $('#number').html(time)


    let interval = setInterval(function () {
        if (num <= 100) {
            num += 1.66666666667
            $('#box').css(
                "background-image",
                `linear-gradient(to bottom, #333 ${num}%, green 0%)`
            )
            // $('#box').fadeIn()

        }

        if (num >= 100) {
            num = 1.66666666667
            $('#number').html(time -= 1)
            // $('#box').fadeOut()
        }
        if (time == 0) {
            clearInterval(interval)
        }
        // console.log(num)
    }, 1000);




















































































})