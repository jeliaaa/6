const slides = document.querySelectorAll(".testimonials-slide");
let activeSlide = 0;

function next(){
    slides[activeSlide].classList.remove("active");
    activeSlide = ( activeSlide + 1 ) % slides.length;
    slides[activeSlide].classList.add("active");
}

document.querySelectorAll(".testimonials button").forEach(button => {
    button.addEventListener("click", () =>{
        next();
    })
});