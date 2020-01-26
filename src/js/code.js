

function open(){
	const openmenu = document.querySelector('.open');
		openmenu.addEventListener('click',function(){
		const slideRight = document.querySelector('.header__navmobile');
		const blur = document.querySelector('.main__section');

		 slideRight.classList.add('slideToRight');
		 blur.classList.add('blur');
	});
};

open();

//close bnt