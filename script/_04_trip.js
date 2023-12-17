var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let btnStart = document.querySelector(".btnStart");
let btnStop = document.querySelector(".btnStop");

btnStart.addEventListener("click", () => {
  swiper.autoplay.start();
});
btnStop.addEventListener("click", () => {
  swiper.autoplay.stop();
});
