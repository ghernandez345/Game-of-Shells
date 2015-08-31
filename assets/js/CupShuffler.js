/**
 * The Game Suffler handles the generation of the different states
 * of the game.
 */

import * as arrayUtils from './utils/arrayUtils';
import clone from 'clone';

// Set constants for number of possible cup swap and cup element indexes
const MIN_SWAPS = 10;
const MAX_SWAPS = 20;
const CUP_INDEXES = [1, 2, 3];


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
    let shuffledIndexes = arrayUtils.shuffle(clone(CUP_INDEXES));
    arrayUtils.swapElements(this.cups, shuffledIndexes[0], shuffledIndexes[1]);
  }

};

export default CupShuffler;
