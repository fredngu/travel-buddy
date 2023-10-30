import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Flight from './components/Flight';
import Button from '@mui/material/Button'
import ResponsiveAppBar from './components/muiNavBar';
import { Route, Routes, Link } from "react-router-dom";
import {Home} from "./pages/Home";
import {TripsList} from "./pages/TripsList"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click the button to load data!',
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
        <ResponsiveAppBar />
        <NavBar />
        <h1>{this.state.message}</h1>
        <Button variant="contained" onClick={this.fetchData}>Fetch Data</Button>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/trips">Trips</Link>
          </li>
        </ul>
        <Flight />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<TripsList />} />
        </Routes>
      </div>
    );
  }
}

export default App;
