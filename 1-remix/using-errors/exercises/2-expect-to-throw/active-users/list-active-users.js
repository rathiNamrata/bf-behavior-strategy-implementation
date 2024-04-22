// your code

import { findActiveUsers } from './find-active-users.js';

/**
 * returns an array of all active user names
 * @param {object[]} users - an array of user objects
 * @returns {string[]} an array of user names
 * @throws{TypeError} Throws a TypeError if the argument is
 * not an array, or if the array contains invalid elements.
 */

export const listActiveUsers = (users) => {
    const activeUsers = findActiveUsers(users);
    return activeUsers.map((user) => user.userName);
};
