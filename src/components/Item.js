import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../js/index.js';


const Item = ({image, updateState, projNumber}) => {

  function test() {
    updateState(projNumber)
  }

  return (
    <div className={image.class}>
      <div className="border">
        <div className="hover">
          <img src={image.imgUrl} alt=""></img>
          <div className="overlay">
            <div className="overlay-content">
              <div className="block-links">
                <i className="fa fa-play"></i> <span className="quickview-span" >Quick View</span>
                <Router>
                  <span>
                    <Link onClick={(e) => test() } className='fullprojectbtn' to={`/project/${projNumber}`}><i className="fa fa-book"></i> <span className="fullproject-span" >Full Project</span></Link>
                  </span>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
