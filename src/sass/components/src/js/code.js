

function open(){
	const openmenu = document.querySelector('.open');
		openmenu.addEventListener('click',function(){
		document.querySelector('.header__navmobile').style.display="flex";
	});
};

open();
