const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: "img/05.webp",
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const eleSlider = document.querySelector('.slider');
const eleBtnbottom = document.querySelector('.btn-bottom');
const eleBtnUp = document.querySelector('.btn-up');


images.forEach((let i = 0; i < images.length; i++) (element) => {
    const eleImg = document.createElement(`
    ${element.image}'${element.title} ${element.text}`);
    eleImg.src = images[i];
    eleImg.classList.add('slider-img');

    if (i === 0) {
        eleImg.classList.add('active');
    }
    eleSlider.append(eleImg);
    
    });



const listEleImg = document.querySelectorAll('.slider-img'); // non e' un array ma qualcosa di simile

let activeIndex = 0;

// aggiungere gli event listeners ai due bottoni
eleBtnUp.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');

	// incrementare l'active index
	activeIndex++;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');

	eleBtnbottom.classList.remove('hidden');
	if (activeIndex === listEleImg.length - 1) {
		eleBtnUp.classList.add('hidden');
	}
});

eleBtnbottom.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');

	// incrementare l'active index
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');

	eleBtnUp.classList.remove('hidden');
	if (activeIndex === 0) {
		eleBtnbottom.classList.add('hidden');
	}
});