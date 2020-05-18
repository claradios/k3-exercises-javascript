'use strict';
// api endpoint
const ENDPOINT = 'https://ghibliapi.herokuapp.com/films';
// const ENDPOINT = 'https://google.com';

const callApi = () => {
    return fetch(ENDPOINT).then(res => res.json());
}


export {callApi};


