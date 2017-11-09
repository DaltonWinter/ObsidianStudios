import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const Closebtn = () => {
  return (
    <Router>
      <Link to="/" className="closebtn">&times;</Link>
    </Router>
  )
}

export default Closebtn
