'use strict';

import { callApi } from './service.js';
import { showFilmAnswer, mapCards, addClickListener, printErrorMsg } from './print.js';
import { filterTitle, showDescription, cleanContainers, fixSearchSection } from './interaction.js';
import { loader } from './loader.js';
import { waitForCalling } from './setTimeOut.js'

// html tags
const filter = document.querySelector('.search__field');
const list = document.querySelector('.display__list');
const infoContainer = document.querySelector('.display__additional-info');
const searchSection = document.querySelector('.app__search');

// messages
const apiErrMsg = 'Ooooops!! Something went wrong.'

// films info and user search
let filmArr = [];
let searchText = '';

function createCard(array = []) {
  const cardSelector = '.film__item';
  const btnSelector = '.film__button';
  
  const filterResult = filterTitle(array, searchText);
  const mapResult = mapCards(filterResult);

  cleanContainers(infoContainer, list);
  showFilmAnswer(mapResult, list, infoContainer);
  addClickListener(cardSelector, showDescription);
  addClickListener(btnSelector, showDescription);
}

function callFilms() {
  callApi()
    .then(data => {
      filmArr = data;
      infoContainer.innerHTML = '';
      return createCard(filmArr);
    })
    .catch(err => {
      console.log(err);
      return printErrorMsg(apiErrMsg, infoContainer);
    });
}

function searchFilm(event) {
  const inputValue = event.currentTarget.value;
  searchText = inputValue;
  createCard(filmArr);
  return searchText;
}

if (infoContainer) {
  loader(infoContainer);
}

waitForCalling(callFilms);

window.onscroll = () => fixSearchSection(searchSection);


if (filter) {
  filter.addEventListener('keyup', searchFilm);
}

export { callFilms, createCard, searchFilm};



// async function callFilms() {
//   try {
//     let res = await fetch(ENDPOINT);
//     let data = await res.json();

//     filmArr = data;
//     infoContainer.innerHTML = '';

//     return createCard(filmArr);

//   } catch (err) {
//     console.log(err);
//     return printErrorMsg(apiErrMsg, infoContainer);
//   }
// };