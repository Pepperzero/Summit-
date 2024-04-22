//alert(" it?");

var swiper = new Swiper(".swiper.is-slider-thumb", {
  spaceBetween: 12,
  slidesPerView: 5,
  centerInsufficientSlides: true,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".swiper.is-slider-centro", {
  spaceBetween: 12,
  autoplay: {
    delay: 5000,
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper3 = new Swiper(".swiper.is-slider-related-posts", {
  spaceBetween: 12,
  slidesPerView: 4,
  slidesPerGroup: 4,
  centerInsufficientSlides: true,
  //loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
    disabledClass: "is-disabled",
  },
});

/*
navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0],
        disabledClass: "is-disabled"
      },
*/
