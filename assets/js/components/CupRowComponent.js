/**
 * Cup Row Component manages the list of cup components
 */

import React from 'react';
import CupComponent from './CupComponent';


class CupRowComponent extends React.Component {

  render () {
    return (
      <div className="cup-row">
        {this.mapCupOrder(this.props.cupOrder)}
      </div>
    );
  }


  mapCupOrder (cupOrder) {
    return cupOrder.map((order, i) => {
      return (
        <CupComponent
          isUp={!this.props.gameInProgress}
          order={order}
          cup={i}
          endGame={this.props.endGame}
          key={i} />
      );
    });
  }

}


export default CupRowComponent;
