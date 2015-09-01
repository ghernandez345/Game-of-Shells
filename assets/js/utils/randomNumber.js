/**
 * Helper to generate random number
 */

/**
 * Generate a random number inclusively from 'min' to 'max'.
 * @param  {Number} min - Minimum range
 * @param  {Number} max - Maximum range
 * @return {Number}     - Generated random number
 */
function generateRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default generateRandomNumber;
