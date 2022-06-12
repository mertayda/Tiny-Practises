const slide = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");
const left = document.getElementById("left");
const right = document.getElementById("right");

const SLIDES_COUNT = slide.length;

let current_slide = 0;

left.addEventListener("click", () => {
  current_slide--;
  if (current_slide < 0) {
    current_slide = SLIDES_COUNT - 1;
  }
  updateCarause();
});

right.addEventListener("click", () => {
  current_slide++;
  if (current_slide > SLIDES_COUNT - 1) {
    current_slide = 0;
  }
  updateCarause();
});

function updateCarause() {
  carousel.style.transform = `translateX(${
    -current_slide * slide[0].offsetWidth
  }px)`;
  document.body.style.background = `${slide[current_slide].getAttribute(
    "data-bg"
  )}`;
}
