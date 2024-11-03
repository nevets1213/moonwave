var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 2,
      depth: 70,
      modifier: 2,
      slideShadows: true
    },
    mousewheel: {
    },
    spaceBetween: 40,
    loop: true,
  });
