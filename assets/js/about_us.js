const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function (event) {
	event.preventDefault();
	formStatus.innerHTML = `
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<circle cx="12" cy="12" r="10"/>
				<path d="m9 12 2 2 4-4"/>
			</svg>
			<span><strong>Mensaje recibido (Demostración):</strong> Gracias por escribirnos. Esta es una vista previa visual y tu mensaje no se ha enviado.</span>
		`;
	this.reset();
});

// Clear the notice if the user starts typing a new message
contactForm.addEventListener('input', function () {
	if (formStatus.innerHTML !== '') {
		formStatus.innerHTML = '';
	}
});

const backToTopBtn = document.getElementById('backToTop');

function toggleBackToTop() {
	const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
	// Show once scrolled past 50% of the page (or at least 300px)
	const threshold = Math.max(scrollableHeight * 0.5, 300);
	if (window.scrollY >= threshold) {
		backToTopBtn.classList.add('visible');
	} else {
		backToTopBtn.classList.remove('visible');
	}
}

window.addEventListener('scroll', toggleBackToTop, { passive: true });
window.addEventListener('load', toggleBackToTop);

backToTopBtn.addEventListener('click', function () {
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	window.scrollTo({
		top: 0,
		behavior: prefersReducedMotion ? 'auto' : 'smooth'
	});
});