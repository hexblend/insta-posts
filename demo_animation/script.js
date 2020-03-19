const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const trigger = document.querySelector('.trigger');

const addAnimation = (element, animationClass) => {
	if (element.classList.contains(animationClass)) {
		element.classList.remove(animationClass);
	}
	setTimeout(() => element.classList.add(animationClass), 100);
};

trigger.addEventListener('click', () => {
	addAnimation(img1, 'slideFromLeft');
	addAnimation(img2, 'slideFromRight');
});
