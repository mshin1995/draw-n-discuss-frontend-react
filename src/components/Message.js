import React, {Component} from 'react'
import EditMessageForm from './EditMessageForm'
import {HEADERS, API_ROOT} from '../constants';


class Message extends Component {

  constructor() {
    super()
    this.state = {
      edit: false,
      delete: false,
    }
  }

  handleClickEdit = () => {
    this.setState({edit: true})
  }

  handleClickDelete = () => {
    fetch(`${API_ROOT}/messages/${this.props.message.id}`, {
      method: "DELETE"
    })
  }

  renderEditForm = () => {
    if (this.state.edit) {
      return <EditMessageForm message={this.props.message} messageId={this.props.message.id} patchMessage={this.patchMessage} hideEditForm={this.hideEditForm}/>
    }
  }

  hideEditForm = () => {
    this.setState({edit: false})
  }

  patchMessage = (newMessage) => {
    fetch(`${API_ROOT}/messages/${this.props.message.id}`, {
      method: "PATCH",
      headers: HEADERS,
      body: JSON.stringify(newMessage)
    })
    .then(this.props.fetchUsers())
  }

  render() {
    return (
      <div className="message">
        <p><strong>{this.props.name}</strong>: {this.props.text}</p>

        {this.renderEditForm()}

        <button className="edit-button" onClick={this.handleClickEdit}>Edit</button>
        <button className="delete-button" onClick={this.handleClickDelete}>Delete</button>
      </div>
    )
  }

}

export default Message
