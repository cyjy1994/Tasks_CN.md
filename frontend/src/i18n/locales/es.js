export default {
	common: {
		confirm: "Confirmar", cancel: "Cancelar", card: "Tarjeta", lane: "Columna", noTagsFound: "No se encontraron etiquetas", close: "Cerrar",
	},
	header: {
		searchPlaceholder: "Buscar", filterByTag: "Filtrar por etiqueta", filterNone: "Sin filtro",
		sortBy: "Ordenar por",
		sort: { manually: "Manual", nameAsc: "Nombre (A-Z)", nameDesc: "Nombre (Z-A)", tagsAsc: "Etiquetas (A-Z)", tagsDesc: "Etiquetas (Z-A)", dueAsc: "Fecha más próxima", dueDesc: "Fecha más lejana", lastUpdated: "Última actualización", createdFirst: "Creado primero" },
		viewMode: "Modo de vista",
		view: { extended: "Extendido", regular: "Regular", compact: "Compacto", tight: "Ajustado" },
		newLane: "Nueva columna", selectCards: "Seleccionar tarjetas", exitSelection: "Salir de selección", locale: "Idioma",
	},
	card: { due: "Vencimiento {{date}}" },
	cardName: { rename: "Renombrar", delete: "Eliminar", showOptions: "Mostrar opciones" },
	laneName: { rename: "Renombrar", deleteCard: "Eliminar tarjeta", deleteLane: "Eliminar columna", createCard: "Crear tarjeta", showOptions: "Mostrar opciones" },
	expandedCard: {
		addTag: "Agregar etiqueta", changeColor: "Cambiar color", deleteTag: "Eliminar etiqueta", dueDate: "Fecha de vencimiento",
		minimize: "Minimizar", expand: "Expandir", colorOption: "Color {{n}}", rename: "Clic para renombrar",
		tagError: { duplicate: "Etiqueta duplicada" },
		close: "Cerrar"
	},
	bulk: {
		selected: "{{count}} tarjeta seleccionada", selected_plural: "{{count}} tarjetas seleccionadas",
		addTags: "Agregar etiquetas", removeTags: "Eliminar etiquetas", setDueDate: "Asignar fecha de vencimiento", delete: "Eliminar", clearSelection: "Limpiar selección",
		tagSearchPlaceholder: "Buscar etiquetas", removeTagPlaceholder: "Eliminar etiqueta", createTag: 'Crear "{{tag}}"',
		deleteConfirm: "¿Eliminar seleccionadas?", deleteConfirm_plural: "¿Eliminar seleccionadas?",
	},
	validation: {
		mustHaveName: "El nombre es obligatorio", hiddenByDot: "Oculto por punto", duplicateName: "Nombre duplicado",
		forbiddenChars: "Caracteres prohibidos", noMdExtension: "Sin extensión .md", prohibitedName: "Nombre prohibido",
	},
	keyboard: { title: "Atajos de teclado", sections: { navigation: "Navegación", cardActions: "Acciones de tarjeta", general: "General" }, shortcuts: {
		navUp: "Mover el foco a la tarjeta de arriba", navDown: "Mover el foco a la tarjeta de abajo",
		lanePrev: "Mover el foco a la columna anterior", laneNext: "Mover el foco a la columna siguiente",
		cardUp: "Mover la tarjeta hacia arriba dentro de la columna", cardDown: "Mover la tarjeta hacia abajo dentro de la columna",
		cardToPrevLane: "Mover la tarjeta a la columna anterior", cardToNextLane: "Mover la tarjeta a la columna siguiente",
		openCard: "Abrir/editar tarjeta enfocada", newCard: "Crear nueva tarjeta en la columna actual",
		renameCard: "Renombrar tarjeta enfocada", deleteCard: "Eliminar tarjeta enfocada (con confirmación)",
		esc: "Limpiar foco / Cerrar diálogo", help: "Mostrar este diálogo de ayuda",
	} },
}
