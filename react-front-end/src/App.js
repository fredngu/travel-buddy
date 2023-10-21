import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import { FlightList, Footer, Input } from './components';

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
        <button onClick={this.fetchData}>Fetch Data</button>

        {/* Handle search flights using API */}
        <div className='relative min-h-[100vh] dark:bg-gray-700 dark:text-white'>
          <div className="pb-[2.5rem]">
            <div className="md:px-12 ">
              <Input
                setFlightData={(data) => this.setState({ flightData: data })}
                setIsLoading={(loading) => this.setState({ isLoading: loading })}
              />
            </div>
          </div>
          <FlightList
            flightData={this.state.flightData}
            isLoading={this.state.isLoading}
          />
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
