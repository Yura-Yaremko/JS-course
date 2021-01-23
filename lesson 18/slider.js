let getId = x => document.getElementById(x)

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Button Play and Pause


getId("playAndPauseBtn").addEventListener("click", () => {
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides")
        let dots = document.getElementsByClassName("dot")
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "")
        }
        slides[slideIndex - 1].style.display = "block"
        dots[slideIndex - 1].className += " active"
        setTimeout(showSlides, 2000); // Change image every 2 seconds


    }

    if (getId("playAndPauseBtn").value == "Play") {
        getId("playAndPauseBtn").innerHTML = "Pause"
        getId("playAndPauseBtn").value = "Pause"

        showSlides()

    } else if (getId("playAndPauseBtn").value == "Pause") {
        getId("playAndPauseBtn").innerHTML = "Play"
        getId("playAndPauseBtn").value = "Play"


    }
    console.log(getId("playAndPauseBtn").value)
})


// Small pictures

let dots = document.getElementsByClassName("dot")
let smallPictures = document.getElementsByClassName("smallPictures")

for (i = 0; i < dots.length; i++) {
    dots[i].addEventListener("mouseover", function () {
        getId(`smallPictures${this.innerHTML}`).style.display = "block"

    })
}

for (i = 0; i < dots.length; i++) {
    dots[i].addEventListener("mouseout", function () {
        getId(`smallPictures${this.innerHTML}`).style.display = "none"
    })
}

// console.log(smallPictures)














































































