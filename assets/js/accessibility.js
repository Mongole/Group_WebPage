/* Codigo por Gemini para contenido de accesibilidad */

document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.getElementById('a11yToggle');
	const menu = document.getElementById('a11yMenu');
	const chkDark = document.getElementById('chkDarkMode');
	const chkHighVis = document.getElementById('chkHighVisibility');
	const chkLargeText = document.getElementById('chkLargeText');

	// Add this during script load to keep UI and CSS synced in Firefox:
	if (chkHighVis) {
		document.body.classList.toggle('disable-translucency', chkHighVis.checked);
	}

	// Toggle Popup
	toggleBtn.addEventListener('click', () => {
		const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
		toggleBtn.setAttribute('aria-expanded', !isExpanded);
		menu.hidden = isExpanded;
	});

	// Close when clicking outside
	document.addEventListener('click', (e) => {
		if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
			menu.hidden = true;
			toggleBtn.setAttribute('aria-expanded', 'false');
		}
	});

	// Close the accessibility menu with the keyboard.
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !menu.hidden) {
			menu.hidden = true;
			toggleBtn.setAttribute('aria-expanded', 'false');
			toggleBtn.focus();
		}
	});

	// Dark Mode Toggle Listener
	chkDark.addEventListener('change', (e) => {
		const enabled = e.target.checked;

		document.documentElement.classList.toggle('dark-mode', enabled);
		document.body.classList.toggle('dark-mode', enabled);
		localStorage.setItem('theme_dark', enabled);

		// Force header background repaint on index.html
		const header = document.querySelector('.header');
		if (header) {
			if (!enabled) {
				header.style.backgroundColor = '';
				header.style.backdropFilter = '';
			}
		}
	});

	// High Visibility Change Listener
	chkHighVis.addEventListener('change', (e) => {
		const enabled = e.target.checked;

		document.documentElement.classList.toggle('disable-translucency', enabled);
		document.body.classList.toggle('disable-translucency', enabled);
		localStorage.setItem('theme_high_vis', enabled);

		// Force style repaint for ambient visuals and borders
		const header = document.querySelector('.header');
		if (header && !enabled) {
			header.style.backdropFilter = '';
			header.style.webkitBackdropFilter = '';
		}
	});

	// Restore saved preferences
	if (localStorage.getItem('theme_dark') === 'true') {
		chkDark.checked = true;
		document.body.classList.add('dark-mode');
	}
	if (localStorage.getItem('theme_high_vis') === 'true') {
		chkHighVis.checked = true;
		document.body.classList.add('disable-translucency');
	}
});

// 1. Sync state on initial page load
const isLargeText = localStorage.getItem('theme_large_text') === 'true';
if (chkLargeText) chkLargeText.checked = isLargeText;

document.documentElement.classList.toggle('large-text', isLargeText);
document.body.classList.toggle('large-text', isLargeText);

// 2. Add event listener
if (chkLargeText) {
	chkLargeText.addEventListener('change', (e) => {
		const enabled = e.target.checked;
		document.documentElement.classList.toggle('large-text', enabled);
		document.body.classList.toggle('large-text', enabled);
		localStorage.setItem('theme_large_text', enabled);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	const a11yToggle = document.getElementById('a11yToggle');
	const a11yMenu = document.getElementById('a11yMenu');
	const a11yDropdown = document.querySelector('.a11y-dropdown');

	if (!a11yToggle || !a11yMenu || !a11yDropdown) return;

	function closeMenu(returnFocus = false) {
		if (!a11yMenu.hidden) {
			a11yMenu.hidden = true;
			a11yToggle.setAttribute('aria-expanded', 'false');
			if (returnFocus) a11yToggle.focus();
		}
	}

	// Close on Escape and return focus to the accessibility button
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !a11yMenu.hidden) {
			e.preventDefault();
			closeMenu(true);
		}
	});

	// Close automatically when tabbing completely out of the dropdown
	a11yDropdown.addEventListener('focusout', (e) => {
		if (!a11yDropdown.contains(e.relatedTarget)) {
			closeMenu(false);
		}
	});
});