//alert(" it?");

//////// SLIDER HOME
$(".slider-main_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    speed: 300,
    //loop: true,
    autoHeight: false,
    //centeredSlides: true,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 1,
    spaceBetween: "4%",
    rewind: false,
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
      disabledClass: "is-disabled",
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "4%",
      },
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: "4%",
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "2%",
      },
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true,
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled",
    },
    scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true,
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
  });
});

//////////
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
