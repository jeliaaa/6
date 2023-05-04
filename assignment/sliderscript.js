$(document).ready(function(){
    var slideIndex = 0;
    var currentSlide = $('.slider img');
    var sliderSpeed = 2000;

    function next(){
        currentSlide.eq(slideIndex).removeClass('current');
        slideIndex = (slideIndex+1) % (currentSlide.length);
        currentSlide.eq(slideIndex).addClass('current');
    }
    setInterval(next, sliderSpeed);
})