export const cartList = {
	view: "dataview",
	scroll: true,
	css: "cartList",
	borderless: true,
	xCount: 3,
	type: {
		height: 242,
		type: "tiles",
		width: "auto",
		template(obj) {
			const edit = "<div class='edit_item'><i class='mdi mdi-pencil'></i></div>";

			const html = `
				<div class='overall'>
					<div class='overall_left'>
						<div class="itemImg" style="background-image: url(${obj.src});"></div>
						<div class="${obj.inStock ? "text_success" : "text_danger"}">${obj.inStock ? "In Stock" : "Out of Stock"}</div>
					</div>
					<div class='overall_right'>
						<div><strong>${obj.title}</strong></div>
						<div>Price: $${obj.cost}</div>
					</div>
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
		{id: 1, title: "Shoes 1", inStock: true, cost: 45, src: "./assets/img/Shoes_1.png"},
		{id: 2, title: "Shoes 2", inStock: true, cost: 62, src: "./assets/img/Shoes_2.png"},
		{id: 3, title: "Shoes 3", inStock: true, cost: 53, src: "./assets/img/Shoes_3.png"},
		{id: 4, title: "Shoes 4", inStock: false, cost: 45, src: "./assets/img/Shoes_4.png"},
		{id: 5, title: "Shoes 5", inStock: true, cost: 62, src: "./assets/img/Shoes_3.png"},
		{id: 6, title: "Shoes 6", inStock: false, cost: 53, src: "./assets/img/Shoes_2.png"},
		{id: 7, title: "Shoes 7", inStock: true, cost: 52, src: "./assets/img/Shoes_2.png"},
		{id: 8, title: "Shoes 8", inStock: true, cost: 64, src: "./assets/img/Shoes_1.png"},
		{id: 9, title: "Shoes 9", inStock: true, cost: 48, src: "./assets/img/Shoes_4.png"}
	]
};
