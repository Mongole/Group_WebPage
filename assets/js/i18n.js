/* Bilingual ES / EN Translation System for SC-TECH */
const TRANSLATIONS = {
	es: {
		// Shared Header, Accessibility & Footer
		"brand.sub": "DE PUERTO RICO",
		"nav.skip": "Ir al contenido",
		"nav.home": "Inicio",
		"nav.programs": "Ofertas Académicas",
		"nav.map": "Mapa del Recinto",
		"nav.about": "Sobre Nosotros",
		"a11y.title": "Accesibilidad",
		"a11y.darkmode": "Modo Oscuro",
		"a11y.highvis": "Alta Visibilidad (Sin Transparencias)",
		"a11y.augtext": "Texto Ampliado",
		"a11y.lang": "Idioma (English)",
		"footer.lead": "SCTECH de Puerto Rico",
		"footer.tail": "Tu talento. Tu camino. Tu futuro.",

		// Home (index.html)
		"home.hero.title": "El futuro tiene<br>tu <em>nombre.</em>",
		"home.hero.intro": "Transforma tu curiosidad en conocimiento y tus ideas en oportunidades. Encuentra tu camino en SCTECH de Puerto Rico.",
		"home.hero.loc": "Ciencia y tecnología, desde Puerto Rico.",
		"home.fig1.tit": "Las ideas crecen en comunidad.",
		"home.fig1.parr": "Comparte tu curiosidad. Descubre otras perspectivas.",
		"home.fig2.tit": "Una pregunta abre nuevas posibilidades.",
		"home.fig2.parr": "La ciencia empieza con las ganas de saber más.",
		"home.fig3.tit": "Imagina lo que puedes crear.",
		"home.fig3.parr": "Acércate a la tecnología. Dale forma a tu próxima idea.",
		"home.gallery": "Fotografías ilustrativas de la experiencia universitaria.",
		"home.link1.tit": "Encuentra tu camino.",
		"home.link1.parr": "Explora nuestra oferta académica y empieza a imaginar tu futuro.",
		"home.link1.sub": "Ver ofertas académicas",
		"home.link2.tit": "Conoce tu espacio.",
		"home.link2.parr": "Recorre el campus virtual en 3D y familiarízate con sus espacios.",
		"home.link2.sub": "Explorar el recinto",
		"home.link3.tit": "Conoce SC-TECH<br>de Puerto Rico.",
		"home.link3.parr": "Ciencia, tecnología y nuevas posibilidades para tu futuro. Conoce nuestra universidad y lo que nos inspira.",
		"home.link3.sub": "Más sobre nosotros",

		// Ofertas Académicas Hero
		"programs.title": "Nuestra<br>Oferta <span>Académica</span>",

		// About Us Hero
		"about.title": "Aprender para <em>imaginar</em> lo que sigue."
	},
	en: {
		// Shared Header, Accessibility & Footer
		"brand.sub": "OF PUERTO RICO",
		"nav.skip": "Skip to content",
		"nav.home": "Home",
		"nav.programs": "Academic Programs",
		"nav.map": "Campus Map",
		"nav.about": "About Us",
		"a11y.title": "Accessibility",
		"a11y.darkmode": "Dark Mode",
		"a11y.highvis": "High Visibility (No Transparency)",
		"a11y.augtext": "Large Text",
		"a11y.lang": "Language (English)",
		"footer.lead": "SCTECH of Puerto Rico",
		"footer.tail": "Your talent. Your path. Your future.",

		// Home (index.html)
		"home.hero.title": "The future has<br>your <em>name.</em>",
		"home.hero.intro": "Turn your curiosity into knowledge and your ideas into opportunities. Find your path at SCTECH of Puerto Rico.",
		"home.hero.loc": "Science and technology, from Puerto Rico.",
		"home.fig1.tit": "Ideas grow in community.",
		"home.fig1.parr": "Share your curiosity. Discover new perspectives.",
		"home.fig2.tit": "One question opens new possibilities.",
		"home.fig2.parr": "Science begins with the desire to learn more.",
		"home.fig3.tit": "Imagine what you can create.",
		"home.fig3.parr": "Get closer to technology. Shape your next big idea.",
		"home.gallery": "Illustrative photographs of the university experience.",
		"home.link1.tit": "Find your path.",
		"home.link1.parr": "Explore our academic offerings and start imagining your future.",
		"home.link1.sub": "View academic programs",
		"home.link2.tit": "Know your space.",
		"home.link2.parr": "Tour the virtual 3D campus and get familiar with its spaces.",
		"home.link2.sub": "Explore the campus",
		"home.link3.tit": "Discover SC-TECH<br>of Puerto Rico.",
		"home.link3.parr": "Science, technology, and new possibilities for your future. Learn about our university and what inspires us.",
		"home.link3.sub": "More about us",

		// Ofertas Académicas Hero
		"programs.title": "Our<br>Academic <span>Programs</span>",

		// About Us Hero
		"about.title": "Learn to <em>imagine</em> what comes next."
	}
};

