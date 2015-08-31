/**
 * Main entry point into application
 */

import React from 'react';
import GameComponent from './components/GameComponent';

// render game into into DOM node.
React.render(<GameComponent />, document.querySelector('#game-container'));
