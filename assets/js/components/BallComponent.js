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
        <h3>ball</h3>
      </div>
    )
  }

}

export default BallComponent;
