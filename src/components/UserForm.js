import React, {Component} from 'react'
import {HEADERS, API_ROOT} from '../constants';
import WelcomeMessage from './WelcomeMessage'


class UserForm extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_ROOT}/users`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        'name': this.state.name,
      })
    })

    // console.log(data)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.id)
      sessionStorage.setItem('id', data.id)
      sessionStorage.setItem('name', data.name)
      this.props.rerenderApp()
    })

    this.props.history.push('/draw')

  }

  render() {
    return(
      <div>
        <WelcomeMessage />

        <div id='form'>
  				<h1 id='enter'>Enter your name:</h1>
          <form id="user_form" onSubmit={this.handleSubmit}>
            <input id="user_input" type="text" name="user" onChange={this.handleChange} required/>
            <br />
            <br />
            <input id="user_submit" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }

}

export default UserForm
