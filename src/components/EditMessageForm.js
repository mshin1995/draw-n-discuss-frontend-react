import React, {Component} from 'react'


class EditMessageForm extends Component {

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.hideEditForm();
    let text = document.getElementById(`edit-text-${this.props.messageId}`)
    this.props.patchMessage(text.value)
  }

  render() {
    return (
      <form className="edit-message-form" onSubmit={this.handleSubmit}>
        <input id={`edit-text-${this.props.messageId}`} type="text" placeholder={this.props.message.text} />
        <input type="submit" />
      </form>
    )
  }

}

export default EditMessageForm
