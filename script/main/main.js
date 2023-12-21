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

// tab-departure
const tab_menu = document.querySelector('.teb_menu1');
const contents = document.querySelector('.contents1');
const departures = document.querySelector('.departures');
const departures_box = departures.querySelector('.departures_box');
const article_1 = departures_box.querySelectorAll('article');
const lis = departures_box.querySelectorAll('li');

contents.addEventListener('click', () => {
	departures.style.display = 'flex';
	for (let i = 0; i < lis.length; i++) {
		lis[i].addEventListener('click', (e) => {
			e.preventDefault();
			active(lis, i);
			active(article_1, i);
		});
	}
	article_1.addEventListener('click', () => {
		departures.style.display = 'none';
	});
});
function active(list, index) {
	for (el of list) {
		el.classList.add('on');
	}
	list[index].classList.remove('on');
}

// tab-arrivals
const tab_menu2 = document.querySelector('.teb_menu2');
const contents2 = document.querySelector('.contents2');
const arrivals = document.querySelector('.arrivals');
const arrivals_box = arrivals.querySelector('.arrivals_box');
const article_2 = arrivals_box.querySelectorAll('.article');
const lis_1 = arrivals_box.querySelectorAll('li');

contents2.addEventListener('click', () => {
	arrivals.style.display = 'flex';
	for (let a = 0; a < lis_1.length; a++) {
		lis_1[a].addEventListener('click', (e) => {
			e.preventDefault();
			on(lis_1, a);
			on(article_2, a);
		});
	}
	article_2.addEventListener('click', () => {
		arrivals.style.display = 'none';
	});
});

function on(part, index) {
	for (el of part) {
		el.classList.add('on');
	}
	part[index].classList.remove('on');
}

// trip
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 4,
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
