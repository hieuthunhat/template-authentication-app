/**
 * Check if the current role matches the expected role
 * @param {*} currentRole 
 * @param {*} expectedRole 
 * @returns 
 */
export const checkRole = (currentRole = 'user', expectedRole = 'user') => {
    // Get all the current roles (in case of multiple roles)
    return currentRole === expectedRole;
}