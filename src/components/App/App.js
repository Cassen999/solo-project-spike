import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {

  actionSendSms() {
    axios.get('http://localHost:5000/api/sms')
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Send yourself a text</h1>
        </header>
        <br/>
        <button onClick={this.actionSendSms}>Send Test SMS</button>
      </div>
    );
  }
}

export default App;
