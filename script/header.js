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
const glober_box = article.querySelector('.glober_box');

lan_box.addEventListener('click', () => {
	article.style.display = 'block';
	glober_box.addEventListener('click', () => {
		article.style.display = 'none';
	});
});

// announcement
// const announc_contents = document.querySelector('.announc_contents');

// let wid = 0;
// let num = 0;
// let timer = null;
// setInterval(move, 200);

// initList();
// function initList() {
// 	const list_p = announc_contents.querySelectorAll('p');
// 	const len = list_p.length;
// 	wid = parseInt(getComputedStyle(list_p[0]).width);
// 	announc_contents.style.width = len * wid + 'px';
// 	announc_contents.style.marginLeft = -wid + 'px';
// 	announc_contents.prepend(announc_contents.lastElementChild);
// }
// function move() {
// 	if (num < -wid * 2) {
// 		num = -wid;
// 		announc_contents.append(announc_contents.firstElementChild);
// 	} else {
// 		num -= 2;
// 	}
// 	announc_contents.style.marginLeft = num + 'px';
// }
