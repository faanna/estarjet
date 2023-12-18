// visual;
var swiper = new Swiper('.visual', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	spaceBetween: 0,
	speed: 4000,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});

// trip
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 5000,
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
