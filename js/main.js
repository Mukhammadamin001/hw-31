// Mobile menu
(function () {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  if (!header || !burger) return;

  const setOpen = (open) => {
    header.classList.toggle('is-menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  burger.addEventListener('click', () => setOpen(!header.classList.contains('is-menu-open')));
  header.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();

// Working process accordion: one step open at a time
(function () {
  const steps = document.querySelectorAll('.step');

  steps.forEach((step) => {
    step.querySelector('.step__head').addEventListener('click', () => {
      const willOpen = !step.classList.contains('is-open');

      steps.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.step__head').setAttribute('aria-expanded', 'false');
      });

      if (willOpen) {
        step.classList.add('is-open');
        step.querySelector('.step__head').setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

// Testimonials slider (infinite, active slide always centred)
(function () {
  const slider = document.querySelector('[data-slider]');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.review'));
  const dotsWrap = slider.querySelector('.slider__dots');
  const count = slides.length;
  let active = 0;

  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slider__dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
    dot.innerHTML = '<svg aria-hidden="true"><use href="#i-star"/></svg>';
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  // Offset of slide i relative to the active one, wrapped to the range around 0
  const offsetOf = (i) => {
    let offset = (i - active + count) % count;
    if (offset > count / 2) offset -= count;
    return offset;
  };

  function render(initial = false) {
    slides.forEach((slide, i) => {
      const prev = Number(slide.style.getPropertyValue('--offset') || 0);
      const next = offsetOf(i);
      // a slide that wraps from one side to the other jumps without animating
      slide.classList.toggle('no-anim', initial || Math.abs(next - prev) > 1);
      slide.style.setProperty('--offset', next);
      slide.setAttribute('aria-hidden', String(next !== 0));
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === active);
      dot.setAttribute('aria-selected', String(i === active));
    });
  }

  function goTo(index) {
    active = (index + count) % count;
    render();
  }

  slider.querySelector('.slider__arrow--prev').addEventListener('click', () => goTo(active - 1));
  slider.querySelector('.slider__arrow--next').addEventListener('click', () => goTo(active + 1));

  render(true);
})();

// Demo forms: no backend, just reset after submit
document.querySelectorAll('.form, .subscribe').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });
});
