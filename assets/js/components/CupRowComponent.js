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
    return cupOrder.map((cup, i) => {
      return (
        <CupComponent order={cup} key={cup} />
      );
    });
  }

}


export default CupRowComponent;
