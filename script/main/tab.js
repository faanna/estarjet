// tab-departure
const tab_menu = document.querySelector('.teb_menu1');
const contents = document.querySelector('.contents1');
const departures = document.querySelector('.departures');
const departures_box = departures.querySelector('.departures_box');
const article_1 = departures_box.querySelectorAll('article');
const lis = departures_box.querySelectorAll('li');
const departures_art_list = departures_box.querySelector('.list');

contents.addEventListener('click', () => {
	departures.style.display = 'flex';
	for (let i = 0; i < lis.length; i++) {
		lis[i].addEventListener('click', (e) => {
			e.preventDefault();
			active(lis, i);
			active(article_1, i);
		});
	}
	departures_art_list.addEventListener('click', (e) => {
		e.preventDefault();
		departures.style.display = 'none';
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
const arrivals_art_list = arrivals_box.querySelector('.list');

contents2.addEventListener('click', () => {
	arrivals.style.display = 'block';
	for (let a = 0; a < lis_1.length; a++) {
		lis_1[a].addEventListener('click', (e) => {
			e.preventDefault();
			active(lis_1, a);
			console.log(active(lis_1, a));
			active(article_2, a);
		});
	}
	arrivals_art_list.addEventListener('click', (e) => {
		e.preventDefault();
		arrivals.style.display = 'none';
	});
});

function on(part, index) {
	for (let el of part) {
		el.classList.remove('on');
		part[index].classList.add('on');
	}
}
