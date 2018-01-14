import React from 'react'
import PropTypes from 'prop-types'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: this.props.values.firstName || 'Your name',
      company: this.props.values.company || 'Company name'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='firstName'>
          First Name
        </label>
        <input type='text' value={this.state.firstName} onChange={this.handleChange} name='firstName' />
        <label htmlFor='company'>
          Job Title
        </label>
        <input type='text' value={this.state.company} onChange={this.handleChange} name='company' />
        <button className='cta-primary' type='submit'>
          Save
        </button>
      </form>
    )
  }
}

Form.propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string,
    company: PropTypes.string,
  }).isRequired
}
