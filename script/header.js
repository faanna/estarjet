// gnb

const li = document.querySelectorAll('.gnb_manu>li');
const section = document.querySelectorAll('.menu');
li.forEach((el, index) => {
	el.addEventListener('mouseenter', () => {
		active(li, index);
		active(section, index);
	});
	el.addEventListener('mouseleave', () => {
		stop(li, index);
		stop(section, index);
	});
});

section.forEach((el, index) => {
	el.addEventListener('mouseenter', () => {
		active(li, index);
		active(section, index);
	});
	el.addEventListener('mouseleave', () => {
		stop(li, index);
		stop(section, index);
	});
});

function active(list, index) {
	for (let el of list) {
		el.classList.remove('on');
	}
	list[index].classList.add('on');
}

function stop(list, index) {
	list[index].classList.remove('on');
}

// glober
const glober = document.querySelector('.glober');
const article = glober.querySelector('article');
const lan_box = document.querySelector('.language_box');
const glober_box = document.querySelector('.glober_box');

lan_box.addEventListener('click', () => {
	article.style.display = 'block';
	glober_box.addEventListener('click', () => {
		article.style.display = 'none';
	});
});

// 반응형 gnb
const btn_call = document.querySelector('.btn_call');
const gnb_responsive = document.querySelector('#gnb_responsive');

btn_call.addEventListener('click', function (e) {
	e.preventDefault();
	let isOn = btn_call.classList.contains('on');

	if (isOn) {
		btn_call.classList.remove('on');
	} else {
		btn_call.classList.add('on');
	}

	// gnb_responsive
	let isOn_gnb = gnb_responsive.classList.contains('on');
	if (isOn_gnb) {
		gnb_responsive.classList.remove('on');
	} else {
		gnb_responsive.classList.add('on');
	}
});

// 반응형 snb
const liss = document.querySelectorAll('.gnb_manu_responsive>li');
const menu_responsive = document.querySelectorAll('.menu_responsive');
liss.forEach((el, index) => {
	el.addEventListener('click', () => {
		active(liss, index);
		active(menu_responsive, index);
	});
});

menu_responsive.forEach((el, index) => {
	el.addEventListener('click', () => {
		active(liss, index);
		active(menu_responsive, index);
	});
});

function active(part, index) {
	for (let el of part) {
		el.classList.remove('on');
	}
	part[index].classList.add('on');
}

// 반응형glober
const glober_responsive = document.querySelector('.glober_responsive');
const articles = glober_responsive.querySelector('article');
const language_box = document.querySelector('.language_box_responsive');
const glober_box_responsive = document.querySelector('.glober_box_responsive');

language_box.addEventListener('click', () => {
	articles.style.display = 'block';
	glober_box_responsive.addEventListener('click', () => {
		articles.style.display = 'none';
	});
});
