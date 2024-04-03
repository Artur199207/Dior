const swiper = new Swiper('.top__swiper', {
    effect: 'fade',
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const swiperAboute = new Swiper(".aboute__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });