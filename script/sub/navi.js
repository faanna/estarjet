const navi1 = document.querySelector('.navi1');
const navi1_part = navi1.querySelector('.navi1_part');
const navi1_list = document.querySelector('.navi1_list');
const list_txt1 = navi1_list.querySelectorAll('.list_txt1');
navi1.addEventListener('click', () => {
	navi1_part.style.display = 'flex';
	list_txt1.addEventListener('click', () => {
		navi1_part.style.display = 'none';
	});
});
