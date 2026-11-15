/* Codigo por Gemini para contenido de accesibilidad */

document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.getElementById('a11yToggle');
	const menu = document.getElementById('a11yMenu');
	const dropdown = document.querySelector('.a11y-dropdown');
	const chkDark = document.getElementById('chkDarkMode');
	const chkHighVis = document.getElementById('chkHighVisibility');
	const chkLargeText = document.getElementById('chkLargeText');

	if (!toggleBtn || !menu || !dropdown) return;

	function closeMenu(returnFocus = false) {
		if (!menu.hidden) {
			menu.hidden = true;
			toggleBtn.setAttribute('aria-expanded', 'false');
			if (returnFocus) toggleBtn.focus();
		}
	}

	// Toggle Popup
	toggleBtn.addEventListener('click', () => {
		const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
		toggleBtn.setAttribute('aria-expanded', !isExpanded);
		menu.hidden = isExpanded;
	});

	// Close only when clicking/tapping outside .a11y-dropdown
	document.addEventListener('pointerdown', (e) => {
		if (!menu.hidden && !dropdown.contains(e.target)) {
			closeMenu(false);
		}
	});

	// Close on Escape and return focus to the toggle button
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !menu.hidden) {
			e.preventDefault();
			closeMenu(true);
		}
	});

	// Close only when a keyboard user Tabs past the first or last focusable item inside .a11y-dropdown
	dropdown.addEventListener('keydown', (e) => {
		if (e.key !== 'Tab' || menu.hidden) return;

		const focusables = Array.from(
			dropdown.querySelectorAll('button, input, [tabindex]:not([tabindex="-1"])')
		);
		if (!focusables.length) return;

		const first = focusables[0];
		const last = focusables[focusables.length - 1];

		if (e.shiftKey && document.activeElement === first) {
			closeMenu(false);
		} else if (!e.shiftKey && document.activeElement === last) {
			closeMenu(false);
		}
	});

	// Close on Escape and return focus to the toggle button
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !menu.hidden) {
			e.preventDefault();
			closeMenu(true);
		}
	});

	// Dark Mode Toggle Listener
	if (chkDark) {
		chkDark.addEventListener('change', (e) => {
			const enabled = e.target.checked;
			document.documentElement.classList.toggle('dark-mode', enabled);
			document.body.classList.toggle('dark-mode', enabled);
			localStorage.setItem('theme_dark', enabled);

			const header = document.querySelector('.header');
			if (header && !enabled) {
				header.style.backgroundColor = '';
				header.style.backdropFilter = '';
			}
		});
	}

	// High Visibility Change Listener
	if (chkHighVis) {
		chkHighVis.addEventListener('change', (e) => {
			const enabled = e.target.checked;
			document.documentElement.classList.toggle('disable-translucency', enabled);
			document.body.classList.toggle('disable-translucency', enabled);
			localStorage.setItem('theme_high_vis', enabled);

			const header = document.querySelector('.header');
			if (header && !enabled) {
				header.style.backdropFilter = '';
				header.style.webkitBackdropFilter = '';
			}
		});
	}

	// Large Text Change Listener
	if (chkLargeText) {
		chkLargeText.addEventListener('change', (e) => {
			const enabled = e.target.checked;
			document.documentElement.classList.toggle('large-text', enabled);
			document.body.classList.toggle('large-text', enabled);
			localStorage.setItem('theme_large_text', enabled);
		});
	}

	// Restore & sync saved preferences on load
	const isDark = localStorage.getItem('theme_dark') === 'true';
	const isHighVis = localStorage.getItem('theme_high_vis') === 'true';
	const isLargeText = localStorage.getItem('theme_large_text') === 'true';

	if (chkDark) chkDark.checked = isDark;
	document.documentElement.classList.toggle('dark-mode', isDark);
	document.body.classList.toggle('dark-mode', isDark);

	if (chkHighVis) chkHighVis.checked = isHighVis;
	document.documentElement.classList.toggle('disable-translucency', isHighVis);
	document.body.classList.toggle('disable-translucency', isHighVis);

	if (chkLargeText) chkLargeText.checked = isLargeText;
	document.documentElement.classList.toggle('large-text', isLargeText);
	document.body.classList.toggle('large-text', isLargeText);
});