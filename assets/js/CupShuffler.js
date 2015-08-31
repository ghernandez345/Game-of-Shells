/**
 * The Game Suffler handles the generation of the different states
 * of the game.
 */

import * as arrayUtils from './utils/arrayUtils';
import clone from 'clone';

// Set constants for number of possible cup swaps
const MIN_SWAPS = 10;
const MAX_SWAPS = 20;
const CUP_ELEMENTS = [1, 2, 3];


class CupShuffler extends Object {

  constructor () {
    super();
    this.cups = [1, 2, 3];
  }

  startNewGame () {
    this.cups = [1, 2, 3];
    this.shuffleCups();
  }

  shuffleCups () {
    let shuffles = [];
    for (var i = 0; i < 10; i++) {
      this.swapRandomCups();
      shuffles.push(clone(this.cups));
    }

    console.log(shuffles);
  }

  swapRandomCups () {
    let shuffledItems = arrayUtils.shuffle(clone(CUP_ELEMENTS));
    arrayUtils.swapElements(this.cups, shuffledItems[0], shuffledItems[1]);
  }

};

export default CupShuffler;
