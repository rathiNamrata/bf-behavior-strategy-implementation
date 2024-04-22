/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f9488b2faf02e74c000536 */

/* this exercise has 3 distractors */

const removeExclamationMarks = (str) => str.replace(/!/g, '');

let removeExclamationMarks = function(s) { s.replace(/!/g, ''); } // distractor
let removeExclamationMarks = (s) => { s.replace(/!/g, ''); } // distractor
let removeExclamationMarks => (s) = s.replace(/!/g, ''); // distractor


describe('remove exclamation marks from a string', () => {
    it('Hello!  -> Hello', () => {
        expect(removeExclamationMarks('Hello!')).toEqual('Hello');
    });

    it('go! and come! -> go and come', () => {
        expect(removeExclamationMarks('go! and come!')).toEqual('go and come');
    });
    it('hi!!!!!!!!!! -> hi', () => {
        expect(removeExclamationMarks('hi!!!!!!!!!!')).toEqual('hi');
    });
});