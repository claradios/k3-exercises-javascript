'use strict';

// html tags
const filter = document.querySelector('.search__field');
const list = document.querySelector('.display__list');
const displaySection = document.querySelector('.app__display');
const infoContainer = document.querySelector('.display__additional-info');
const searchSection = document.querySelector('.app__search');
const sticky = searchSection.offsetTop;

// api endpoint
const ENDPOINT = 'https://ghibliapi.herokuapp.com/films';

// sounds
const flipSound = new Audio('sounds/cardflip.mp3');
const noMatchSound = new Audio('sounds/nomatch.mp3');

// messages
const errorMsg = 'Your search has no match. Please try again';
const apiErrMsg = 'Ooooops!! Something went wrong.'

// films info and user search
let filmArr = [];
let searchText = '';


function resetFlippedCard(id) {
  const newFilmObj = document.querySelectorAll('.film__item');
  const newFilmArr = [...newFilmObj];

  newFilmArr
    .filter(film => film.id !== id)
    .map(film => {
      const description = film.querySelector('.film__description');
      const info = film.querySelector('.film__info');
      const title = film.querySelector('.film__title');
      const btn = film.querySelector('button');

      description.classList.add('hidden');
      info.classList.remove('hidden');
      btn.classList.remove('rotate');
      film.classList.remove('highlight');
      title.classList.remove('highlight-title');
    });
}

function showDescription(event) {
  const film = event.currentTarget;
  const filmDescription = film.querySelector('.film__description');
  const filmInfo = film.querySelector('.film__info');
  const filmTitle = film.querySelector('.film__title');
  const btn = film.querySelector('button');
  const id = film.id;

  resetFlippedCard(id);

  filmDescription.classList.toggle('hidden');
  filmInfo.classList.toggle('hidden');
  btn.classList.toggle('rotate');
  film.classList.toggle('highlight');
  filmTitle.classList.toggle('highlight-title');

  flipSound.play();
}

function addListeners() {
  const filmTitle = document.querySelectorAll('.film__item');
  const filmBtn = document.querySelectorAll('.film__button');

  for (const item of filmTitle) {
    item.addEventListener('click', showDescription);
  }
  for (const item of filmBtn) {
    item.addEventListener('click', showDescription);
  }
}

function createNodeFilm(id, title, description, director, rt_score) {
  const item = `<li class = "film__item" id = ${id}>
                    <section class="card__header">
                        <h2 class="film__title">${title}</h2>
                        <button class="film__button">+</button>
                    </section>       
                    <section class = "card__main">             
                        <p class = "film__description hidden" data-id=${id}>${description}</p>
                        <div class = "film__info" data-id=${id}>
                            <p class = "film__author"><span class = "film-icon"><i class="fas fa-video"></i></span> ${director}</p>
                        <div><span class = "film-icon"><i class="fas fa-star"></i></span> ${rt_score}</div>
                    </div>    
                    </section>                        
                </li>`;
  return item;
}

function filterAndMap(array, acc) {
  array
    .filter(film => (film.title || film.description).toLowerCase().includes(searchText.toLowerCase()))
    .map(film => {
      const { id, title, description, director, rt_score } = film;
      const filmCard = createNodeFilm(id, title, description, director, rt_score);
      acc += filmCard;
    });

  return acc;
}

function printErrorMsg(text) {
  const newElement = document.createElement('p');
  newElement.classList = 'info__no-result';
  newElement.innerText = text;
  infoContainer.appendChild(newElement);
}

function showFilmAnswer(result) {
  if (result !== '') {
    list.innerHTML = result;
  } else {
    printErrorMsg(errorMsg);
    noMatchSound.play();
  }
}

function createFilteredInfo(array) {
  let acc = '';
  const result = filterAndMap(array, acc);

  infoContainer.innerHTML = '';
  list.innerHTML = '';

  showFilmAnswer(result);
  addListeners();
}

// function callFilms() {
//     fetch(ENDPOINT)
//         .then(res => res.json())
//         .then(data => {
//             filmArr = data;
//             infoContainer.innerHTML = '';
//             return createFilteredInfo(filmArr);
//         })
//         .catch(err => {
//             console.log(err);
//             return printErrorMsg(apiErrMsg);
//         });
// }

async function callFilms() {
  try {
    let res = await fetch(ENDPOINT);
    let data = await res.json();

    filmArr = data;
    infoContainer.innerHTML = '';

    return createFilteredInfo(filmArr);

  } catch (err) {
    console.log(err);
    return printErrorMsg(apiErrMsg);
  }
};

function searchFilm(event) {
  const inputValue = event.currentTarget.value;
  searchText = inputValue;
  createFilteredInfo(filmArr);
}

function fixSearchSection() {
  if (window.pageYOffset > sticky) {
    searchSection.classList.add("sticky");
  } else {
    searchSection.classList.remove("sticky");
  }
}

function loader() {
  const loader = `
                <section class = "section__loader">
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                  <div class = "loader__child"></div>
                </section>`;
  infoContainer.innerHTML = loader;
}

loader();
setTimeout(callFilms, 2000);

window.onscroll = () => fixSearchSection();

filter.addEventListener('keyup', searchFilm);


