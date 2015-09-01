/**
 * Game component
 */

import React from 'react';
import CupRowComponent from './CupRowComponent';
import CupShuffler from '../CupShuffler';


const SHUFFLE_TIMER = 1000;

// Initialize a cupShuffler instance.
var cupShuffler = new CupShuffler();


class GameComponent extends React.Component {

  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      cupOrder: cupShuffler.getInitialCupOrder()
    }
  }

  handleClick (e) {
    cupShuffler.startNewGame((moves) => {
      this.startGameTimer(moves);
    });
  }

  startGameTimer (moves) {
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
  }


  render () {

    return (
      <div>
        <button onClick={this.handleClick}>Start Game</button>
        <CupRowComponent cupOrder={this.state.cupOrder} />
      </div>
    );
  }

};

export default GameComponent;
