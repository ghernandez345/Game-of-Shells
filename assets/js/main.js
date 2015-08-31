/**
 * Main entry point into application
 */

import React from 'react';
import GameComponent from './components/GameComponent';
import CupShuffler from './CupShuffler';


var cupShuffler = new CupShuffler();
cupShuffler.startNewGame();

// render game into into DOM node.
var node = document.querySelector('#game-container');
React.render(<GameComponent />, node);
