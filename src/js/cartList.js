export const cartList = {
	view: "dataview",
	scroll: true,
	css: "cartList",
	borderless: true,
	xCount: 3,
	type: {
		height: 240,
		width: "auto",
		template(obj) {
			const edit = "<div class='edit_item'><i class='mdi mdi-pencil'></i></div>";

			const html = `
				<div class='overall'>
					<div class="itemImg" style="background-image: url(${obj.src});"></div>
					<div><strong>${obj.title}</strong></div>
					<div>${obj.inStock ? "In Stock" : "Out of Stock"}</div>
					<div>Price: $${obj.cost}</div>
					${edit}
				</div>
			`;
			return html;
		},

		on_click: {
			edit_item(ev, id) {
				webix.message(`Click edit button in item id: ${id}`);
				return false;
			}
		}
	},
	data: [
		{id: 1, title: "Shoes 1", inStock: false, cost: 45, src: "./assets/img/Shoes_1.png"},
		{id: 2, title: "Shoes 2", inStock: true, cost: 62, src: "./assets/img/Shoes_2.png"},
		{id: 3, title: "Shoes 3", inStock: true, cost: 53, src: "./assets/img/Shoes_3.png"},
		{id: 4, title: "Shoes 4", inStock: false, cost: 45, src: "./assets/img/Shoes_1.png"},
		{id: 5, title: "Shoes 5", inStock: true, cost: 62, src: "./assets/img/Shoes_2.png"},
		{id: 6, title: "Shoes 6", inStock: true, cost: 53, src: "./assets/img/Shoes_3.png"}
	]
};
