/**
 * Ball component simply renders a ball at the specific location
 */

import React from 'react';


class BallComponent extends React.Component {

  render () {
    let classes = 'ball';
    classes += ' position-' + this.props.position;
    return (
      <div className={classes}>
        <img src="assets/images/ball.png" />
      </div>
    )
  }

}

export default BallComponent;
