const slider = document.querySelector(".container");
const prevBtn = document.querySelector(".header .btn .prev");
const nextBtn = document.querySelector(".header .btn .next");
const items = slider.querySelectorAll(".item");
const itemWidth = items[0].scrollWidth + 30;
const dots = document.querySelectorAll(".pagination .dot-container .dot");

let maxWidth = slider.scrollWidth - slider.clientWidth;
let isMouseDown = false;
let startX;
let scrollLeft;
window.addEventListener("resize", () => {
  maxWidth = slider.scrollWidth - slider.clientWidth;
});
slider.addEventListener("scroll", () => {
  let s = Math.round(slider.scrollLeft);
  prevBtn.classList.toggle("active", s > 0);
  nextBtn.classList.toggle("active", s < maxWidth);
  let index = Math.round(s / itemWidth);
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", index == i);
  });
});
slider.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  e.preventDefault();
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

slider.addEventListener("mouseup", () => {
  isMouseDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -itemWidth, behavior: "smooth" });
});
nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: itemWidth, behavior: "smooth" });
});
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dot.classList.add("active");
    slider.scrollTo({ left: itemWidth * index, behavior: "smooth" });
    dots.forEach((inactiveDot, removeIndex) => {
      if (removeIndex != index) {
        inactiveDot.classList.remove("active");
      }
    });
  });
});
