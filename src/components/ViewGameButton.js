import React, {Component} from 'react'


class ViewGameButton extends Component {

  handleClick = () => {
    this.props.history.push('/draw')
  }

  render() {
    return (
      <button id="view-game-button" className="view-game-button" onClick={this.handleClick.bind(this)}>
        Back to drawing!
      </button>
    )
  }

}

export default ViewGameButton
