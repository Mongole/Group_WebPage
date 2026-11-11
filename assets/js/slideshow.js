(() => {
  const carousel = document.querySelector('[data-slideshow]');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('[data-slide]')];
  if (slides.length < 2) return;

  const dots = [...carousel.querySelectorAll('[data-slide-to]')];
  const count = carousel.querySelector('[data-slide-current]');
  const status = carousel.querySelector('[data-slide-status]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let focused = false;
  let hovered = false;
  let visible = true;
  let timer;

  function schedule() {
    clearTimeout(timer);
    if (motion.matches || focused || hovered || !visible || document.hidden) return;
    timer = setTimeout(() => show(current + 1), 6000);
  }

  function show(index, manual = false) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      const active = position === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      dots[position].setAttribute('aria-pressed', String(active));
    });
    count.textContent = String(current + 1);
    if (manual) {
      status.textContent = `Foto ${current + 1} de ${slides.length}: ${slides[current].querySelector('h2').textContent}`;
    }
    schedule();
  }

  carousel.querySelector('[data-slide-prev]').addEventListener('click', () => show(current - 1, true));
  carousel.querySelector('[data-slide-next]').addEventListener('click', () => show(current + 1, true));
  dots.forEach(dot => dot.addEventListener('click', () => show(Number(dot.dataset.slideTo), true)));

  // Keep photos still while a keyboard user reads or operates the controls.
  carousel.addEventListener('focusin', event => {
    focused = event.target.matches(':focus-visible');
    schedule();
  });
  carousel.addEventListener('focusout', event => {
    focused = Boolean(event.relatedTarget && carousel.contains(event.relatedTarget) && event.relatedTarget.matches(':focus-visible'));
    schedule();
  });
  carousel.addEventListener('pointerdown', event => {
    focused = false;
    if (event.pointerType === 'touch') hovered = false;
    schedule();
  });
  carousel.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      focused = true;
      show(current + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });
  carousel.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'touch') { hovered = true; schedule(); }
  });
  carousel.addEventListener('pointerleave', event => {
    if (event.pointerType !== 'touch') { hovered = false; schedule(); }
  });
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', schedule);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      schedule();
    }, { threshold: .15 }).observe(carousel);
  }

  carousel.querySelector('.slideshow-controls').hidden = false;
  schedule();
})();
