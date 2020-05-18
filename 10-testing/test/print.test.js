import { showFilmAnswer, mapCards, createNodeFilm, printErrorMsg, addClickListener } from '../js/print.js';
import { mockedMsg, filmObjInput, filmCardOutput } from './fixtures/filmElementsFixture.js';


describe('methods for creating HTML Film Card Elements', () => {
    test('in createNodeFilm the result is defined', () => {
        const film = {};
        expect(createNodeFilm(film)).toBeDefined()
    });
    test('in createNodeFilm returns string', () => {
        expect(createNodeFilm(filmObjInput)).toEqual(filmCardOutput)
    });
})

describe('method for creating messages into html tag', () => {

    test('in printMsg the result is defined with nice paht', () => {
        document.body.innerHTML = '<section class="testing"></section>'

        const selector = document.querySelector('.testing')
        const output = `<p class="info__no-result">${mockedMsg}</p>`;

        printErrorMsg(mockedMsg, selector);

        expect(selector.innerHTML).toBe(output);
    });

})

describe('method that add listeners to every button existing on DOM', () => {

    test('if introduce element , the element gets its listener after func execution', () => {
        document.body.innerHTML = `<button class="btn-a">+</button>
                                   <button class="btn-b">+</button>
                                   <button class="btn-c">+</button>`;

        const selector = 'button';
        const func = jest.fn();
        addClickListener(selector, func);

        const BtnA = document.querySelector('.btn-a');
        const BtnB = document.querySelector('.btn-b');
        const BtnC = document.querySelector('.btn-c');
        BtnA.click();
        BtnB.click();    
        BtnC.click();

        expect(func).toHaveBeenCalled();
        expect(func).toHaveBeenCalledTimes(3);
    });
})

describe("Function that gets info from the array and convert it into html node", () => {

    test("it should return an string html like that contains text from the object values", () => {


        const fakeArray = [
            {
                "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
                "title": "Castle in the Sky",
                "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
                "director": "Hayao Miyazaki",
                "producer": "Isao Takahata",
                "release_date": "1986",
                "rt_score": "95",
            }
        ]

        const result = mapCards(fakeArray);

        expect(mapCards).toBeTruthy();
        expect(result).toMatch(/Castle in the Sky/);
        expect(result).toMatch(/orphan Sheeta inherited a mysterious/);
        expect(result).toMatch(/Hayao Miyazaki/);
        expect(result).toMatch(/95/);
    });

    test("it should return an string html like that contains html labels", () => {


        const fakeArray = [
            {
                "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
                "title": "Castle in the Sky",
                "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
                "director": "Hayao Miyazaki",
                "producer": "Isao Takahata",
                "release_date": "1986",
                "rt_score": "95",
            }
        ]

        const result = mapCards(fakeArray);

        expect(mapCards).toBeTruthy();
        expect(result).toMatch(/li/);
        expect(result).toMatch(/h2/);
        expect(result).toMatch(/div/);
        expect(result).toMatch(/p/);
        expect(result).toMatch(/span/);        
    });
});


describe("Function that introudces all the final result into html if any or includes error msg if empty", () => {

    test("it should be a list with content after execution", () => {

        document.body.innerHTML = `<div class="display__additional-info"></div>
                                            <ul class="display__list">`;

        const container = document.querySelector('.display__additional-info');
        const list = document.querySelector('.display__list');
        const result = '<li>contenido de la lista</li>';

        showFilmAnswer(result, list, container);

        expect(showFilmAnswer).toBeTruthy();
        expect(container.innerHTML.length).toBe(0);
        expect(list.innerHTML).toEqual(result);

    });

    test("it should call printError if result === '' ", () => {

        document.body.innerHTML = `<div class="display__additional-info"></div>
                                            <ul class="display__list">`;

        const container = document.querySelector('.display__additional-info');
        const list = document.querySelector('.display__list');
        const result = '';
        const errorMsg = '<p class="info__no-result">Your search has no match. Please try again</p>';

        showFilmAnswer(result, list, container);

        expect(showFilmAnswer).toBeTruthy();
        expect(list.innerHTML.length).toBe(0);
        expect(container.innerHTML).toEqual(errorMsg);

    });
});
