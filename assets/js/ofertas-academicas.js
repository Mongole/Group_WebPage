document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.program-header').forEach((btn) => {
		btn.addEventListener('click', () => {
			const card = btn.closest('.program');
			const willOpen = !card.classList.contains('open');

			document.querySelectorAll('.program.open').forEach((c) => {
				c.classList.remove('open');
				c.querySelector('.program-header').setAttribute('aria-expanded', 'false');
			});

			if (willOpen) {
				card.classList.add('open');
				btn.setAttribute('aria-expanded', 'true');
			}
		});
	});
});