import React from 'react'
import '../js/index.js';
import $ from 'jquery';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Closebtn from '../components/Closebtn'
import Project from '../components/Project'



const Index = ({updateState, int}) => {

  console.log('test')

  function test() {
    updateState('1')
  }

  return(

    <div>

      <Project projectinfo={ projectinfo }/>

      <body>

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
                          <Link onClick={(e) => test() } className='fullprojectbtn' to="/project/1"><i className="fa fa-book"></i> <span className="fullproject-span" >Full Project</span></Link>
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
                      <Router>
                        <span>
                          <Link className='fullprojectbtn' to="/project"><i className="fa fa-book"></i> <span className="fullproject-span" >Full Project</span></Link>
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
                      <Router>
                        <span>
                          <Link className='fullprojectbtn' to="/project"><i className="fa fa-book"></i> <span className="fullproject-span" >Full Project</span></Link>
                        </span>
                      </Router>
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
                      <Router>
                        <span>
                          <Link className='fullprojectbtn' to="/project"><i className="fa fa-book"></i> <span className="fullproject-span" >Full Project</span></Link>
                        </span>
                      </Router>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </body>

  </div>
  )
}

export default Index
