import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Index from './components/Index'
import Project from './components/Project'


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const images = [
  {
    imgUrl: "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4",
    class: "item"
  },
  {
    imgUrl: "https://i.imgur.com/1sFNhXf.jpg",
    class: "item-super-wide"
  },
  {
    imgUrl: "https://i.imgur.com/1sFNhXf.jpg",
    class: "item-super-wide"
  },
  {
    imgUrl: "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4",
    class: "item"
  }
]

const projectsData = [
  {
    title: 'First title',
    desc: 'This is the description yo!'
  },
  {
    title: 'Second title',
    desc: 'This is the description yo!'
  },
  {
    title: 'Third title',
    desc: 'This is the description yo!'
  },
  {
    title: 'Fourth title',
    desc: 'This is the description yo!'
  }
]


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { projectinfo: {index: 1} }
  }

  updateState = (int) => {
    console.log('test', int)
    this.setState({
      ...this.state,
      projectinfo: {
        index: int
      }
    })

    console.log('im updating the state')
  }


  render() {
    console.log('i should be rendering now')
    return (
      <Index projectsData={ projectsData } updateState={this.updateState} projectinfo={ this.state.projectinfo } images={ images }/>
    );
  }
}

export default App;
