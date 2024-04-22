// #todo

/**
 *
 * @param {*} array
 * @returns
 */

export const isArrayOfNumbers = (arr = []) => {
    if (!Array.isArray(arr)) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            return false;
        }
    }

    return true;
};
