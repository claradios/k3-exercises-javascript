import { apiFilms } from './fixtures/filmApiFixture.js';
import { mockedFilm, mockedList } from './fixtures/filmElementsFixture.js';
import { fixSearchSection, flipCard, filterTitle, cleanContainers, pickCard, resetFlippedCard, showDescription } from '../js/interaction.js';


describe("Filter function", () => {

    test("it should filter by a search term (a)", () => {

        const input = [
            { title: 'fast and furious', description: "https://www.url1.dev" },
            { title: 'oooooo', description: "https://www.url2.dev" },
            { title: 'eeeeeee', description: "https://www.link3.dev" }
        ];
        const text = 'a';
        const output = [{ title: 'fast and furious', description: "https://www.url1.dev" }];
        expect(filterTitle(input, text)).toEqual(output);
    });

    test("it shoud filter by title search (Castle in the Sky) no matter if uppercase or not", () => {
        const textB = 'CastLE in thE SKY'
        expect(filterTitle(apiFilms, textB)).toEqual([apiFilms[0]]);
    });
});

describe("cleanContainers method resets any containers interior to empty", () => {

    test("it should empty a container that is .lenght > 0", () => {

        document.body.innerHTML = '<section class="testing">Info for testing</section>';
        const selector = document.querySelector('.testing');
        const output = '';
        cleanContainers(selector);

        expect(selector.innerHTML).toEqual(output);
        expect(selector.innerHTML.length).toBe(0);
    });

});


describe("Function that takes elements from dom element and return and object", () => {

    test("it should return elements that contain specific clases", () => {

        document.body.innerHTML = `${mockedFilm}`;
        const film = document.querySelector('li');
        const result = pickCard(film);

        expect(result.description.classList.contains('film__description')).toBe(true);
        expect(result.info.classList.contains('film__info')).toBe(true);
        expect(result.btn.classList.contains('film__button')).toBe(true);
        expect(result.title.classList.contains('film__title')).toBe(true);
        expect(result).toBeTruthy();
        expect(result).toHaveProperty('description');
        expect(result).toHaveProperty('info');
        expect(result).toHaveProperty('btn');
        expect(result).toHaveProperty('title');
    });

});

describe("Function that TOGGLE or REMOVE classes from card elements", () => {

    const TOGGLE = 'toggle';
    const REMOVE = 'remove';

    test("it should toggle classes when parameter is TOGGLE", () => {
        document.body.innerHTML = `${mockedFilm}`;
        const film = document.querySelector('li');

        flipCard(film, TOGGLE);

        expect(pickCard(film).description.classList.contains('hidden')).toBeFalsy();
        expect(pickCard(film).description.classList.contains('film__description')).toBe(true);
        expect(pickCard(film).info.classList.contains('hidden')).toBeTruthy();
        expect(pickCard(film).btn.classList.contains('rotate')).toBeTruthy();
        expect(pickCard(film).title.classList.contains('highlight-title')).toBeTruthy();

    });

    test("it should toggle classes when parameter is REMOVE", () => {
        document.body.innerHTML = `${mockedFilm}`;
        const film = document.querySelector('li');

        flipCard(film, TOGGLE);
        flipCard(film, REMOVE);

        expect(pickCard(film).description.classList.contains('hidden')).toBeTruthy();
        expect(pickCard(film).description.classList.contains('film__description')).toBe(true);
        expect(pickCard(film).info.classList.contains('hidden')).toBeFalsy();
        expect(pickCard(film).btn.classList.contains('rotate')).toBeFalsy();
        expect(pickCard(film).title.classList.contains('highlight-title')).toBeFalsy();

    });

});

describe("Function filters an iterable object of cards from dom and maps it to flip it", () => {
    describe("Function filters an iterable object of cards from dom and maps it to flip it", () => {

        test("it should return elements that contain specific clases", () => {

            document.body.innerHTML = `${mockedList}`;
            const id = "2a";
            const selector = 'li';
            resetFlippedCard(id, selector);
            const filmA = document.getElementById('2a');
            const filmB = document.getElementById('2b');

            expect(filmA.querySelector('.film__description').classList.contains('hidden')).toBeFalsy;
            expect(filmB.querySelector('.film__description').classList.contains('hidden')).toBetruthy;
        });
    });

    test("it should return elements that contain specific clases", () => {

        document.body.innerHTML = `${mockedList}`;
        const id = "2a";
        const selector = 'li';
        resetFlippedCard(id, selector);
        const filmA = document.getElementById('2a');
        const filmB = document.getElementById('2b');

        expect(filmA.querySelector('.film__description').classList.contains('hidden')).toBeFalsy;
        expect(filmB.querySelector('.film__description').classList.contains('hidden')).toBetruthy;
    });
});



describe('searchSection method', () => { 

    test('adds sticky css class when window.pageYOffset > 0', () => {
        Object.defineProperty(window, 'pageYOffset', { value: 14 });

        const section = document.createElement('section');
       
        section.setAttribute("offsetTop", 0);
  
        fixSearchSection(section);
       
        expect(section.classList).toContain('sticky');      
    });
    
    test('removes sticky css class when window.pageYOffset < 0', () => {
        Object.defineProperty(window, 'pageYOffset', { value: 0 });

        const section = document.createElement('section');
       
        section.setAttribute("offsetTop", 0);
  
        fixSearchSection(section);
       
        expect(section.classList).not.toContain('sticky');      
    });
});

