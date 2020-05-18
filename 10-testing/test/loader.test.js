import { loader } from '../js/loader.js';

const output = `
                  <section class="section__loader">
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                    <div class="loader__child"></div>
                  </section>`;

describe('loader component function', () => {
    test('add loader to html when introduce parentElement', () => {
        document.body.innerHTML = '<div class="display__additional-info"></div>'
        const selector = document.querySelector('.display__additional-info')
        loader(selector);
        expect(selector.innerHTML).toBe(output);        
    });
});




