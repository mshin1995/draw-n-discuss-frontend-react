import React, {Component} from 'react'
import GalleryCard from './GalleryCard'
import {API_ROOT} from '../constants/index.js'
import ViewGameButton from './ViewGameButton'


class CardContainer extends Component {

  constructor() {
    super()
    this.state = {
      savedDrawings: null,
      numCards: 0
    }
  }

  componentDidMount() {
    fetch(`${API_ROOT}/saved_drawings`)
    .then(res => res.json())
    .then(data => {
      this.setState({savedDrawings: data, numCards: data.length})
    })
  }

  renderCards = () => {
    // debugger
    // console.log("savedDrawings: ", this.state.savedDrawings)

      if (this.state.savedDrawings) {
        let i = 0;
        return this.state.savedDrawings.map(drawing => {
          // debugger
          // console.log("drawing._json: ", drawing._json)
          i++;
          return <GalleryCard drawing={drawing} id={i} key={i} />
        })
      }
  }

  render() {
    return (
      <div id="card-container">
        <ViewGameButton history={this.props.history}/>
        <br />
        {this.renderCards()}
      </div>
    )
  }

}

export default CardContainer
