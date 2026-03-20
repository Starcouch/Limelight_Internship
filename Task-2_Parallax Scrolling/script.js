const sections = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const rect = section.getBoundingClientRect();
    const speed = 0.4;

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = rect.top * speed;
      section.style.backgroundPositionY = `${offset}px`;
    }

  });

});