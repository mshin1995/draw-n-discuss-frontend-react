import React, {Component, Fragment} from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'


import GameWindow from './components/GameWindow'
import UserForm from './components/UserForm'
import CardContainer from './components/CardContainer'
import HeaderBar from './components/HeaderBar'


class App extends Component {

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleResize);
  }

  componentWillUnmount(){
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('scroll', this.handleResize);
  }

  handleResize = () => {
      this.forceUpdate();
  };

  rerenderApp = () => {
    this.forceUpdate()
  }

  render() {
    return (
      <Fragment>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <Router>
          <div className="App">

            <HeaderBar />

            <Route exact path="/" render={(props) => <UserForm {...props} rerenderApp={this.rerenderApp} />} />
            <Route path="/draw" component={GameWindow} />
            <Route path="/gallery" component={CardContainer} />

          </div>
        </Router>
      </Fragment>
    );
  }

}

export default App;
