//alert("does it?");

var swiper = new Swiper(".swiper.is-slider-thumb", {
  spaceBetween: 12,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".is-slider-centro", {
  spaceBetween: 12,
  autoplay: {
    delay: 5000,
  },
  /*
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        */
  thumbs: {
    swiper: swiper,
  },
});
