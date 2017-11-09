import React from 'react'
import '../js/index.js';
import $ from 'jquery';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Closebtn = () => {
  return (
    <Router>
      <Link to="/" className="closebtn">&times;</Link>
    </Router>
  )
}

const Index = () => {

  return (

<body>

<div id="myNav" className="overlay-page">

  <Closebtn />

  <div className="overlay-stuff">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>

</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


<div className="content">
  <div className="wrapper">
    <div className="item">
      <div className="border">
        <div className="hover">
          <img src="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4" alt=""></img>
          <div className="overlay">
            <div className="overlay-content">
              <div className="block-links">
                <i className="fa fa-play"></i> <span className="quickview-span" >Quick View</span>
                <Router>
                  <span>
                    <Link className='test' to="/portfolio"><i className="fa fa-book"></i> <span className="fullproject-span" >Full Project</span></Link>
                  </span>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="item-super-wide">
      <div className="border">
        <div className="hover">
          <img src="https://i.imgur.com/1sFNhXf.jpg" alt=""></img>
          <div className="overlay">
            <div className="overlay-content">
              <div className="block-links">
                <i className="fa fa-play"></i> <span className="quickview-span" >Quick View</span>
                <i className="fa fa-book"></i> <span className="fullproject-span" >Full Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="item-super-wide">
      <div className="border">
        <div className="hover">
          <img src="https://i.imgur.com/1sFNhXf.jpg" alt=""></img>
          <div className="overlay">
            <div className="overlay-content">
              <div className="block-links">
                <i className="fa fa-play"></i> <span className="quickview-span" >Quick View</span>
                <i className="fa fa-book"></i> <span className="fullproject-span" >Full Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="border">
        <div className="hover">
          <img src="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22539734_10210199970341060_5051456143057213633_n.jpg?oh=1c1fe7e889f95f4252c566f5fbbdd23f&oe=5A7897C4" alt=""></img>
          <div className="overlay">
            <div className="overlay-content">
              <div className="block-links">
                <i className="fa fa-play"></i> <span className="quickview-span" >Quick View</span>
                <i className="fa fa-book"></i> <span className="fullproject-span" >Full Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</body>
  )

}

export default Index
