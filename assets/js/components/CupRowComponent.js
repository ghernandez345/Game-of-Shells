/**
 * Cup Row Component manages the list of cup components
 */

import React from 'react';
import CupComponent from './CupComponent';
import BallComponent from './BallComponent';


class CupRowComponent extends React.Component {

  render () {

    // conditionally render the ball component if we have a position
    let ball;
    if (this.props.ballPosition) {
      ball = <BallComponent position={this.props.ballPosition} />
    }

    return (
      <div className="cup-row">
        {this.mapCupPositions(this.props.cupPositions)}
        {ball}
      </div>
    );
  }


  mapCupPositions (cupPositions) {
    return cupPositions.map((position, cup) => {
      return (
        <CupComponent
          isUp={!this.props.gameInProgress}
          position={position}
          cup={cup}
          endGame={this.props.endGame}
          key={cup} />
      );
    });
  }

}


export default CupRowComponent;
