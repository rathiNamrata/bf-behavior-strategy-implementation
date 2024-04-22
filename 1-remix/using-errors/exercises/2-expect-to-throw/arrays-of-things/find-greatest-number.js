// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *Finds the greatest number in an array of numbers to search.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number | undefined} The greatest number in the array, or undefined if the
 * array is empty or contains no valid numbers.
 * @throws {TypeError} Throws a TypeError if the argument is
 * not an array, or if the array contains invalid elements.
 */
export const findGreatestNumber = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('numbers must be an array of numbers.');
    }
    if (numbers.length === 0) {
        return undefined;
    }

    if (numbers.some(num => typeof num !== 'number' || isNaN(num))) {
        throw new TypeError('numbers must contain only valid numbers');
    }

    let greatestNumber = numbers[0];
     for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > greatestNumber) {
            greatestNumber = numbers[i];
        }
    }

    return greatestNumber;
};
