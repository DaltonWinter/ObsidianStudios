import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton'
import Form, { Input, Fieldset} from 'react-bootstrap-form';
import { Container, Row, Col } from 'reactstrap';
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap'


class Login extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        email: '',
        password: ''
      }
    }
    loginUser = async(credentials) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },body:JSON.stringify(credentials)
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let email = document.getElementById('email-input').value
    let password = document.getElementById('password-input').value
    console.log(email, password)
    let credentials = {
      email,
      password
    }
    console.log(credentials)
    this.props.loginUser(credentials);
  }

    render() {
      return (
        <div></div>
      )
    }
  }

  export default Login
