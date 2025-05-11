window.onload = function () {
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    loopedSlides: 4,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 400,
  });
};



