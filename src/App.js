import './App.scss';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/Tourlist';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <TourList/>
      </React.Fragment>
     
    );
  }
}

