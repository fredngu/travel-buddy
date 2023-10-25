import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Flight from './components/Flight';
import Button from '@mui/material/Button'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click the button to load data!',
      flightData: [],
      isLoading: false,
    };
  }

  fetchData = () => {
    axios
      .get('/api/data')
      .then((response) => {
        // handle success
        console.log(response.data);

        console.log(response.data.message);
        this.setState({
          message: response.data.message,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>{this.state.message}</h1>
        <Button variant="contained" onClick={this.fetchData}>Fetch Data</Button>
        <Flight />
      </div>
    );
  }
}

export default App;
