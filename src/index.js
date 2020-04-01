import {HomePage} from './Home';
import {MenuTab} from './Menu';
import {ContactTab} from './Contact';

const content = (function() {
	const root = document.querySelector("#content");
		const tab = (function() {
			const div = document.createElement('div');
			div.id = "display";
			div.appendChild(HomePage());
			return div;
		})();

	const nav = (function() {

		const update = function(e) {
			while(tab.firstChild) {
				tab.removeChild(tab.firstChild);
			}

			console.log(e.target.dataset.name);

			switch(e.target.dataset.name) {
				case "contact":
					tab.appendChild(ContactTab());
					break;

				case "menu":
					tab.appendChild(MenuTab());
					break;

				default:
					tab.appendChild(HomePage());
			}	
		};

		const div = document.createElement("div");
		//const brand = document.createElement("div");
		const tabs = document.createElement("ul");
		const home = document.createElement("li");
		const contact = document.createElement("li");
		const menu = document.createElement("li");
		div.id = "nav";
		div.classList.add("flex");
		//brand.id = "brand";
		//brand.textContent = "Yum Yum";
		//brand.addEventListener("click", update);
		home.dataset.name = "home";
		home.textContent = "Home";
		home.classList.add("current");
		home.addEventListener("click", update);
		contact.dataset.name = "contact";
		contact.textContent = "Contact";
		contact.addEventListener("click", update);
		menu.dataset.name = "menu";
		menu.textContent = "Menu";
		menu.addEventListener("click", update);
		tabs.appendChild(home);
		tabs.appendChild(menu);
		tabs.appendChild(contact);
		//div.appendChild(brand);
		div.appendChild(tabs);
		return div;
	})();

	const show = function() {
		root.appendChild(nav);
		root.appendChild(tab);
	}

	return {show};
})();

content.show();
