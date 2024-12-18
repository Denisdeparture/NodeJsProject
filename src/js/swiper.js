import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination } from 'swiper/modules';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    centeredSlides: true,
    paginationClickable: true,
    autoplay: {
        enabled: true,
        delay: 5000
      },
      pagination: {
        el: '.swiper-pagination',
      },
});