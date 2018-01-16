import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import history from './History'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC4yjLS7jX18NDIZGnkEd-AfsUoJIpCtlE",
  authDomain: "obsidian-studios-1c21a.firebaseapp.com",
  databaseURL: "https://obsidian-studios-1c21a.firebaseio.com",
  projectId: "obsidian-studios-1c21a",
  storageBucket: "",
  messagingSenderId: "714004570978"
};
firebase.initializeApp(config);
export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();

const sendToConstruction = () => {
  console.log('someone clicked the button')
  history.push('/construction')
}
const sendToGalleryPage = () => {
  console.log('someone clicked the button')
  history.push('/gallery')
}
const sendToProfile = () => {
  console.log('someone clicked the button')
  history.push('/profile')
}


export default class DrawerClass extends React.Component {


  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  loginFacebook = async() => {
    const result = await auth().signInWithPopup(provider)
    console.log(result)

  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Menu"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={() => sendToConstruction()}>Home</MenuItem>
          <MenuItem onClick={() => sendToGalleryPage()}>Gallery</MenuItem>
          <MenuItem onClick={() => sendToProfile()}>Profile</MenuItem>
          <MenuItem onClick={() => this.loginFacebook()}>Login</MenuItem>
        </Drawer>
      </div>
    );
  }
}
