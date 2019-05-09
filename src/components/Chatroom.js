import React, {Component} from 'react'
import {HEADERS, API_ROOT} from '../constants';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import {ActionCable} from 'react-actioncable-provider';

class Chatroom extends Component {
  constructor(){
    super()
    this.state = {
      messages: []
    }
    this.handleReceivedMessages = this.handleReceivedMessages.bind(this)
  }

  componentDidMount = () => {
    this.fetchMessages()
  }

  fetchMessages = () => {
    fetch(`${API_ROOT}/messages`)
      .then(resp => resp.json())
      .then(data => this.setState({
        messages: data
      }))
  }

  addNewMessage = (message) => {
    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        'text': message.text,
        'user_id': sessionStorage.getItem('id')
      })
    })
    .then(this.fetchMessages())
  }

  async handleReceivedMessages(message) {
    this.props.fetchUsers()
    await this.fetchMessages()
  }

  render() {
    return (
      <div id="chatroom">
        <ActionCable
          channel={{channel: 'MessageChannel'}}
          onReceived={this.handleReceivedMessages}
        />
      <br />
      <strong>Chatroom:
        <MessageForm
          addNewMessage={this.addNewMessage}
        />
      (Scroll down to see new messages!)</strong>
        <MessageList
          messages={this.state.messages}
          users={this.props.users}
          fetchUsers={this.props.fetchUsers}
        />

      </div>
    )
  }

}

export default Chatroom
