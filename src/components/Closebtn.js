import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const Closebtn = ({closeProjectPage}) => {
  return (
    <Router>
      <Link onClick={closeProjectPage} to="/" className="closebtn">&times;</Link>
    </Router>
  )
}

export default Closebtn
