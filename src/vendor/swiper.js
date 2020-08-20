import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
export const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // init: false,
  slidesPerView: 'auto',
  loop: true,
  slideToClickedSlide: true,
  preventClicks: true,
  centeredSlides: true,
  effect: 'slide',
  speed: 350,
  spaceBetween: 16,
  grabCursor: true,
  // direction: 'horizontal',
  // slidesPerGroup: 4,
  // touchEventsTarget: 'wrapper',
  // centerInsufficientSlides: true,
  // freeMode: true,
  // spaceBetween: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    // dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    760: {
      slidesPerView: 'auto',
      spaceBetween: 8,
      centeredSlides: false,
      slideToClickedSlide: false,
      freeMode: true,
    },
    //   768: {
    //     // slidesPerView: 'auto',

    //     slidesPerView: 1,
    //     spaceBetween: 8,
    //     // freeMode: false,

    //     // centeredSlides: false,
    //     // slideToClickedSlide: false,
    //     // freeMode: false,
    //   }
  },
});
