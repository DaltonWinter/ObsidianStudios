import React from 'react'
import '../js/index.js';
import { BrowserRouter as Router, Route, Link, Switch } from'react-router-dom'



import Project from '../components/Project'
import Item from '../components/Item'

const Index = ({closeProjectPage, updateState, projectinfo, images, projectsData}) => {

  const renderJustProject = () => {
    return <Project projectsData={ projectsData } projectinfo={ projectinfo }/>
  }

  const renderAll = () => {
      return (
      <div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <Project closeProjectPage={ closeProjectPage } projectsData={ projectsData } projectinfo={ projectinfo }/>

        <div className="content">
          <div className="wrapper">

            { images.map((image, i) => <Item key={ i } projNumber={ i } updateState={ updateState } image={ image } />) }

          </div>
        </div>

      </div>
      )
  }

  return(
    <div>
      {renderAll()}
    </div>
  )
}

export default Index
