import React from 'react'

import '../js/index.js';

import Closebtn from '../components/Closebtn.js'


const Project = ({closeProjectPage, projectinfo, projectsData}) => {

  const project = projectsData[projectinfo.index]

  function width() {

    const divStyle = {
      'width': '100%'
    }

    if (projectinfo.open === true) {
      divStyle['width'] = '100%'
    } else {
      divStyle['width'] = '0%'
    }

    return divStyle

  }

  return (

    <div id="myNav" className="overlay-page" style={width()}>

      <Closebtn closeProjectPage={ closeProjectPage }/>

      <div className="overlay-stuff">
        <h1>{`${project.title}`}</h1>
        <p></p>
      </div>

    </div>

  )
}

export default Project
