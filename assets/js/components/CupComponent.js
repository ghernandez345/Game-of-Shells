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
    console.log(this.props);
  }

  render() {
    let classes = 'cup-component';
    classes += ' position-' + this.props.order;
    return (
      <div className={classes} onClick={this.handleClick}>
        <h1>cup</h1>
      </div>
    );
  }
}

export default CupComponent;
