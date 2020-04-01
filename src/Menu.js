var MenuTab = function(){
	var MenuDiv = document.createElement('div');
	var h2 = document.createElement('h2');
	h2.innerHTML = "This is Menu Tab";
	MenuDiv.classList.add('tabcontent');
	h2.setAttribute("id", "menu");
	MenuDiv.appendChild(h2);
	return MenuDiv;
}
export {MenuTab}