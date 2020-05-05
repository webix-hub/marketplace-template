export const userCart = {
	css: "cartBox",
	padding: 10,
	rows: [
		{
			view: "template",
			data: {name: "Jack Smith", src: "./assets/img/user.png", balance: "447,29$"},
			css: "userCart",
			height: 180,
			borderless: true,
			template(obj) {
				const html = `
					<div class="avatarImg" style="background-image: url(${obj.src});"></div>
					<div class="avatarContent userName">
						<span>${obj.name}</span>
					</div>
					<div class="avatarContent">
						<span>${obj.balance}</span>
					</div>
				`;
				return html;
			}
		},
		{
			view: "combo",
			label: "Royalty Balance",
			labelWidth: 115,
			value: "All Time",
			options: ["All Time", "Last Week"]
		}
	]
};
