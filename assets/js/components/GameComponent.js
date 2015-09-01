/**
 * Game Component is responsible for setting the various game states and
 * sending it to its children components to render.
 */

import React from 'react';
import CupShuffler from '../CupShuffler';
import GameMessages from '../utils/gameMessages';
import CupRowComponent from './CupRowComponent';
import MessageComponent from './MessageComponent';


// game timers.
const SHUFFLE_TIMER = 350;
const GAME_START_DELAY = 800;

// We will use this instance to generate our game moves.
var cupShuffler = new CupShuffler();


class GameComponent extends React.Component {

  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.onEndGame = this.onEndGame.bind(this);

    // Set init state.
    this.state = {
      cupPositions: cupShuffler.getInitialCupPositions(),
      gomeInProgress: false,
      ballPosition: 1,
      gameMessage: GameMessages.startGame
    }
  }

  /**
   * Click handler to start game.
   */
  handleClick () {
    cupShuffler.startNewGame((moves) => {
      this.startGame(moves);
    });
  }

  /**
   * Starts the game and performs cup shuffling after a delay.
   * @param  {Array} moves - Array of the suffling moves.
   */
  startGame (moves) {
    this.setState({
      gameInProgress: true,
      gameMessage: GameMessages.ready
    });

    setTimeout(() => {
      this.shuffleCups(moves);
      this.setState({
        ballPosition: null,
        gameMessage: GameMessages.beginShuffle
      });
    }, GAME_START_DELAY);
  }

  /**
   * Sets the game state based on the each of the moves. This is updated
   * on an interval we set.
   * @param  {Array} moves - Array of the suffling moves.
   */
  shuffleCups (moves) {
    let stepCount = 0;
    let gameTimer = setInterval(() => {

      this.setState({
        cupPositions: moves[stepCount]
      });

      // clear out the interval when we have gone through
      // all the moves. We also set the ball position to position
      // of whichever cup is at index 0.
      stepCount++;
      if (stepCount === moves.length) {
        this.setState({
          gameMessage: GameMessages.endShuffle
        });
        this.updateBallPosition(moves[stepCount - 1][0])
        clearInterval(gameTimer);
      }

    }, SHUFFLE_TIMER);
  }

  /**
   * Update the ballposition after a delay. This delay is to allow the
   * animation to compelete.
   * @param  {Number} position - Position of where to place the ball.
   */
  updateBallPosition (position) {
    setTimeout(() => {
      this.setState({
        ballPosition: position
      });
    }, 500);
  }


  /**
   * End game handler that sets the end game state based on a win or
   * a loss.
   * @param  {Boolean} isWinner    - Boolean if user won.
   * @param  {Number}  endPosition - Number representing the ending position
   *                                 of the ball.
   */
  onEndGame (isWinner, endPosition) {
    var endGameState = {
      gameInProgress: false
    };
    endGameState.gameMessage = isWinner ? GameMessages.winGame : GameMessages.loseGame;
    this.setState(endGameState);
  }


  render () {
    return (
      <div>
        <button onClick={this.handleClick}>Start Game</button>
        <MessageComponent message={this.state.gameMessage} />
        <CupRowComponent endGame={this.onEndGame} {...this.state} />
      </div>
    );
  }

};

export default GameComponent;
