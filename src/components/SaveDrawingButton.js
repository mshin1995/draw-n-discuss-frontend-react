import React, {Component} from 'react'


class SaveDrawingButton extends Component {

  handleClick = () => {
    this.props.saveDrawing()
  }

  render() {
    return (
      <button id="save-drawing-button" onClick={this.handleClick}>
      Save
      </button>
    )
  }

}

export default SaveDrawingButton
