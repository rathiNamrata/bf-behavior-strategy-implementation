// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.test.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const sumNumbers = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('Input must be an array of numbers.');
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
};
