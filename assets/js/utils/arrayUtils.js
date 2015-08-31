/**
 * Shuffle is a utility that handles the shuffling of the elements
 * in an array. It is from the Fisher-Yates shuffle algorithm.
 */

'use strict';

export function swapElements (array, element1, element2) {
  var index1 = array.indexOf(element1);
  var index2 = array.indexOf(element2);
  
  array[index1] = element2;
  array[index2] = element1;
}

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
