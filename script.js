// alert('My website works');

//SELECCTOR///////
const openBtn = document.querySelector('.open');
const myMenu = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.close');

//LISTENER////////
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

//FUNCTIONS/////////
function openMenu() {
	myMenu.classList.add('activeMenu');
}

function closeMenu() {
	myMenu.classList.remove('activeMenu');
}
