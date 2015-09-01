/**
 * Cup component is an individual cup for the game. It can render in a variety
 * of locations based on its properties.
 */


import React from 'react';


class CupComponent extends React.Component {

  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let isWinner = this.props.cup === 0;
    this.props.endGame(isWinner, this.props.position);
  }


  render() {

    // generate class string for component
    let classes = 'cup-component';
    classes += ' position-' + this.props.position;
    classes += this.props.isUp ? ' up' : ' down';


    return (
      <div className={classes} onClick={this.handleClick}>
        <img src="assets/images/shell.png" />
      </div>
    );
  }
}

export default CupComponent;
