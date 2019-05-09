import React, {Component} from 'react'
import Message from './Message'

class MessageList extends Component {
  messagesEnd = React.createRef()

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }
  
  scrollToBottom = () =>  {
    if (this.messagesEnd.current) {
      this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  createMessages = () => {
    return this.props.messages.map(message => {
      return (
        <Message
          message={message}
          key={Math.random()}
          text={message.text}
          name={this.props.users[message.user_id]}
          tempName={sessionStorage.getItem('name')}
          fetchUsers={this.props.fetchUsers}
        />
      )
    })
  }

  render() {
    if(this.props.messages.length > 0) {
      return (
        <div className="messageList">
          <ul>
            {this.createMessages()}
          </ul>
          <div ref={this.messagesEnd} />
        </div>
      )} else {
        return <div></div>
      }
   }

}

export default MessageList
