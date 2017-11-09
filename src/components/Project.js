import React from 'react'

import '../js/index.js';
import $ from 'jquery';

import Closebtn from '../components/Closebtn.js'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const Project = ({projectinfo, projectsData}) => {

  console.log('project info')
  console.log(JSON.stringify(projectinfo))

  const project = projectsData[projectinfo.index]
  console.log(project)

  return (

    <div id="myNav" className="overlay-page">

      <Closebtn />

      <div className="overlay-stuff">
        <h1>{`${project.title}`}</h1>
        <p></p>
      </div>

    </div>

  )
}

export default Project
