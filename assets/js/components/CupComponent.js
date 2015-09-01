/**
 * Cup component is an individual cup for the game
 */


import React from 'react';


class CupComponent extends React.Component {

  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let isWinner = this.props.cup === 0
    this.props.endGame(isWinner);
  }


  render() {

    // generate class string for component
    let classes = 'cup-component';
    classes += ' position-' + this.props.order;
    classes += this.props.isUp ? ' up' : ' down';


    return (
      <div className={classes} onClick={this.handleClick}>
        <h1>cup</h1>
      </div>
    );
  }
}

export default CupComponent;
