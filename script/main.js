// gnb

const li = document.querySelectorAll(".gnb_manu>li");
const section = document.querySelectorAll(".menu");
li.forEach((el, index) => {
  el.addEventListener("mouseenter", (e) => {
    e.preventDefault();
    active(li, index);
    active(section, index);
  });
  el.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    stop(li, index);
    stop(section, index);
  });
});

function active(list, index) {
  for (let el of list) {
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}

function stop(list, index) {
  list[index].classList.remove("on");
}

// glober
// const glober = document.querySelector(".glober");

// glober.addEventListener("click", () => {
//   const span = glober.querySelector("span");
//   span.style.display = "block";

//   active(glober);
// });

// visual
var swiper = new Swiper("#main", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  loop: true,
  spaceBetween: 0,
  speed: 2000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
