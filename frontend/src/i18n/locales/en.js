export default {
	common: {
		confirm: "Confirm", cancel: "Cancel", card: "Card", lane: "Lane", noTagsFound: "No tags found", close: "Close",
	},
	header: {
		searchPlaceholder: "Search", filterByTag: "Filter by tag", filterNone: "No filter",
		sortBy: "Sort by",
		sort: { manually: "Manually", nameAsc: "Name (A-Z)", nameDesc: "Name (Z-A)", tagsAsc: "Tags (A-Z)", tagsDesc: "Tags (Z-A)", dueAsc: "Due {{date}}", dueDesc: "Due {{date}}", lastUpdated: "Last updated", createdFirst: "Created first" },
		viewMode: "View mode",
		view: { extended: "Extended", regular: "Regular", compact: "Compact", tight: "Tight" },
		newLane: "New lane", selectCards: "Select cards", exitSelection: "Exit selection", locale: "Language",
	},
	card: { due: "Due {{date}}" },
	cardName: { rename: "Rename", delete: "Delete", showOptions: "Show options" },
	laneName: { rename: "Rename", deleteCard: "Delete card", deleteLane: "Delete lane", createCard: "Create card", showOptions: "Show options" },
	expandedCard: {
		addTag: "Add tag", changeColor: "Change color", deleteTag: "Delete tag", dueDate: "Due date",
		minimize: "Minimize", expand: "Expand", colorOption: "Color {{n}}", rename: "Click to rename",
		tagError: { duplicate: "Duplicate tag" },
	},
	bulk: {
		selected: "{{count}} card selected", selected_plural: "{{count}} cards selected",
		addTags: "Add tags", removeTags: "Remove tags", setDueDate: "Set due date", delete: "Delete", clearSelection: "Clear selection",
		tagSearchPlaceholder: "Search tags", removeTagPlaceholder: "Remove tag", createTag: 'Create "{{tag}}"',
		deleteConfirm: "Delete selected?", deleteConfirm_plural: "Delete selected?",
	},
	validation: {
		mustHaveName: "Name is required", hiddenByDot: "Hidden by dot", duplicateName: "Duplicate name",
		forbiddenChars: "Forbidden characters", noMdExtension: "No .md extension", prohibitedName: "Prohibited name",
	},
	keyboard: { title: "Keyboard Shortcuts", sections: { navigation: "Navigation", cardActions: "Card actions", general: "General" }, shortcuts: {
		navUp: "Move focus to card above", navDown: "Move focus to card below",
		lanePrev: "Move focus to previous lane", laneNext: "Move focus to next lane",
		cardUp: "Move card up within lane", cardDown: "Move card down within lane",
		cardToPrevLane: "Move card to previous lane", cardToNextLane: "Move card to next lane",
		openCard: "Open/edit focused card", newCard: "Create new card in current lane",
		renameCard: "Rename focused card", deleteCard: "Delete focused card (with confirmation)",
		esc: "Clear focus / Close dialog", help: "Show this help dialog",
	} },
}
