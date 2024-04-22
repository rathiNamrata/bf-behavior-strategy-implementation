/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/58c58b7262f372bb330003a1 */

/* this exercise has 3 distractors */

const removeExclamationMarks = (s) => {
    var arr = s.split('');
    arr = arr.filter(function (e) {
        return e !== '!';
    });
    return arr.join('');
};

describe('remove exclamation marks from a string', () => {
    it('Hello!  -> Hello', () => {
        expect(removeExclamationMarks('Hello!')).toEqual('Hello');
    });

    it('go! and come! -> go and come', () => {
        expect(removeExclamationMarks('go and come')).toEqual('go and come');
    });
    it('hi!!!!!!!!!! -> hi', () => {
        expect(removeExclamationMarks('hi')).toEqual('hi');
    });
});

// arr.filter(function (e) { // distractor
// var arr = s.join(''); // distractor
// return arr.split(''); // distractor
