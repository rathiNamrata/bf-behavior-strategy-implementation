/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c5857682a32d000154e5ef */

/* this exercise has 2 distractors */

const removeExclamationMarks = (str) => {
    const result = Array.from(str).filter((element) => {
        return element !== '!';
    });
    return result.join('');
};

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

// element !== '!'; // distractor
// const result = s.filter((element) => { // distractor
