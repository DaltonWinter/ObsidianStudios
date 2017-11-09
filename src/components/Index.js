import React from 'react'
import '../js/index.js';
import $ from 'jquery';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Closebtn from '../components/Closebtn'
import Project from '../components/Project'
import Item from '../components/Item'

const Index = ({updateState, projectinfo, images, projectsData}) => {

  return(

    <div>

      <Project projectsData={ projectsData } projectinfo={ projectinfo }/>

      <body>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <div className="content">
        <div className="wrapper">

          { images.map((image, i) => <Item projNumber={ i } updateState={ updateState } image={ image } />) }

        </div>
      </div>

    </body>

  </div>
  )
}

export default Index
