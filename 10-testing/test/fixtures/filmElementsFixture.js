const mockedMsg = 'Mensaje de prueba';

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


const filmObjInput = {
    id: 'aaaa2222',
    title: 'titulo',
    description: 'descripcion',
    director: 'director',
    rt_score: '88'
};

const filmCardOutput =
    `<li class = "film__item" id = ${filmObjInput.id}>
                      <section class="card__header">
                          <h2 class="film__title">${filmObjInput.title}</h2>
                          <button class="film__button">+</button>
                      </section>       
                      <section class = "card__main">             
                          <p class = "film__description hidden" data-id=${filmObjInput.id}>${filmObjInput.description}</p>
                          <div class = "film__info" data-id=${filmObjInput.id}>
                              <p class = "film__author"><span class = "film-icon"><i class="fas fa-video"></i></span> ${filmObjInput.director}</p>
                          <div><span class = "film-icon"><i class="fas fa-star"></i></span> ${filmObjInput.rt_score}</div>
                      </div>    
                      </section>                        
                  </li>`;

const mockedFilm = `
    <li class="film__item" id="2baf70d1-42bb-4437-b551-e5fed5a87abe">
        <section class="card__header">
            <h2 class="film__title">Castle in the Sky</h2>
            <button class="film__button">+</button>
        </section>
        <section class="card__main">
            <p class="film__description hidden" data-id="2baf70d1-42bb-4437-b551-e5fed5a87abe">The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</p>
            <div class="film__info" data-id="2baf70d1-42bb-4437-b551-e5fed5a87abe">
                <p class="film__author"><span class="film-icon"><i class="fas fa-video" aria-hidden="true"></i></span> Hayao Miyazaki</p>
                <div><span class="film-icon"><i class="fas fa-star" aria-hidden="true"></i></span> 95</div>
            </div>
        </section>
    </li>`;

const mockedList = `
    <ul>
    <li class="film__item" id="2a">
        <section class="card__header">
            <h2 class="film__title">Film 1</h2>
            <button class="film__button">+</button>
        </section>
        <section class="card__main">
            <p class="film__description" data-id="2baf70d1-42bb-4437-b551-e5fed5a87abe">The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</p>
            <div class="film__info" data-id="2baf70d1-42bb-4437-b551-e5fed5a87abe">
                <p class="film__author"><span class="film-icon"><i class="fas fa-video" aria-hidden="true"></i></span> Hayao Miyazaki</p>
                <div><span class="film-icon"><i class="fas fa-star" aria-hidden="true"></i></span> 95</div>
            </div>
        </section>
    </li>
    <li class="film__item" id="2b">
        <section class="card__header">
            <h2 class="film__title">Film 2</h2>
            <button class="film__button">+</button>
        </section>
        <section class="card__main">
            <p class="film__description hidden" data-id="2baf70d1-42bb-4437-b551-e5fed5a87abe">The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</p>
            <div class="film__info" data-id="2baf70d1-42bb-4437-b551-e5fed5a87abe">
                <p class="film__author"><span class="film-icon"><i class="fas fa-video" aria-hidden="true"></i></span> Hayao Miyazaki</p>
                <div><span class="film-icon"><i class="fas fa-star" aria-hidden="true"></i></span> 95</div>
            </div>
        </section>
    </li>
    </ul>`;



export { mockedMsg, filmObjInput, filmCardOutput, mockedFilm, mockedList, fakeArray };