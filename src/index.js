import {cartList} from "./js/cartList";
import {cartToolbar} from "./js/cartToolbar";
import {leftMenu} from "./js/leftMenu";
import {userCart} from "./js/userCart";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize && webix.CustomScroll) {
		webix.CustomScroll.init();
	}

	webix.ui({
		type: "space",
		cols: [
			{},
			{
				width: 1420,
				css: "grey",
				cols: [
					{
						width: 250,
						rows: [
							userCart,
							leftMenu
						]
					},
					{
						rows: [
							cartToolbar,
							cartList
						]
					}
				]
			},
			{}
		]
	});
});
