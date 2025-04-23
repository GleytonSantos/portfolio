document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".section-title");
  const cards = document.querySelectorAll(".project-card");

  const animateSection = (isVisible) => {
    if (isVisible) {
      title.classList.add("animate-in");

      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add("animate-in");
        }, i * 300);
      });
    } else {
      title.classList.remove("animate-in");
      cards.forEach((card) => card.classList.remove("animate-in"));
    }
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      animateSection(entry.isIntersecting);
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(document.querySelector("#projects"));
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
const menuLinks = document.querySelectorAll("#mobile-menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