/* Automatic phrase dictionary (Spanish -> English) for all remaining untagged page content */
const PHRASE_MAP = {
	// Page Titles
	"SC-TECH de Puerto Rico": "SC-TECH of Puerto Rico",
	"Ofertas Académicas | SC-TECH de Puerto Rico": "Academic Programs | SC-TECH of Puerto Rico",
	"Campus Map | SC-TECH de Puerto Rico": "Campus Map | SC-TECH of Puerto Rico",
	"About Us | SC-TECH de Puerto Rico": "About Us | SC-TECH of Puerto Rico",

	// Ofertas Académicas (ofertas-academicas.html)
	"OFERTA ACADÉMICA": "ACADEMIC OFFERINGS",
	"Programas enfocados en las Ciencias de Computación y las nuevas tecnologías, con una formación práctica, innovadora y alineada a la industria.":
		"Programs focused on Computer Science and emerging technologies, offering practical, innovative, industry-aligned training.",
	"Programa principal": "Core Program",
	"Especialidades": "Specializations",
	"Programas asociados": "Associate Programs",
	"Cursos": "Courses",
	"Herramientas": "Tools",

	// Program 1: Ciencias de Computación
	"Ciencias de Computación": "Computer Science",
	"Fundamentos y especialidades en programación y computación.": "Fundamentals and specializations in programming and computing.",
	"Especialidad general. Ofrece los conocimientos básicos de todas las especialidades tecnológicas disponibles en SC-TECH, permitiendo a los estudiantes conocer diferentes áreas de la computación antes de especializarse.":
		"General major. Provides foundational knowledge across all technological specialties available at SC-TECH, allowing students to explore different areas of computing before specializing.",
	"Especialidades disponibles": "Available specializations",

	// Program 2: Desarrollo de Software
	"Desarrollo de Software": "Software Development",
	"Diseño, creación y mantenimiento de programas y aplicaciones.": "Design, creation, and maintenance of software programs and applications.",
	"Se enfoca en el diseño, creación y mantenimiento de programas y aplicaciones informáticas. Los estudiantes aprenderán los fundamentos necesarios para desarrollar soluciones tecnológicas utilizando diferentes lenguajes de programación.":
		"Focuses on designing, building, and maintaining computer programs and applications. Students learn the core foundations needed to build tech solutions across multiple programming languages.",
	"Programación en C++": "C++ Programming",
	"Programación en Python": "Python Programming",
	"Programación en Java": "Java Programming",
	"Programación en C#": "C# Programming",
	"Programación en Go (Golang)": "Go (Golang) Programming",
	"Programación en Rust": "Rust Programming",

	// Program 3: Desarrollo Web
	"Desarrollo Web": "Web Development",
	"Creación de páginas web y aplicaciones digitales.": "Creation of websites and digital applications.",
	"Se especializa en la creación y mantenimiento de páginas y aplicaciones web modernas. Los estudiantes adquirirán conocimientos sobre el desarrollo de interfaces, servidores y sistemas que permiten el funcionamiento de plataformas digitales.":
		"Specializes in building and maintaining modern websites and web applications. Students gain skills in user interfaces, servers, and systems that power digital platforms.",
	"Front-End (lo que ve el usuario)": "Front-End (what the user sees)",
	"Back-End (servidor)": "Back-End (server-side)",
	"Full Stack: combina Front-End y Back-End.": "Full Stack: combines Front-End and Back-End.",

	// Program 4: Aplicaciones Móviles
	"Aplicaciones Móviles": "Mobile Applications",
	"Desarrollo de Aplicaciones Móviles": "Mobile App Development",
	"Diseño y programación de aplicaciones para iOS y Android.": "Design and programming of iOS and Android applications.",
	"Se enfoca en el diseño y desarrollo de aplicaciones para dispositivos móviles. Los estudiantes aprenderán a crear soluciones digitales funcionales e interactivas para diferentes sistemas operativos.":
		"Focuses on designing and developing applications for mobile devices. Students learn to build functional, interactive digital solutions across mobile operating systems.",

	// Program 5: IA y Ciencia de Datos
	"Inteligencia Artificial y Ciencia de Datos": "Artificial Intelligence & Data Science",
	"Sistemas inteligentes, análisis de datos y aprendizaje automático.": "Intelligent systems, data analysis, and machine learning.",
	"Explora las tecnologías que permiten a las computadoras analizar información, identificar patrones y desarrollar sistemas inteligentes. Los estudiantes adquirirán conocimientos sobre aprendizaje automático, procesamiento de datos y aplicaciones de inteligencia artificial.":
		"Explores technologies that enable computers to analyze information, recognize patterns, and build intelligent systems, covering machine learning, data processing, and AI applications.",
	"Python para IA": "Python for AI",
	"Ciencia de Datos": "Data Science",
	"Análisis de Datos": "Data Analysis",
	"Redes Neuronales": "Neural Networks",
	"Procesamiento de Lenguaje Natural (NLP)": "Natural Language Processing (NLP)",

	// Program 6: Ciberseguridad
	"Ciberseguridad": "Cybersecurity",
	"Protección de sistemas informáticos, redes y datos digitales.": "Protection of computer systems, networks, and digital data.",
	"Se enfoca en la protección de sistemas informáticos, redes y datos frente a amenazas digitales. Los estudiantes aprenderán a identificar vulnerabilidades, prevenir ataques y aplicar estrategias de seguridad tecnológica.":
		"Focuses on protecting computer systems, networks, and data against digital threats. Students learn to identify vulnerabilities, prevent attacks, and apply security strategies.",
	"Seguridad en Redes": "Network Security",
	"Análisis Forense Digital": "Digital Forensics",
	"Seguridad en la Nube": "Cloud Security",
	"Certificaciones populares": "Popular certifications",

	// Program 7: Computación en la Nube
	"Computación en la Nube": "Cloud Computing",
	"Computación en la Nube (Cloud Computing)": "Cloud Computing",
	"Administración de servicios e infraestructura en la nube.": "Administration of cloud services and infrastructure.",
	"Introduce las tecnologías que permiten almacenar, administrar y procesar información mediante servicios en la nube. Los estudiantes aprenderán los fundamentos de las infraestructuras digitales y su aplicación en entornos empresariales.":
		"Introduces technologies for storing, managing, and processing information via cloud services, covering digital infrastructure fundamentals for enterprise environments.",

	// Program 8: Bases de Datos
	"Bases de Datos": "Databases",
	"Diseño, organización y administración de información digital.": "Design, organization, and administration of digital information.",
	"Se especializa en la organización, almacenamiento y administración de información digital. Los estudiantes aprenderán a diseñar y gestionar sistemas que permitan acceder a los datos de manera eficiente y segura.":
		"Specializes in organizing, storing, and administering digital information. Students learn to design and manage systems for efficient, secure data access.",
	"Diseño de bases de datos": "Database design",
	"Consultas SQL": "SQL queries",
	"Administración de datos": "Data administration",

	// Program 9: Redes y Sistemas
	"Redes y Sistemas": "Networks & Systems",
	"Configuración, mantenimiento y administración de sistemas.": "System configuration, maintenance, and administration.",
	"Se enfoca en la instalación, configuración y administración de redes y sistemas informáticos. Los estudiantes adquirirán conocimientos sobre conectividad, servidores y mantenimiento de infraestructuras tecnológicas.":
		"Focuses on installing, configuring, and administering computer networks and systems, covering connectivity, servers, and IT infrastructure maintenance.",
	"Administración de Windows Server": "Windows Server Administration",
	"Virtualización": "Virtualization",
	"Administración de redes": "Network administration",

	// Program 10: Videojuegos
	"Desarrollo de Videojuegos": "Game Development",
	"Creación de videojuegos y experiencias digitales interactivas.": "Creation of video games and interactive digital experiences.",
	"Introduce los fundamentos del diseño, programación y creación de videojuegos. Los estudiantes aprenderán a desarrollar experiencias interactivas mediante herramientas y tecnologías utilizadas en la industria.":
		"Introduces the fundamentals of video game design, programming, and production using industry-standard tools and engines.",
	"Diseño de videojuegos": "Game design",
	"Realidad Virtual y Aumentada": "Virtual & Augmented Reality",

	// Program 11: Automatización y DevOps
	"Automatización y DevOps": "Automation & DevOps",
	"Automatización de procesos y administración del desarrollo de software.": "Process automation and software delivery management.",
	"Se enfoca en la optimización y automatización de los procesos de desarrollo y administración de software. Los estudiantes aprenderán técnicas que permiten mejorar la colaboración, eficiencia y entrega de aplicaciones tecnológicas.":
		"Focuses on optimizing and automating software development and operations workflows to improve collaboration, efficiency, and deployment.",
	"Git y GitHub": "Git & GitHub",

	// Program 12: Tecnología Empresarial
	"Tecnología Empresarial": "Enterprise Technology",
	"Gestión y optimización empresarial con herramientas tecnológicas.": "Business management and optimization with enterprise tech tools.",
	"Explora el uso de herramientas digitales para mejorar la administración y productividad de las organizaciones. Los estudiantes adquirirán conocimientos sobre análisis de información, automatización de procesos y gestión de recursos empresariales.":
		"Explores digital tools to improve organizational management and productivity, including business analytics, process automation, and enterprise resource management.",
	"Excel Avanzado": "Advanced Excel",
	"CRM y ERP": "CRM & ERP",

	// Why SC-TECH Sidebar
	"¿Por qué estudiar en SC-TECH?": "Why study at SC-TECH?",
	"Ofrecemos una educación de calidad, práctica y actualizada en las Ciencias de Computación, con laboratorios modernos, profesores especializados y programas alineados a la industria tecnológica.":
		"We offer quality, hands-on, up-to-date education in Computer Science with modern labs, specialized faculty, and industry-aligned programs.",
	"Educación actualizada": "Up-to-date education",
	"Proyectos prácticos": "Hands-on projects",
	"Profesores especializados": "Specialized faculty",
	"Preparación profesional": "Career readiness",
	"¡Construye tu futuro en SC-TECH! ↗": "Build your future at SC-TECH! ↗",

	// Campus Map (Campus_Map.html)
	"Recinto Virtual 3D - SC-TECH": "3D Virtual Campus - SC-TECH",
	"Bienvenido al mapa interactivo de SC-TECH de Puerto Rico. Aquí podrás explorar nuestro recinto de manera virtual y familiarizarte con el plano de las instalaciones. Hay varias herramientas que podrán utilizar para una exploración más cómoda de nuestra universidad.":
		"Welcome to the interactive map of SC-TECH of Puerto Rico. Here you can virtually explore our campus and get familiar with the facility layout using built-in tools designed for comfortable exploration.",
	"Sobre el menú": "About the menu",
	"Aquí podrás conocer sobre las funciones del menú interactivo en el mapa:":
		"Learn about the interactive map menu controls:",
	"Vista mapa/orbita:": "Map / Orbit view:",
	"Aquí podrás visualizar todo el recinto y podrás interactuar para acercar, disminuir y mover.":
		"View the entire campus from above and zoom, pan, or rotate around the grounds.",
	"Caminar por el recinto:": "Walk around campus:",
	"Entrarás en perspectiva en primera persona y podrás moverte por todo el mapa para observar todo el recinto.":
		"Enter first-person perspective and walk freely across the map to inspect the campus up close.",
	"Volver a vista general:": "Return to overview:",
	"Restaurará la cámara a la vista mapa/órbita.": "Resets the camera back to the map/orbit overview.",
	"Mostrar/Ocultar Rotulos:": "Show / Hide Labels:",
	"Mostrará u ocultará las marcas de identificación de los edificios del recinto.":
		"Toggles identification markers above campus buildings.",
	"Modo dia/noche:": "Day / Night mode:",
	"Cambiará el estado del mapa a día o a noche, cambiando la iluminación.":
		"Switches the campus environment lighting between day and night.",
	"Sobre las instalaciones": "About the facilities",
	"Aquí podrás conocer sobre los edificios que forman nuestro recinto; Este terreno consta de 9 edificios en los que se encontraran:":
		"Learn about the buildings that make up our campus; the grounds feature 9 buildings including:",
	"Estacionamiento y seguridad:": "Parking & Security:",
	"Aquí se encontrara la seguridad del recinto como guardias de seguridad y vigilancia y las áreas de estacionamiento.":
		"Houses campus security personnel, surveillance operations, and student/staff parking areas.",
	"Servicios de emergencia:": "Emergency Services:",
	"Aquí se encontrara la área de enfermería en casos de emergencia para que puedan ser rápidamente atendidos.":
		"Houses the campus infirmary and rapid-response emergency care unit.",
	"Administracion:": "Administration:",
	"Aquí se encontrará la Administración de Empresas, Contabilidad, Finanzas, Facultad Académica, en donde se ayudará al estudiante con todo el tema de la economía.":
		"Houses Business Administration, Accounting, Finance, and Academic Faculty offices assisting students with financial matters.",
	"Torre de vigilancia:": "Watchtower:",
	"Aquí se encuentra parte de seguridad para la vigilancia y monitoreo del recinto.":
		"Dedicated campus security monitoring and surveillance post.",
	"Edificio central:": "Central Building:",
	"Aquí se encuentra el admisiones y servicio estudiantil para ayudar y solucionar toda pregunta y problema que tengan los estudiantes y matrícula de estudiantes.":
		"Houses Admissions and Student Services to assist with enrollment and student inquiries.",
	"Alas adminitrativa este:": "East Administrative Wing:",
	"Aquí se encontrará administración, decanato, asuntos académicos, recursos humanos para ayudar a los estudiantes en temas académicos.":
		"Houses Administration, the Dean's Office, Academic Affairs, and Human Resources to support students with academic matters.",
	"Ala académica oeste:": "West Academic Wing:",
	"Aquí se encontrará el área de ingeniería, ciencias naturales y laboratorios académicos.":
		"Houses Engineering, Natural Sciences, and academic laboratories.",
	"Aulas de clase:": "Classrooms:",
	"Aquí se encontrarán las aulas de clase de todos los cursos que ofrece este recinto.":
		"Houses the lecture halls and classrooms for all courses offered on campus.",
	"Controles de Navegación": "Navigation Controls",
	"Modo Órbita:": "Orbit Mode:",
	"Modo Caminar:": "Walk Mode:",
	"Mapa Interactivo 3D": "3D Interactive Map",
	"Explora los 9 edificios del recinto en primera persona o vista orbital. Haz clic abajo para iniciar el entorno 3D.":
		"Explore all 9 campus buildings in first-person or orbit view. Click below to launch the 3D environment.",
	"Cargar Mapa 3D": "Load 3D Map",

	// About Us (about-us.html)
	"Como ya has visto, La Universidad de SC-Tech de Puerto Rico es una especializada en Ciencias de Computadoras con la intención de crear los mejores programadores del mundo. Esta universidad te dará muchas experiencias necesarias para ayudarte convertirte en excelente profesional. Tenemos una educación bien practica y cálida, con un estilo, moderno, además tenemos los mejores profesores especializados de ciencias de cómputos de Puerto Rico al lado tuyo enseñándote las etapas desde lo más básico, hasta lo más avanzado. Nuestro campo es bien accesible, seguro y conveniente para todos los estudiantes de nuestro recinto, tenemos de todo aquí en la universidad de SC-TECH. Nosotros sabemos la importancia de sentirse seguro en un ambiento nuevo, aquí en SC-TECH tenemos tu espalda. En nuestro campo, nuestro estacionamiento está bajo vigilancia 24/7. También tenemos servicios de emergencias dentro de la universidad con un helicóptero lista a todos momentos.":
		"SC-TECH University of Puerto Rico specializes in Computer Science with the mission of training world-class programmers. Our university provides hands-on experience to help you grow into an outstanding professional, combining practical, modern instruction with Puerto Rico's top Computer Science faculty guiding you from fundamentals to advanced topics. Our campus is accessible, safe, and welcoming—featuring 24/7 parking surveillance and on-campus emergency services with a dedicated helicopter ready at all times.",
	"Nuestra misión": "Our mission",
	"Aspiramos en tener estudiantes graduados en todas las esquinas del mundo, que estén haciendo un impacto global en el campo de informática. Porque en SC-TECH no solo enseñamos tecnología, preparamos a quienes construirán el futuro digital.":
		"We aspire to have graduates in every corner of the globe making a worldwide impact in computing. At SC-TECH, we don't just teach technology—we prepare those who will build the digital future.",
	"Nuestra visión": "Our vision",
	"Desarrollar los mejores profesionales para el futuro de Ciencias de Cómputos de no solo Puerto Rico, pero del Mundo.":
		"To develop the top Computer Science professionals for the future—not only for Puerto Rico, but for the world.",
	"HABLEMOS": "LET'S TALK",
	"¿Tienes alguna pregunta?": "Have a question?",
	"Escríbenos usando el formulario o consulta nuestros datos de muestra.":
		"Write to us using the form or check our sample contact details.",
	"Ubicación de muestra": "Sample location",
	"Centro Universitario Demo, San Juan, Puerto Rico": "Demo University Center, San Juan, Puerto Rico",
	"Teléfono de muestra": "Sample phone",
	"Correo de muestra": "Sample email",
	"Estos datos son ficticios y se incluyen únicamente como demostración del proyecto.":
		"These details are fictional and included strictly for project demonstration purposes.",
	"Formulario de contacto": "Contact form",
	"Demostración visual: el formulario no envía ni guarda mensajes.":
		"Visual demo: this form does not send or store messages.",
	"Nombre": "Name",
	"Tu nombre": "Your name",
	"Correo electrónico": "Email address",
	"nombre@ejemplo.com": "name@example.com",
	"Asunto": "Subject",
	"¿Sobre qué quieres hablar?": "What would you like to talk about?",
	"Mensaje": "Message",
	"Escribe aquí tu mensaje…": "Write your message here…",
	"Enviar mensaje": "Send message"
};

