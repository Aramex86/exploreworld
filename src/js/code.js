

function open(){
	const openmenu = document.querySelector('.open');
		openmenu.addEventListener('click',function(){
		const slideRight = document.querySelector('.header__navmobile');
		const blur = document.querySelector('.main__section');
		document.querySelector('.open').classList.remove('show');
		openmenu.classList.add('hide');
		slideRight.classList.add('slideToRight');
		blur.classList.add('blur');
		
	});
	
};

//close bnt

const close = () =>{
	const closemenu = document.querySelector('.close');
	closemenu.addEventListener('click',function(){
		const slideRight = document.querySelector('.header__navmobile');
		const blur = document.querySelector('.main__section');
		document.querySelector('.open').classList.remove('hide');
		document.querySelector('.open').classList.add('show');

		slideRight.classList.remove('slideToRight');
		blur.classList.remove('blur');
	});
}

const bigimage= (eventObj) => {
	const image = document.getElementsByTagName('img');


	console.log(image);
}




open();
close();
bigimage();