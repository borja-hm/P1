class Slider {
    constructor({ sliderSelector = ".slider", sliderContainerSelector = ".slider_Container", previousSelector = ".previous", nextSelector = ".next", transitionTime = 3000 } = {}){
        this.slider = document.querySelector(sliderSelector);
        this.slides = document.querySelectorAll(`${sliderContainerSelector} img`).length;
        this.sliderContainer = document.querySelector(sliderContainerSelector);
        this.previousBtn = document.querySelector(previousSelector);
        this.nextBtn = document.querySelector(nextSelector);
        this.slidesSize = this.slider.offsetWidth;
        this.currentSlide = 0;
        this.setEventListeners();
    }
    moveSlides() {
        this.sliderContainer.style.transform = `translateX(-${this.currentSlide * this.slidesSize}px)`;
    /*this.sliderContainer.style.transform = `translateX(-${this.currentSlide * this.slidesSize}px)`;*/ }
    nextSlide() {
        console.log(this);
        this.currentSlide = this.currentSlide >= this.slides - 1 ? 0 : this.currentSlide + 1;
        this.moveSlides();
    }
    previousSlide() {
        this.currentSlide = this.currentSlide <= 0 ? this.slides - 1 : this.currentSlide - 1;
        this.moveSlides();
    }
    setEventListeners() {
        this.previousBtn.addEventListener("click", this.previousSlide.bind(this));
        this.nextBtn.addEventListener("click", this.nextSlide.bind(this));
    }
}
new Slider();

//# sourceMappingURL=presentacion.816e7b21.js.map
