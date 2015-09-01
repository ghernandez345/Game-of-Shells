/**
 * Message Component renders appropriate game messages.
 */


import React from 'react';

class MessageComponent extends React.Component {

  render () {
    return (
      <div className="message">
        <p>{this.props.message}</p>
      </div>
    )
  }

}

export default MessageComponent
