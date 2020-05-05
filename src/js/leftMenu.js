export const leftMenu = {
	view: "menu",
	layout: "y",
	css: "leftMenu",
	select: true,
	type: {
		height: 44
	},
	on: {
		onAfterRender() {
			this.select(1);
		}
	},
	data: [
		{id: "1", value: "My products", icon: "mdi mdi-format-list-bulleted"},
		{id: "2", value: "My Sales", icon: "mdi mdi-brightness-percent"},
		{id: "3", value: "My disputes", icon: "mdi mdi-wechat"},
		{id: "4", value: "Edit profile", icon: "mdi mdi-account-edit"},
		{id: "5", value: "Log Out", icon: "mdi mdi-logout"}
	]
};
