const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const scrollBehavior = reducedMotion ? "auto" : "smooth";

document.querySelectorAll(".carousel").forEach((carousel) => {
  const track = carousel.querySelector(".carousel__track");
  const previous = carousel.querySelector('[data-carousel-direction="previous"]');
  const next = carousel.querySelector('[data-carousel-direction="next"]');

  const updateButtons = () => {
    const end = track.scrollWidth - track.clientWidth;
    previous.disabled = track.scrollLeft <= 1;
    next.disabled = track.scrollLeft >= end - 1;
  };

  const move = (direction) => {
    const card = track.querySelector(".carousel__item");
    const distance = card.offsetWidth + Number.parseFloat(getComputedStyle(track).gap || 0);
    track.scrollBy({ left: direction * distance, behavior: scrollBehavior });
  };

  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
});

const testimonialList = document.querySelector(".testimonials__list");
const testimonialItems = testimonialList ? [...testimonialList.querySelectorAll(".testimonials__item")] : [];
const testimonialDots = [...document.querySelectorAll(".testimonials__dot")];

if (testimonialList && testimonialItems.length && testimonialDots.length) {
  const setActiveTestimonial = (index) => {
    testimonialDots.forEach((dot, dotIndex) => {
      dot.setAttribute("aria-current", String(dotIndex === index));
    });
  };

  const updateActiveTestimonial = () => {
    const listCenter = testimonialList.scrollLeft + testimonialList.clientWidth / 2;
    const closestIndex = testimonialItems.reduce((closest, item, index) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const closestCenter = testimonialItems[closest].offsetLeft + testimonialItems[closest].offsetWidth / 2;
      return Math.abs(itemCenter - listCenter) < Math.abs(closestCenter - listCenter) ? index : closest;
    }, 0);
    setActiveTestimonial(closestIndex);
  };

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      testimonialItems[index].scrollIntoView({ behavior: scrollBehavior, block: "nearest", inline: "center" });
      setActiveTestimonial(index);
    });
  });

  testimonialList.addEventListener("scroll", updateActiveTestimonial, { passive: true });
  window.addEventListener("resize", updateActiveTestimonial);
  updateActiveTestimonial();
}
