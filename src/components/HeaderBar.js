import React, {Component} from 'react'


class HeaderBar extends Component {

  toggleMessage = () => {
    if (sessionStorage.getItem('name') !== null) {
      return <h2>Welcome to Draw-n-Discuss! Draw on the canvas below, and discuss in the chatroom! (You are logged in as {sessionStorage.getItem('name')})</h2>
    } else {
      return <h2>Welcome to Draw-n-Discuss! Don't forget to <a href="/">enter a user name!</a> ;)</h2>
    }
  }

  render() {
    return (
      <div id="header-bar">
        {this.toggleMessage()}
      </div>
    )
  }

}

export default HeaderBar
