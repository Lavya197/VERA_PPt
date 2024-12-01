let currentSlide = 1;
const totalSlides = 13;

function nextSlide() {
    const current = document.getElementById(`slide${currentSlide}`);
    current.classList.remove('active');
    
    currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    
    const next = document.getElementById(`slide${currentSlide}`);
    next.classList.add('active');
}