// Build reverse map (English -> Spanish) automatically
const REVERSE_PHRASE_MAP = Object.fromEntries(
	Object.entries(PHRASE_MAP).map(([es, en]) => [en, es])
);

const normalizeText = (str) => str.replace(/\s+/g, " ").trim();

function translateUntaggedNodes(lang) {
	const lookup = lang === "en" ? PHRASE_MAP : REVERSE_PHRASE_MAP;

	// 1. Page <title>
	const normalizedTitle = normalizeText(document.title);
	if (lookup[normalizedTitle]) {
		document.title = lookup[normalizedTitle];
	}

	// 2. Input & textarea placeholders
	document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((el) => {
		const ph = normalizeText(el.getAttribute("placeholder"));
		if (lookup[ph]) el.setAttribute("placeholder", lookup[ph]);
	});

	// 3. Walk text nodes outside [data-i18n] / [data-i18n-html]
	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
			const parent = node.parentElement;
			if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
			if (parent.closest("[data-i18n], [data-i18n-html]")) return NodeFilter.FILTER_REJECT;
			return NodeFilter.FILTER_ACCEPT;
		}
	});

	const nodes = [];
	while (walker.nextNode()) nodes.push(walker.currentNode);

	nodes.forEach((node) => {
		const raw = node.nodeValue;
		const trimmed = normalizeText(raw);
		if (lookup[trimmed]) {
			const leading = raw.match(/^\s*/)[0];
			const trailing = raw.match(/\s*$/)[0];
			node.nodeValue = `${leading}${lookup[trimmed]}${trailing}`;
		}
	});

	// 4. Special HTML-rich blocks on Campus_Map.html (instructions-card <li> with <kbd>)
	const instructionItems = document.querySelectorAll(".instructions-card li");
	if (instructionItems.length >= 2) {
		if (lang === "en") {
			instructionItems[0].innerHTML =
				"<strong>Orbit Mode:</strong> Drag with the left mouse button to rotate the camera and use the scroll wheel to zoom. Click any building to view its description.";
			instructionItems[1].innerHTML =
				"<strong>Walk Mode:</strong> Use the <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> keys or arrow keys to move around. Move the mouse to look around and hold <kbd>Shift</kbd> to sprint. Press <kbd>Esc</kbd> to exit.";
		} else {
			instructionItems[0].innerHTML =
				"<strong>Modo Órbita:</strong> Arrastra con el clic izquierdo para rotar la cámara y usa la rueda del ratón para hacer zoom. Haz clic sobre cualquier edificio para ver su descripción.";
			instructionItems[1].innerHTML =
				"<strong>Modo Caminar:</strong> Usa las teclas <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> o las flechas del teclado para desplazarte. Mueve el ratón para dirigir la vista y mantén presionada la tecla <kbd>Shift</kbd> para acelerar. Presiona <kbd>Esc</kbd> para salir.";
		}
	}
	// 5. Dynamic contact form confirmation message (#formStatus on about-us.html)
	const formStatus = document.getElementById("formStatus");
	if (formStatus && formStatus.innerHTML.trim() !== "") {
		formStatus.innerHTML =
			lang === "en"
				? "<strong>Message received (Demo):</strong> Thank you for writing to us. This is a visual preview and your message has not been sent."
				: "<strong>Mensaje recibido (Demostración):</strong> Gracias por escribirnos. Esta es una vista previa visual y tu mensaje no se ha enviado.";
	}
}

function applyLanguage(lang) {
	const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;
	document.documentElement.lang = lang;

	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.getAttribute("data-i18n");
		if (dict[key] !== undefined) el.textContent = dict[key];
	});

	document.querySelectorAll("[data-i18n-html]").forEach((el) => {
		const key = el.getAttribute("data-i18n-html");
		if (dict[key] !== undefined) el.innerHTML = dict[key];
	});

	document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
		const key = el.getAttribute("data-i18n-placeholder");
		if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
	});

	translateUntaggedNodes(lang);
}

document.addEventListener("DOMContentLoaded", () => {
	const chkLang = document.getElementById("chkLanguage");
	const savedLang = localStorage.getItem("site_lang") || "es";

	if (chkLang) {
		chkLang.checked = savedLang === "en";
		chkLang.addEventListener("change", (e) => {
			const newLang = e.target.checked ? "en" : "es";
			localStorage.setItem("site_lang", newLang);
			applyLanguage(newLang);
		});
	}

	applyLanguage(savedLang);
});