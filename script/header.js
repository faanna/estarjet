// gnb

const li = document.querySelectorAll(".gnb_manu>li");
const section = document.querySelectorAll(".menu");
li.forEach((el, index) => {
  el.addEventListener("mouseenter", () => {
    active(li, index);
    active(section, index);
  });
  el.addEventListener("mouseleave", () => {
    stop(li, index);
    stop(section, index);
  });
});

section.forEach((el, index) => {
  el.addEventListener("mouseenter", () => {
    active(li, index);
    active(section, index);
  });
  el.addEventListener("mouseleave", () => {
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
const glober = document.querySelector(".glober");
const article = glober.querySelector("article");
const lan_box = document.querySelector(".language_box");
const glober_box = document.querySelector(".glober_box");

lan_box.addEventListener("click", () => {
  article.style.display = "block";
  glober_box.addEventListener("click", () => {
    article.style.display = "none";
  });
});
