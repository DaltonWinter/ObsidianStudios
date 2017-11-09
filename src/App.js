import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Index from './components/Index'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Index />
    );
  }
}

export default App;
