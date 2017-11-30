import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from'react-router-dom'
import './App.css';

import Index from './components/Index'
import Construction from './components/Construction'

import ReactPlayer from 'react-player'


import hey from './test2.mp4'

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
  },
  {
    imgUrl: "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4",
    class: "item-narrow"
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
  },
  {
    title: 'hey',
    desc: 'test'
  }
]


class App extends Component {

  constructor(props) {
    super(props)
    let index = parseInt(window.location.pathname.replace( /^\D+/g, ''))
    if (isNaN(index)) {
      index = 1
    }
    let open = false
    if (window.location.pathname.indexOf('project') != -1) {
      open = true
    }
    this.state = {
      projectinfo: {
        index: index,
        open: open
      },
      loading: true
    }
  }

  updateDimensions = () => {
    this.setState({
      ...this.state,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }

  onResize = () => {
    this.updateDimensions()
  }

  async componentDidMount() {
    if( typeof window !== 'undefined' ) {
      window.addEventListener('resize', this.onResize, false)
    }
    setTimeout(() => this.setState({ ...this.state, loading: false }), 1500);
  }

  updateState = (int) => {
    this.setState({
      ...this.state,
      projectinfo: {
        index: int,
        open: true
      }
    })
  }

  closeProjectPage = () => {
    this.setState({
      ...this.state,
      projectinfo: {
        index: 1,
        open: false
      }
    })
  }

  render() {

    const { loading } = this.state;
    console.log(this.state)

    if(loading) { // if your app get render immediately, remove this block
      return null; // render null when app is not ready
    }

    return (
      <div className="background-container">
        <div className="video-container">
          <ReactPlayer
            playing
            loop
            url={[
              {src: hey, type: 'video/mp4'},
            ]}
            width='400px'
            style={{margin: '0 auto', marginTop: '-35px'}}
            // height='100px'
          />
          <div className="icons-container">
              <ul className="soc">
                <li><a href="https://www.instagram.com/obsidianstudios.co/" class="icon-15 instagram" title="Instagram"><svg viewBox="0 0 512 512"><g><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></g></svg><em></em></a></li>
                  <li><a href="#" class="icon-27 vimeo" title="Vimeo"><svg viewBox="0 0 512 512"><path d="M420.1 197.9c-1.5 33.6-25 79.5-70.3 137.8 -46.9 60.9-86.5 91.4-118.9 91.4 -20.1 0-37.1-18.5-51-55.6 -9.3-34-18.5-68-27.8-102 -10.3-37.1-21.4-55.7-33.2-55.7 -2.6 0-11.6 5.4-27 16.2L75.7 209.1c17-14.9 33.8-29.9 50.3-44.9 22.7-19.6 39.7-29.9 51.1-31 26.8-2.6 43.3 15.8 49.5 55 6.7 42.4 11.3 68.7 13.9 79 7.7 35.1 16.2 52.7 25.5 52.7 7.2 0 18-11.4 32.5-34.2 14.4-22.8 22.2-40.1 23.2-52.1 2.1-19.7-5.7-29.5-23.2-29.5 -8.3 0-16.8 1.9-25.5 5.7 16.9-55.5 49.3-82.4 97.1-80.9C405.5 130 422.2 153 420.1 197.9z"/></svg><em></em></a></li>
                {/* <li><a href="https://instagram.com" class="icon-instagram">Instagram</a></li>
                <li><a href="https://vimeo.com" class="icon-vimeo">Vimeo</a></li> */}
              </ul>
              {/* <i style={{color: 'white'}} className="fa fa-instagram fa-5x" aria-hidden="true"></i>
              <i style={{color: 'white'}} className="fa fa-vimeo-square fa-5x" aria-hidden="true"></i> */}
          </div>
          {/* <video controls>
            <source src="./test2.mp4" type="video/mp4"></source>
            I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
          </video> */}
          {/* <Construction /> */}
          {/* <Index closeProjectPage={ this.closeProjectPage } projectsData={ projectsData } updateState={this.updateState} projectinfo={ this.state.projectinfo } images={ images }/> */}
        </div>
      </div>
    );
  }
}

export default App;
