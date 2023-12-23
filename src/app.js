import anime from "animejs";
import Swiper,{ Autoplay,Navigation,Pagination,Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Swal from 'sweetalert2'

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
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
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

function hideMobileNav() {
    const mobileNav = document.getElementById('mobile-nav')
    mobileNav.classList.add('pointer-events-none');
    anime({
        targets: '#mobile-nav',
        keyframes: [
            {height: 0, duration: 100},
            {opacity: 0, duration: 0}
        ],
        easing: 'linear',
    });
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

function navMenu() {
    const menuButton = document.querySelectorAll('.menu-button');
    // menuButton.forEach(nbm => {
    //     nbm.addEventListener('click', e => {
    //         window.scrollTo({
    //             behavior: "smooth",
    //             top: document.querySelector(`#${nbm.getAttribute('data-target')}`).getBoundingClientRect().top - document.body.getBoundingClientRect().top - 20
    //
    //         })
    //     })
    // })
    const menuObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const area = entry.target.getAttribute('id');

                if (area === 'contact') {
                    menuButton.forEach(mb => mb.classList.remove('active'))
                    document.querySelector('[data-target="contact"]').classList.add('active')
                }
                if (area === 'about') {
                    menuButton.forEach(mb => mb.classList.remove('active'))
                    document.querySelector('[data-target="about"]').classList.add('active')
                }
                if (area === 'team') {
                    menuButton.forEach(mb => mb.classList.remove('active'))
                    document.querySelector('[data-target="team"]').classList.add('active')
                }
                if (area === 'products') {
                    menuButton.forEach(mb => mb.classList.remove('active'))
                    document.querySelector('[data-target="products"]').classList.add('active')
                }
                if (area === 'partnerships') {
                    menuButton.forEach(mb => mb.classList.remove('active'))
                    document.querySelector('[data-target="partnerships"]').classList.add('active')
                }
                if (area === 'home' || area === 'hero' || area === 'download') {
                    menuButton.forEach(mb => mb.classList.remove('active'))
                    document.querySelector('[data-target="home"]').classList.add('active')
                }
            }
        })
    }, {threshold: 0.9, rootMargin: "50px"})

    document.querySelectorAll('article').forEach(article => {
        menuObserver.observe(article);
    })
    document.querySelectorAll('section').forEach(section => {
        menuObserver.observe(section);
    })
    document.querySelectorAll('form').forEach(form => {
        menuObserver.observe(form);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    handleMobileNav();
    handleDownloadAppModal();
    handleDownloadAppForm();
    animateNumbers();
    navMenu();
})

$('#contact').submit(function(e){
    e.preventDefault();

    $.ajax({
        url: "https://ardouranalytics.com/fundly/api/Website/enquiry",
        type: "POST",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function(response) {
            $("#contact").trigger("reset"); // to reset form input fields
            Swal.fire({
                title: 'Thank You!',
                text: 'Someone from our team will reach out to you shortly.',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#025196'
            })
        },
        error: function(e) {
            console.log(e);
        }
    });
});

$('#send-app-link').submit(function(e){
    e.preventDefault();

    $.ajax({
        url: "https://ardouranalytics.com/fundly/api/Website/app",
        type: "POST",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function(response) {
            $("#send-app-link").trigger("reset"); // to reset form input fields
            document.getElementById('download-app-modal').classList.add('hidden');
            Swal.fire({
                title: 'Thank You!',
                text: 'You will receive an SMS from us with the link to download the app shortly!',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#025196'
            })
        },
        error: function(e) {
            console.log(e);
            document.getElementById('download-app-modal').classList.add('hidden');
        }
    });

});

$('#partnerships').submit(function(e){
    e.preventDefault();

    if(!document.getElementById('partnerships').checkValidity()) {
        return;
    }

    if($('#name').val() === ""){
        Swal.fire({
            title: 'Oops!',
            text: 'Please enter your name.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#025196'
        });
        return;
    }

    if($('#entityType').val() === ""){
        Swal.fire({
            title: 'Oops!',
            text: 'Please enter select entity type.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#025196'
        });
        return;
    }

    if($('#mobile').val() === ""){
        Swal.fire({
            title: 'Oops!',
            text: 'Please enter your mobile number.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#025196'
        });
        return;
    }

    // check if mobile number is valid and 10 digits
    if($('#mobile').val() != ""){
        if($('#mobile').val().length != 10){
            Swal.fire({
                title: 'Oops!',
                text: 'Please enter a valid 10 digit mobile number.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#025196'
            });
            return;
        }
    }

    if($('#email').val() === ""){
        Swal.fire({
            title: 'Oops!',
            text: 'Please enter your email.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#025196'
        });
        return;
    }

    if($('#email').val() != ""){
        // check if email is valid
        var email = $('#email').val();
        var atposition=email.indexOf("@");
        var dotposition=email.lastIndexOf(".");
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
            Swal.fire({
                title: 'Oops!',
                text: 'Please enter a valid email address.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#025196'
            });
            return;
        }
        
    }


    $.ajax({
        url: "https://ardouranalytics.com/fundly/api/Website/partnershipsEnquiry",
        type: "POST",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function(response) {
            $("#contact").trigger("reset"); // to reset form input fields
            Swal.fire({
                title: 'Thank You!',
                text: 'Someone from our team will reach out to you shortly.',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#025196'
            })
        },
        error: function(e) {
            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#025196'
            });
        }
    });
});
