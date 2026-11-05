(() => {
  const nav = document.querySelector('.header-nav');
  const capsule = nav?.querySelector('.nav-capsule');
  if (!capsule) return;

  const links = [...nav.querySelectorAll('.nav-link')];
  let hoveredLink = null;
  let focusedLink = null;
  let highlightedLink = null;
  let lightPosition = null;
  let frame = null;

  function render() {
    frame = null;

    // Offset measurements stay stable while the pressed link scales visually.
    if (highlightedLink) {
      capsule.style.width = `${highlightedLink.offsetWidth}px`;
      capsule.style.height = `${highlightedLink.offsetHeight}px`;
      capsule.style.transform = `translate3d(${highlightedLink.offsetLeft}px, ${highlightedLink.offsetTop}px, 0)`;
    }

    nav.classList.toggle('is-engaged', Boolean(highlightedLink));
    links.forEach(link => link.classList.toggle('is-highlighted', link === highlightedLink));

    if (lightPosition) {
      const bounds = nav.getBoundingClientRect();
      nav.style.setProperty('--light-x', `${lightPosition.x - bounds.left}px`);
      nav.style.setProperty('--light-y', `${lightPosition.y - bounds.top}px`);
    } else {
      nav.style.removeProperty('--light-x');
      nav.style.removeProperty('--light-y');
    }
  }

  function scheduleRender() {
    if (frame === null) frame = requestAnimationFrame(render);
  }

  function highlight(link) {
    highlightedLink = link;
    scheduleRender();
  }

  function getLink(target) {
    const link = target?.closest?.('.nav-link');
    return links.includes(link) ? link : null;
  }

  links.forEach(link => {
    link.addEventListener('pointerenter', event => {
      if (event.pointerType === 'touch') return;
      hoveredLink = link;
      highlight(link);
    });

    // Native link navigation remains intact, including modified clicks.
    link.addEventListener('pointerdown', () => highlight(link));
  });

  nav.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    lightPosition = { x: event.clientX, y: event.clientY };
    scheduleRender();
  });

  function resetPointer() {
    hoveredLink = null;
    lightPosition = null;
    highlight(focusedLink);
  }

  nav.addEventListener('pointerleave', resetPointer);
  nav.addEventListener('pointercancel', resetPointer);

  nav.addEventListener('focusin', event => {
    focusedLink = getLink(event.target);
    highlight(focusedLink);
  });

  nav.addEventListener('focusout', event => {
    focusedLink = getLink(event.relatedTarget);
    highlight(focusedLink || hoveredLink);
  });

  // Recalculate after responsive wrapping, zoom or font loading changes sizes.
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(scheduleRender);
    observer.observe(nav);
    links.forEach(link => observer.observe(link));
  } else {
    window.addEventListener('resize', scheduleRender);
  }

  nav.classList.add('is-enhanced');
  focusedLink = getLink(document.activeElement);
  highlight(focusedLink);
})();
