import React, { Component } from 'react';
import './App.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import ApolloClient from 'apollo-boost';

import 'react-chat-widget/lib/styles.css';

//EJECUTAR npm install --save react-chat-widget


class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("Mensaje receptor");
  }
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() { 
    return (  
      <div className="App">
        <Widget title="Nombre Remitente" handleNewUserMessage={this.handleNewUserMessage}/>
      </div>
    );
  }
}
 
export default App;