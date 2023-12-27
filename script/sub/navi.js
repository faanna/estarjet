const navi1 = document.querySelector('.navi1');
const navi1_part = navi1.querySelector('.navi1_part');
const navi1_list = document.querySelector('.navi1_list');
const list_txt1 = document.querySelectorAll('.list_txt1');
navi1.addEventListener('click', () => {
	navi1_part.style.display = 'flex';
});

const navi2 = document.querySelector('.navi2');
const navi2_part = navi2.querySelector('.navi2_part');
const navi2_list = document.querySelector('.navi2_list');
const list_txt = document.querySelector('.list_txt');
navi2.addEventListener('click', () => {
	navi2_part.style.display = 'flex';
	navi2_list.addEventListener('click', () => {
		navi2_part.style.display = 'none';
	});
});
