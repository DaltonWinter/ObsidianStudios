import React, {Component} from 'react';
import {Router,Route,Link,Switch} from 'react-router-dom'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import GraphicDesign from './GraphicDesign'
import Index from './Index'
import Construction from './Construction'
import Gallery from './Gallery'
import history from './History'
import ReactPlayer from 'react-player'
import Page from './Page'
import Form from './Form'
import Profile from './Profile'
import Login from './Login'

const images = [{
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

const projectsData = [{
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
    let index = parseInt(window.location.pathname.replace(/^\D+/g, ''))
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
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize, false)
    }
    setTimeout(() => this.setState({ ...this.state,
      loading: false
    }), 1500);
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

    // const {
    //   loading
    // } = this.state;
    // console.log(this.state)
    //
    // if (loading) { // if your app get render immediately, remove this block
    //   return null; // render null when app is not ready
    // }

    return (

      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

        <Router history={history}>
          <Switch>
            <Route path="/gallery" render={() => <Gallery />} />
            <Route path="/GraphicDesign" render={() => <GraphicDesign />} />
            <Route path="/Construction" render={() => <Construction />} />
              <Route path="/Profile" render={() => <Profile />} />
                <Route path="/Login" render={() => <Login />} />
            <Construction />
          </Switch>
        </Router>

      </MuiThemeProvider>

      // <div>
      //   // <Index closeProjectPage={ this.closeProjectPage } projectsData={ projectsData } updateState={this.updateState} projectinfo={ this.state.projectinfo } images={ images }/>
      // </div>


    );
  }
}

export default App;
