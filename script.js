document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".section-title");
  const cards = document.querySelectorAll(".project-card");

  const animateSection = (isVisible) => {
    if (isVisible) {
      title.classList.add("animate-in");

      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add("animate-in");
        }, i * 300); // efeito escada nos cards
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
      threshold: 0.3,
    }
  );

  observer.observe(document.querySelector("#projects"));
});
