let lastScroll = 0;
const defaultOffset = 50;
const header = document.querySelector('.navbar');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => navbar.classList.contains('_hide');

window.addEventListener('scroll', () => {
		if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
				//scroll down
				header.classList.add('_hide');
		}
		else if(scrollPosition() < lastScroll && containHide()){
				//scroll up
				header.classList.remove('_hide');
		}

		lastScroll = scrollPosition();
})