(() => {
  const loader = document.querySelector('.page-loader');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!loader || reducedMotion.matches) return;

  const content = [...document.querySelectorAll('body > header, body > main, body > footer')];
  const startedAt = performance.now();
  let isFinishing = false;
  let revealTimer;
  let cleanupTimer;

  loader.hidden = false;
  document.body.classList.add('is-entering');
  content.forEach(element => { element.inert = true; });

  function cleanup() {
    clearTimeout(revealTimer);
    clearTimeout(cleanupTimer);
    clearTimeout(maxWait);
    loader.hidden = true;
    document.body.classList.remove('is-entering');
    content.forEach(element => { element.inert = false; });
    reducedMotion.removeEventListener('change', onMotionChange);
    window.removeEventListener('load', reveal);
  }

  function reveal() {
    if (isFinishing) return;
    isFinishing = true;
    clearTimeout(maxWait);
    // Keep the introduction brief, even when fonts or other assets load slowly.
    revealTimer = setTimeout(() => {
      loader.classList.add('is-leaving');
      document.body.classList.add('is-ready');
      cleanupTimer = setTimeout(cleanup, 400);
    }, Math.max(0, 550 - (performance.now() - startedAt)));
  }

  function onMotionChange(event) {
    if (event.matches) cleanup();
  }

  const maxWait = setTimeout(reveal, 1600);
  reducedMotion.addEventListener('change', onMotionChange);
  if (document.readyState === 'complete') reveal();
  else window.addEventListener('load', reveal, { once: true });

  // A restored history entry should return directly to the usable page.
  window.addEventListener('pageshow', event => {
    if (event.persisted) cleanup();
  });
})();
