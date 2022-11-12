import Swiper, {Pagination, Scrollbar, Navigation, Autoplay} from 'swiper';
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

document.addEventListener('DOMContentLoaded', () => {
    const dismissingButtons = document.querySelectorAll('[data-dismiss]');
    dismissingButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            const toggleable = e.target.closest('[data-toggleable]')
            toggleable.classList.toggle('hidden');
        })
    })

    const toggleButtons = document.querySelectorAll('[data-toggle]');
    toggleButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            const clickedButton = e.target.closest('[data-toggle]');
            const target = document.getElementById('mobile-nav');
            if (target.classList.contains('hidden')) {
                target.classList.add('animate-slideInRight');
                target.classList.remove('hidden');
                target.classList.remove('animate-slideOutRight');
            } else {
                target.classList.remove('animate-slideInRight');
                target.classList.add('animate-slideOutRight');
                target.classList.add('hidden');
            }
            // if (target.classList.contains('hidden')) {
            //     target.classList.remove('hidden');
            // } else {
            //     target.classList.add('hidden');
            // }

            target.addEventListener('animationend', () => {
            })
        })
    })
})
