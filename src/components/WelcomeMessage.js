import React, {Component} from 'react'


class WelcomeMessage extends Component {

  render() {
    return (
      <div id="welcome-message">

        <h1>Draw-n-Discuss</h1>
        <h2>A simple place to make art and conversation</h2>
        Inside, we have a live-updating canvas for you to draw on!<br />
        We also have a chatroom for discussing as you draw.<br />
        Please enter a user name to display in the chatroom, and enjoy! :)

      </div>
    )
  }

}

export default WelcomeMessage
