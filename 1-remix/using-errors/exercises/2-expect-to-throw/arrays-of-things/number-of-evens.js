// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const numberOfEvens = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('numbers must be an array of numbers.');
    }

    let evenCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        }
    }

    return evenCount;
};
