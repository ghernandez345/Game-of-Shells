/**
 * Game component
 */

import React from 'react';
import CupComponent from './CupComponent';
import CupShuffler from '../CupShuffler';

// Initialize a cupShuffler instance.
var cupShuffler = new CupShuffler();
cupShuffler.startNewGame(function () {

});


class GameComponent extends React.Component {


  handleClick (e) {
    cupShuffler.startNewGame((moves) => {
      this.setState(moves);
    });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>Start Game</button>

        <CupComponent />
        <CupComponent />
        <CupComponent />
      </div>
    );
  }
};

export default GameComponent;
