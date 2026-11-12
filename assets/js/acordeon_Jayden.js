/* 4.1 · FUNCIÓN: ponerEstado
		 Abre o cierra UN acordeón.
			 - classList.toggle  → agrega o quita la clase "abierto" (el CSS hace el resto)
			 - aria-expanded     → avisa a lectores de pantalla si está abierto */
function ponerEstado(acordeon, abrir) {
	const boton = acordeon.querySelector(':scope > .acordeon-titulo > .acordeon-btn');
	acordeon.classList.toggle('abierto', abrir);
	boton.setAttribute('aria-expanded', String(abrir));
}

/* 4.2 · FUNCIÓN: alAtocar
	 Se ejecuta al hacer clic en un botón. */
function alAtocar(acordeon) {
	const abrir = !acordeon.classList.contains('abierto');   // ¿estaba cerrado? entonces abrir

	// Si vamos a abrir este, cerramos los demás que están a su mismo nivel,
	// para que se vea información de UNA sola palabra a la vez.
	if (abrir) {
		acordeon.parentElement
			.querySelectorAll(':scope > .acordeon')
			.forEach(function (otro) {
				if (otro !== acordeon) ponerEstado(otro, false);
			});
	}

	ponerEstado(acordeon, abrir);
}

/* 4.3 · PREPARAR TODOS LOS ACORDEONES
	 querySelectorAll busca cada ".acordeon" de la página.
	 forEach recorre la lista y a cada uno le:
		 a) conecta el botón con su panel (id + aria-controls), solo para accesibilidad
		 b) deja su estado inicial (abierto si tiene la clase "abierto")
		 c) le pone el "oído" de clic (addEventListener) */
document.querySelectorAll('.acordeon').forEach(function (acordeon, numero) {
	const boton = acordeon.querySelector(':scope > .acordeon-titulo > .acordeon-btn');
	const panel = acordeon.querySelector(':scope > .acordeon-panel');

	panel.id = 'panel-' + numero;                       // a) nombre único para el panel
	boton.setAttribute('aria-controls', panel.id);

	ponerEstado(acordeon, acordeon.classList.contains('abierto'));   // b)

	boton.addEventListener('click', function () {       // c)
		alAtocar(acordeon);
	});
});