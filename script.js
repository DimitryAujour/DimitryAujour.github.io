var slideIndex = 1;     // slides indexed from 1
showSlides(slideIndex);

var timeout = null;
timeout = setTimeout(automaticChange, 7000);  // To avoid automatic change, comment this line

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    /* if automaticChange is on, reset the timer */
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 7000);
    }
}

function currentSlide(n) {
    slideIndex = n
    showSlides(slideIndex);
    /* if automaticChange is on, reset the timer */
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 7000);
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }   // if beyond the last one, go to the first one
    if (n < 1) { slideIndex = slides.length }   // if before the first one, go to the last one
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function automaticChange() {
    slideIndex++;
    showSlides(slideIndex);
    timeout = setTimeout(automaticChange, 7000);   // call again automaticChange() after 7s
}