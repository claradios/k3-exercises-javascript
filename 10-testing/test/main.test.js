import * as print from '../js/print.js';
import * as interaction from '../js/interaction.js';
import * as main from '../js/main.js';
import * as service from '../js/service.js';


describe('createCard is the core function that calls every other one', () => {

  test('calls function createCard calls all the necessary functions to pain Card', () => {
    const showFilmAnswerSpy = jest.spyOn(print, 'showFilmAnswer');
    const addClickListenerSpy = jest.spyOn(print, 'addClickListener');
    const mapCardsSpy = jest.spyOn(print, 'mapCards');
    const filterTitleSpy = jest.spyOn(interaction, 'filterTitle');
    const cleanContainersSpy = jest.spyOn(interaction, 'cleanContainers');

    main.createCard();

    expect(cleanContainersSpy).toHaveBeenCalledTimes(1);
    expect(addClickListenerSpy).toHaveBeenCalledTimes(2);
    expect(showFilmAnswerSpy).toHaveBeenCalledTimes(1);
    expect(mapCardsSpy).toHaveBeenCalledTimes(1);
    expect(filterTitleSpy).toHaveBeenCalledTimes(1);

  });

})


describe('searchFilm listen event and acts when typing ', () => {

  const createCardSpy = jest.spyOn(main, 'createCard');

  test('searchFilm calls createCard', () => {
    let searchText = '';

    const event = {
      currentTarget: {
        value: 'Castle'
      }
    }
    main.searchFilm(event);

    expect(createCardSpy).toHaveBeenCalledTimes(1);
    expect(main.searchFilm(event)).toMatch('Castle');
  });

});

describe('callFilms calls callApi and acts according to response with then and catch ', () => {

  const callApiSpy = jest.spyOn(service, 'callApi');
  
  test('call Api', () => { 

    main.callFilms();

    expect(callApiSpy).toHaveBeenCalledTimes(1); 
  });
});




