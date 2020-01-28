function open() {
	const openmenu = document.querySelector('.open');
	openmenu.addEventListener('click', function () {
		const slideRight = document.querySelector('.header__navmobile');
		const blur = document.querySelector('.main__section');
		document.querySelector('.open').classList.remove('show');
		openmenu.classList.add('hide');
		slideRight.classList.add('slideToRight');
		blur.classList.add('blur');

	});

};

//close bnt

const close = () => {
	const closemenu = document.querySelector('.close');
	closemenu.addEventListener('click', function () {
		const slideRight = document.querySelector('.header__navmobile');
		const blur = document.querySelector('.main__section');
		document.querySelector('.open').classList.remove('hide');
		document.querySelector('.open').classList.add('show');

		slideRight.classList.remove('slideToRight');
		blur.classList.remove('blur');
	});
}

const bigimage = () => {
	//select all img
	const image = document.getElementsByTagName('img');

	const imgarr = [];

	imgarr.push(image);

	const imageselect = imgarr.map(function (index) {
		for (let i = 0; i < index.length; i++) {

			index[i].addEventListener('click', function () {
				if (index[i] === index[0]) {
					const indonesia = document.querySelector('.indonesia__wrapp');
					indonesia.classList.add('resizeimg');
					document.querySelector('.back-btn').classList.add('moveright');
					document.querySelector('.location__point').classList.add('moveleft');
					document.querySelector('.page__intro-first').classList.add('movetop1');
					document.querySelector('.page__intro-second').classList.add('movetop2');
					document.querySelector('.page__nav').classList.add('moveleft');
					indonesia.style.opacity = 1;
				}
			});


		}

	});







}




open();
close();
bigimage();