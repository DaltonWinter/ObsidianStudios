import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../js/index.js';


const Item = ({image, updateState, projNumber}) => {

  function test() {
    updateState(projNumber)
  }

  function divStyle() {
    const secondRowTopCalc = ((window.innerWidth / 4.246031436031746) + 5)
    const thirdRowTopCalc = (window.innerWidth / 2.08955223880597)
    const divStyle = {

    }
    if (projNumber === 1) {
      divStyle['left'] = '43.7%'
    }
    if (projNumber === 2) {
      divStyle['top'] = `${secondRowTopCalc}px`
    }
    if (projNumber === 3) {
      divStyle['left'] = '56.3%'
      divStyle['top'] = `${secondRowTopCalc}px`
    }
    if (projNumber === 4) {
      divStyle['top'] = `${thirdRowTopCalc}px`
    }
    return divStyle
  }

  return (
    <div className={image.class} style={divStyle()}>
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
