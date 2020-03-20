export const cartToolbar = {
	view: "toolbar",
	borderless: true,
	margin: 10,
	paddingX: 10,
	paddingY: 14,
	css: "cart_toolbar",
	cols: [
		{
			view: "label",
			label: "My products",
			height: 44
		},
		{},
		{
			view: "button",
			autowidth: true,
			label: "Add new product",
			css: "webix_primary"
		},
		{
			view: "combo",
			label: "Sort by",
			labelWidth: 55,
			value: "All",
			options: ["All", "20", "40"]
		}
	]
};
