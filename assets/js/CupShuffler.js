/**
 * The Game Suffler handles the generation of the different moves
 * of the game.
 */

import * as arrayUtils from './utils/arrayUtils';
import randomNum from './utils/randomNumber';
import clone from 'clone';

// Set constants for number of possible cup swap and cup element indexes
const MIN_SWAPS = 10;
const MAX_SWAPS = 20;
const CUP_INDEXES = [1, 2, 3];


class CupShuffler extends Object {

  constructor () {
    super();
    this.cupPositions = [1, 2, 3];
  }

  /**
   * Resets the cups back to their original state and starts
   * shuffling them.
   */

  /**
   * Resets the cups back to their original state and starts
   * shuffling them.
   * @param  {Function} callback - callback called with data of the games moves.
   */
  startNewGame (callback) {
    this.cupPositions = [1, 2, 3];
    let moves = this.shuffleCups();
    callback(moves);
  }

  /**
   * Does a series of shuffles and builds an array of the moves that occured.
   * @return {Array} - Array of the shuffle moves that occcured. Each 'move' is
   *                   a snapshop of the cups positions when two cups swap.
   *                   This means the array that is returned is a 2D array.
   */
  shuffleCups () {

    let shuffledMoves = [];
    for (var i = 0; i < randomNum(15, 25); i++) {
      this.swapRandomCups();
      shuffledMoves.push(clone(this.cupPositions));
    }

    // Run callback passing shuffled moves.
    return shuffledMoves;
  }

  /**
   * Will shuffle two random cups. Does by shuffling an array that
   * represents the default cup positions and taking the first two items. This
   * will essentially give us two random cup positions that we can swap.
   */
  swapRandomCups () {
    let shuffledIndexes = arrayUtils.shuffle(clone(CUP_INDEXES));
    arrayUtils.swapElements(this.cupPositions, shuffledIndexes[0], shuffledIndexes[1]);
  }

  /**
   * Returns the initial positions of the cups.
   * @return {Array} - The init positions of cups.
   */
  getInitialCupPositions () {
    return [1, 2, 3];
  }

};

export default CupShuffler;
