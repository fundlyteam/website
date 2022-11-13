import Swiper, {Pagination, Scrollbar, Navigation, Autoplay} from 'swiper';
import anime from "animejs";
import 'swiper/swiper-bundle.min.css';

const benefitSwiper = new Swiper('#benefit-swiper', {
    modules: [Navigation],
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

const processSwiper = new Swiper('#process-swiper', {
    modules: [Scrollbar],
    centeredSlides: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false
    },
});

const testimonialSwiper = new Swiper('#testimonial-swiper', {
    modules: [Pagination, Autoplay],
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

function handleMobileNav() {
    const showMobileNav = document.getElementById('show-mobile-nav');
    const hideMobileNav = document.getElementById('hide-mobile-nav');
    const mobileNav = document.getElementById('mobile-nav')
    showMobileNav.addEventListener('click', () => {
        mobileNav.classList.remove('pointer-events-none');
        anime({
            targets: '#mobile-nav',
            height: "100vh",
            opacity: 1,
            duration: 200,
            easing: 'linear',
        });
    })
    hideMobileNav.addEventListener('click', (e) => {
        mobileNav.classList.add('pointer-events-none');
        anime({
            targets: '#mobile-nav',
            keyframes: [
                {height: 0, duration: 100},
                {opacity: 0, duration: 0}
            ],
            easing: 'linear',
        });
    })
}

function handleDownloadAppModal() {
    const showDownloadAppModal = document.querySelectorAll('.show-download-app-modal');
    const hideDownloadAppModal = document.querySelectorAll('.hide-download-app-modal');
    const downloadAppModal = document.getElementById('download-app-modal');

    showDownloadAppModal.forEach(handler => {
        handler.addEventListener('click', () => {
            downloadAppModal.classList.remove('hidden');
            anime({
                targets: '#body',
                opacity: 100,
                translateY: 0,
                scale: 1,
                duration: 300,
                easing: 'easeOutSine'

            })
            anime({
                targets: '#backdrop',
                opacity: 100,
                duration: 300,
                easing: 'easeOutSine',
                complete: function () {
                    downloadAppModal.querySelector('input:first-child').focus()
                }
            })
        })
    })

    hideDownloadAppModal.forEach(handler => {
        handler.addEventListener('click', () => {
            anime({
                targets: '#body',
                opacity: 0,
                translateY: "16px",
                scale: 0.95,
                duration: 200,
                easing: 'easeInSine',
            })
            anime({
                targets: '#backdrop',
                opacity: 100,
                duration: 200,
                easing: 'easeInSine',
                complete: function () {
                    downloadAppModal.classList.add('hidden')
                }
            })
        })
    })
}

function handleDownloadAppForm() {
    const downloadAppForm = document.getElementById('send-app-link');
    downloadAppForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const mobile = document.getElementById('mobile');
        if (mobile.validity.patternMismatch) {
            mobile.setCustomValidity("Please enter your ten digit mobile number.");
            mobile.reportValidity();
        } else {
            mobile.setCustomValidity("");
        }
    });
}

function animateNumbers() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    innerText: [0, entry.target.innerText],
                    round: 1,
                    duration: 1000,
                    easing: "easeInOutSine",
                })
                observer.unobserve(entry.target);
            }
        })
    }, {threshold: 1})

    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        observer.observe(number);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    handleMobileNav();
    handleDownloadAppModal();
    handleDownloadAppForm();
    animateNumbers();

    //     Modal panel, show/hide based on modal state.
    //
    //     Entering: "ease-out duration-300"
    // From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    // To: "opacity-100 translate-y-0 sm:scale-100"
    // Leaving: "ease-in duration-200"
    // From: "opacity-100 translate-y-0 sm:scale-100"
    // To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
})
