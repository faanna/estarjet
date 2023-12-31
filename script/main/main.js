// visual;
var swiper = new Swiper(".visual", {
  loop: true,
  spaceBetween: 0,
  speed: 3000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2000,
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

// trip
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".trip .swiper-button-next",
    prevEl: ".trip .swiper-button-prev",
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

// 다구간이란?
const tooltip = document.querySelector(".tooltip");
const tooltip_box = document.querySelector(".tolltip_box");
const imformation = document.querySelector(".imformation");
const imfor = document.querySelector(".imfor");
const close = imfor.querySelector("a");

tooltip_box.addEventListener("click", () => {
  imformation.style.display = "block";
  close.addEventListener("click", () => {
    imformation.style.display = "none";
  });
});
