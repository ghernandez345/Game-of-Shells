/**
 * Game component
 */

import React from 'react';
import CupRowComponent from './CupRowComponent';
import CupShuffler from '../CupShuffler';


const SHUFFLE_TIMER = 600;

// Initialize a cupShuffler instance.
var cupShuffler = new CupShuffler();


class GameComponent extends React.Component {

  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.onEndGame = this.onEndGame.bind(this);
    this.state = {
      cupOrder: cupShuffler.getInitialCupOrder(),
      gomeInProgress: false
    }
  }

  handleClick (e) {
    cupShuffler.startNewGame((moves) => {
      this.startGameTimer(moves);
    });
  }

  startGameTimer (moves) {
    this.setState({
      gameInProgress: true
    });

    setTimeout(() => {
      let stepCount = 0;
      let gameTimer = setInterval(() => {
        this.setState({
          cupOrder: moves[stepCount]
        });
        stepCount++;
        if (stepCount === moves.length) {
          clearInterval(gameTimer);
        }
      }, SHUFFLE_TIMER);

    }, 1500);
  }

  onEndGame (isWinner) {
    if (isWinner)
    this.setState({
      gameInProgress: false
    });


  }

  render () {

    return (
      <div>
        <button onClick={this.handleClick}>Start Game</button>
        <CupRowComponent endGame={this.onEndGame} {...this.state} />
      </div>
    );
  }

};

export default GameComponent;
