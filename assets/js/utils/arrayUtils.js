/**
 * These are utility that handles the shuffling of the elements
 * in an array. It is from the Fisher-Yates shuffle algorithm.
 */

'use strict';

/**
 * Will swap two elements in an array.
 * @param  {Array} array     - Array whos items we want to swap.
 * @param  {Number} element1 - First element we'd like to swap.
 * @param  {Number} element2 - Second element to swap with the first element.
 */
export function swapElements (array, element1, element2) {
  var index1 = array.indexOf(element1);
  var index2 = array.indexOf(element2);

  // Swap elements after finding their indexes.
  array[index1] = element2;
  array[index2] = element1;
}

/**
 * Handles the shuffling of the elements in an array.
 * It is from the Fisher-Yates shuffle algorithm.
 * @param  {Array} array - Array to shuffle.
 * @return {Array}       - The shuffled array.
 */
export function shuffle (array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
