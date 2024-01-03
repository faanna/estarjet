// visual;
var swiper = new Swiper('.visual', {
	loop: true,
	spaceBetween: 0,
	speed: 3000,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// tab
// tab-departure
const tab_menu = document.querySelector('.teb_menu1');
const contents = document.querySelector('.contents1');
const departures = document.querySelector('.departures');
const departures_box = departures.querySelector('.departures_box');
const article_1 = departures_box.querySelectorAll('article');
const lis = departures_box.querySelectorAll('li');
const x = departures.querySelector('.fa-xmark');

contents.addEventListener('click', () => {
	contents.classList.add('on');
	departures.style.display = 'flex';
	for (let i = 0; i < lis.length; i++) {
		lis[i].addEventListener('click', (e) => {
			e.preventDefault();
			active(lis, i);
			active(article_1, i);
		});
	}
	x.addEventListener('click', (e) => {
		e.preventDefault();
		departures.style.display = 'none';
		contents.classList.remove('on');
	});
});
function active(list, index) {
	for (let el of list) {
		el.classList.remove('on');
		list[index].classList.add('on');
	}
}

// tab-arrivals;
const tab_menu2 = document.querySelector('.teb_menu2');
const contents2 = document.querySelector('.contents2');
const arrivals = document.querySelector('.arrivals');
const arrivals_box = arrivals.querySelector('.arrivals_box');
const article_2 = arrivals_box.querySelectorAll('article');
const lis_1 = arrivals_box.querySelectorAll('li');
const xx = arrivals.querySelector('.fa-xmark');

contents2.addEventListener('click', () => {
	contents2.classList.add('on');
	arrivals.style.display = 'block';
	for (let a = 0; a < lis_1.length; a++) {
		lis_1[a].addEventListener('click', (e) => {
			e.preventDefault();
			active(lis_1, a);
			active(article_2, a);
		});
	}
	xx.addEventListener('click', (e) => {
		e.preventDefault();
		arrivals.style.display = 'none';
		contents2.classList.remove('on');
	});
});

function on(part, index) {
	for (let el of part) {
		el.classList.remove('on');
		part[index].classList.add('on');
	}
}
// 다구간이란?
const tooltip = document.querySelector('.tooltip');
const tooltip_box = document.querySelector('.tolltip_box');
const imformation = document.querySelector('.imformation');
const imfor = document.querySelector('.imfor');
const close = imfor.querySelector('a');

tooltip_box.addEventListener('click', () => {
	imformation.style.display = 'block';
	close.addEventListener('click', () => {
		imformation.style.display = 'none';
	});
});

// trip
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.trip .swiper-button-next',
		prevEl: '.trip .swiper-button-prev',
	},
});

let btnStart = document.querySelector('.btnStart');
let btnStop = document.querySelector('.btnStop');

btnStart.addEventListener('click', () => {
	swiper.autoplay.start();
});
btnStop.addEventListener('click', () => {
	swiper.autoplay.stop();
});
