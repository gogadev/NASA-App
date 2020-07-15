import React, { Component } from "react";

import axios from "axios";

import { Switch, Route } from "react-router-dom";

import { NASA_API_KEY } from "./config";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import NasaRover from "./components/nasa-rover/NasaRover";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nasaData: {},
      fetching: false,
      error: null,
    };
  }

  componentDidMount = () => {
    this.setState({
      fetching: true,
    });
    const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
    axios
      .get(nasaUrl)
      .then((res) => {
        this.setState({
          nasaData: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
          fetching: false,
        });
      });
  };

  render() {
    const { nasaData } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Main nasaData={nasaData} />} />
          <Route path="/nasa" component={NasaRover} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
