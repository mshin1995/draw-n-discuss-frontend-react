import React, {Component} from 'react'
import Canvas from './Canvas'
import Chatroom from './Chatroom'
import ViewGalleryButton from './ViewGalleryButton'
import {API_ROOT} from '../constants/index.js'


class GameWindow extends Component {

  constructor(props) {
    super()
    this.state = {
      users: {}
    }
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers = () => {
    fetch(`${API_ROOT}/users`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      let obj = {}
      data.forEach(user => {
        obj[user.id] = user.name
      })
      this.setState({users: obj})
    })
  }

  render() {
    return (
      <div id="game-window">
        <Canvas saveDrawing={this.saveDrawing}/>
        <Chatroom users={this.state.users} fetchUsers={this.fetchUsers}/>
        <ViewGalleryButton history={this.props.history}/>
      </div>
    )
  }

}

export default GameWindow
