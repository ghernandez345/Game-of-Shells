/**
 * Game component
 */

import React from 'react';
import CupComponent from './CupComponent';
import GameShuffler from '../CupShuffler';


class GameComponent extends React.Component {


  handleClick (e) {

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
