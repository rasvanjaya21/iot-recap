export default function NavIcon({ variant }) {
	const variants = {
		home: "bx bx-home",
		event: "bx bx-calendar",
		story: "bx bx-book",
		gallery: "bx bx-image-alt",
		about: "bx bx-group",

		"active-home": "bx bxs-home bx-tada",
		"active-event": "bx bxs-calendar bx-tada",
		"active-story": "bx bxs-book bx-tada",
		"active-gallery": "bx bxs-image-alt bx-tada",
		"active-about": "bx bxs-group bx-tada",
	};

	const pickedVariant = variants[variant];

	return <i className={`navbar-icon ${pickedVariant}`}></i>;
}
