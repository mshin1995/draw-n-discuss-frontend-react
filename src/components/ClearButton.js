import React, {Component} from 'react'


class ClearButton extends Component {

  handleClick = () => {
    this.props.clearDrawing()
  }

  render() {
    return (
      <button id="clear-drawing-button" onClick={this.handleClick}>
      Clear
      </button>
    )
  }

}

export default ClearButton
