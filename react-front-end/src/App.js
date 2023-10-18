import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import LoginButton from './api/login';
import { Auth0Provider } from '@auth0/auth0-react';
import LogoutButton from './api/logout';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <div className="App">
          <Auth0Provider
            domain="dev-6jhms23po3hoo2lj.us.auth0.com"
            clientId="TybkdIkTe6Yd8FMUl78uDXEy6dREGsry"
            authorizationParams={{
              redirect_uri: window.location.origin
            }}
          >
            <LoginButton />
            <LogoutButton />
          </Auth0Provider>
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
      </div>
    );
  }
}

export default App;
