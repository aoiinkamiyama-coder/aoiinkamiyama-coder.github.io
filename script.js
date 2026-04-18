const scrollButton = document.getElementById("scrollButton");
const aboutSection = document.getElementById("about");
const scrollItems = document.querySelectorAll(".scroll-show");
const heroName = document.querySelector(".hero-name");

scrollButton.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

scrollItems.forEach((item) => {
  observer.observe(item);
});

window.addEventListener("scroll", () => {
  const moveY = window.scrollY * 0.08;
  heroName.style.transform = `translateY(${moveY}px)`;
});
