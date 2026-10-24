export default {
	common: {
		confirm: "确认", cancel: "取消", card: "卡片", lane: "通道", noTagsFound: "未找到标签", close: "关闭",
	},
	header: {
		searchPlaceholder: "搜索", filterByTag: "按标签筛选", filterNone: "无筛选",
		sortBy: "排序方式",
		sort: { manually: "手动", nameAsc: "名称 (A-Z)", nameDesc: "名称 (Z-A)", tagsAsc: "标签 (A-Z)", tagsDesc: "标签 (Z-A)", dueAsc: "截止 {{date}}", dueDesc: "截止 {{date}}", lastUpdated: "最近更新", createdFirst: "最早创建" },
		viewMode: "视图模式",
		view: { extended: "扩展", regular: "常规", compact: "紧凑", tight: "紧密" },
		newLane: "新建通道", selectCards: "选择卡片", exitSelection: "退出选择", locale: "语言",
	},
	card: { due: "截止 {{date}}" },
	cardName: { rename: "重命名", delete: "删除", showOptions: "显示选项" },
	laneName: { rename: "重命名", deleteCard: "删除卡片", deleteLane: "删除通道", createCard: "新建卡片", showOptions: "显示选项" },
	expandedCard: {
		addTag: "添加标签", changeColor: "更改颜色", deleteTag: "删除标签", dueDate: "截止日期",
		minimize: "最小化", expand: "展开", colorOption: "颜色 {{n}}", rename: "点击重命名",
		tagError: { duplicate: "标签重复" },
		close: "关闭",
	},
	bulk: {
		selected: "已选择 {{count}} 张卡片", selected_plural: "已选择 {{count}} 张卡片",
		addTags: "添加标签", removeTags: "移除标签", setDueDate: "设置截止日期", delete: "删除", clearSelection: "清除选择",
		tagSearchPlaceholder: "搜索标签", removeTagPlaceholder: "移除标签", createTag: '创建 "{{tag}}"',
		deleteConfirm: "删除所选内容？", deleteConfirm_plural: "删除所选内容？",
	},
	validation: {
		mustHaveName: "名称不能为空", hiddenByDot: "以点开头会被隐藏", duplicateName: "名称重复",
		forbiddenChars: "包含禁止字符", noMdExtension: "缺少 .md 扩展名", prohibitedName: "名称不允许",
	},
	keyboard: {
		title: "键盘快捷键", sections: { navigation: "导航", cardActions: "卡片操作", general: "常规" },
		shortcuts: {
			navUp: "聚焦到上方卡片", navDown: "聚焦到下方卡片",
			lanePrev: "聚焦到左侧通道", laneNext: "聚焦到右侧通道",
			cardUp: "在通道内上移卡片", cardDown: "在通道内下移卡片",
			cardToPrevLane: "将卡片移至左侧通道", cardToNextLane: "将卡片移至右侧通道",
			openCard: "打开/编辑聚焦的卡片", newCard: "在当前通道新建卡片",
			renameCard: "重命名聚焦的卡片", deleteCard: "删除聚焦的卡片（需确认）",
			esc: "清除焦点 / 关闭弹窗", help: "显示此帮助弹窗",
		},
	},
}
