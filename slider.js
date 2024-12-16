// Slider functionality
document.addEventListener('DOMContentLoaded', () => {
    // Facts Slider
    const factsSlider = {
        container: document.querySelector('.facts-slides'),
        slides: document.querySelectorAll('.fact-slide'),
        prevBtn: document.querySelector('.facts-prev'),
        nextBtn: document.querySelector('.facts-next'),
        dotsContainer: document.querySelector('.facts-dots'),
        currentSlide: 0
    };

    // Articles Slider
    const articlesSlider = {
        container: document.querySelector('.articles-container'),
        slides: document.querySelectorAll('.articles-slide'),
        prevBtn: document.querySelector('.articles-prev'),
        nextBtn: document.querySelector('.articles-next'),
        dotsContainer: document.querySelector('.articles-dots'),
        currentSlide: 0
    };

    // Initialize sliders
    function initializeSlider(slider) {
        // Create dots
        slider.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(slider, index));
            slider.dotsContainer.appendChild(dot);
        });

        // Add event listeners
        slider.prevBtn.addEventListener('click', () => navigate(slider, 'prev'));
        slider.nextBtn.addEventListener('click', () => navigate(slider, 'next'));

        // Update dots
        updateDots(slider);
    }

    // Navigate slides
    function navigate(slider, direction) {
        if (direction === 'next') {
            slider.currentSlide = (slider.currentSlide + 1) % slider.slides.length;
        } else {
            slider.currentSlide = slider.currentSlide === 0 ? 
                slider.slides.length - 1 : slider.currentSlide - 1;
        }
        updateSlider(slider);
    }

    // Go to specific slide
    function goToSlide(slider, index) {
        slider.currentSlide = index;
        updateSlider(slider);
    }

    // Update slider position
    function updateSlider(slider) {
        slider.container.style.transform = `translateX(-${slider.currentSlide * 100}%)`;
        updateDots(slider);
    }

    // Update dots
    function updateDots(slider) {
        const dots = slider.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === slider.currentSlide);
        });
    }

    // Initialize both sliders
    initializeSlider(factsSlider);
    initializeSlider(articlesSlider);

    // Auto-advance facts slider
    setInterval(() => {
        navigate(factsSlider, 'next');
    }, 5000);
});
