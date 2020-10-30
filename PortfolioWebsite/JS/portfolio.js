/* Pop up Form */

function openForm() {
    document.getElementById('myForm').style.display = "block";
}

function closeForm() {
    document.getElementById('myForm').style.display = "none";
}

/* Slideshow */

var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

function currentSlide(index) {
    slideIndex=index;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++) {
        dots[i].classList.remove('active');
    }  
    slides[index].style.display = "block";
    dots[index].classList.add("active");
}

function plusSlides(changeIndex) {
    slideIndex += changeIndex;
    if (slideIndex == -1){
        slideIndex = slides.length-1;
    } else if (slideIndex == slides.length) {
        slideIndex = 0;
    }
    currentSlide(slideIndex);
}

currentSlide(slideIndex);