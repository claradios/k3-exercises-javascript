import { waitForCalling } from '../js/setTimeOut.js';



describe('setTimeOut launchs loader when open the page for the first time', () => {
    jest.useFakeTimers();
    test('A: waits 2 seconds showing the initial loader', () => {
        const callFilms = jest.fn()
        waitForCalling(callFilms);
        
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);

    });
});

