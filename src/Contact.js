var ContactTab = function(){
	var ContactDiv = document.createElement('div');
	var h2 = document.createElement('h2');
	h2.innerHTML = 'This is contact page';
	ContactDiv.classList.add('tabontent');
	h2.setAttribute("id","contact");
	ContactDiv.appendChild(h2);
	return ContactDiv;
}

export {ContactTab};