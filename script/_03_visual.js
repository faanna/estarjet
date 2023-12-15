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

let btnStart = document.querySelector('.btnStart');
let btnStop = document.querySelector('.btnStop');

btnStart.addEventListener('click', () => {
	swiper.autoplay.start();
});
btnStop.addEventListener('click', () => {
	swiper.autoplay.stop();
});
