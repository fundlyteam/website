import Swiper, {Pagination, Scrollbar} from 'swiper';
import 'swiper/swiper-bundle.min.css';

const benefitSwiper = new Swiper('#benefit-swiper', {
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

const processSwiper = new Swiper('#process-swiper', {
    modules: [Scrollbar],
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false
    },
});
