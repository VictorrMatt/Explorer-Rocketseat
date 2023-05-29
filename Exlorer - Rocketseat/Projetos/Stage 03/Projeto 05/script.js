const spans = document.querySelectorAll(".card h2 span");
const images = document.querySelectorAll(".card img");

spans.forEach((span, index) => {
  span.addEventListener("mouseover", () => {
    images[index].classList.add("hovered");
  });

  span.addEventListener("mouseout", () => {
    images[index].classList.remove("hovered");
  });
});
