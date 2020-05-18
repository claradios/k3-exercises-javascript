'use strict';

// orders
const TOGGLE = 'toggle';
const REMOVE = 'remove';
// sounds
const flipSound = new Audio('sounds/cardflip.mp3');

function filterTitle(array, text) {
    return array.filter(film => (film.title || film.description).toLowerCase().includes(text.toLowerCase()));
}

function pickCard(film) {
    if (film) {
        const description = film.querySelector('.film__description');
        const info = film.querySelector('.film__info');
        const title = film.querySelector('.film__title');
        const btn = film.querySelector('.film__button');
        return { description, info, title, btn };
    }
}

function flipCard(film, order) {
    if (film) {
        const newFilm = pickCard(film);
        const { description, info, btn, title } = newFilm;
        switch (order) {
            case 'toggle':
                description.classList.toggle('hidden');
                info.classList.toggle('hidden');
                btn.classList.toggle('rotate');
                film.classList.toggle('highlight');
                title.classList.toggle('highlight-title');
                break;
            case 'remove':
                description.classList.add('hidden');
                info.classList.remove('hidden');
                btn.classList.remove('rotate');
                film.classList.remove('highlight');
                title.classList.remove('highlight-title');
                break;
        }
    }
}

function showDescription(event) {
    const film = event.currentTarget;
    const id = film.id;
    resetFlippedCard(id, '.film__item');
    flipCard(film, TOGGLE);
    if (flipSound) {
        flipSound.play();
    }
}

function resetFlippedCard(id, selector) {
    const newFilmObj = document.querySelectorAll(selector);
    const newFilmArr = [...newFilmObj];
    newFilmArr
        .filter(film => film.id !== id)
        .map(film => flipCard(film, REMOVE));
}

function cleanContainers(...rest) {
    rest.map(item => item ? item.innerHTML = '' : null);
}

function fixSearchSection(section) {

    const sticky = section.offsetTop;
    if (window.pageYOffset > sticky) {
        section.classList.add("sticky");
    } else {
        section.classList.remove("sticky");
    }
}


export { pickCard, filterTitle, flipCard, showDescription, resetFlippedCard, cleanContainers, fixSearchSection };
