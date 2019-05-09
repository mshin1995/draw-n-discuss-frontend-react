import React, {Component} from 'react'


class ViewGalleryButton extends Component {

  handleClick = () => {
    this.props.history.push('/gallery')
  }

  render() {
    return (
      <button id="view-gallery-button" onClick={this.handleClick.bind(this)}>
        Gallery
      </button>
    )
  }

}

export default ViewGalleryButton
