// gnb
let lis = document.querySelectorAll('.gnb_manu>li');

lis.forEach((el, index) => {
	el.addEventListener('mouseenter', () => {
		let sub = el.querySelector('.menu');
		sub.style.display = 'flex';
		el.querySelector('.').classList.add('on');
	});
});
