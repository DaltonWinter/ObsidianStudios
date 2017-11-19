import React from 'react'
import '../js/index.js';
import { BrowserRouter as Router, Route, Link, Switch } from'react-router-dom'



import Project from '../components/Project'
import Item from '../components/Item'

const Index = ({closeProjectPage, updateState, projectinfo, images, projectsData}) => {

  const renderJustProject = () => {
    return <Project projectsData={ projectsData } projectinfo={ projectinfo }/>
  }

  // function move(arr) {
  //
  //   //switch 0 and 1
  //   //switch 2 and 3
  //
  //   //moving 1 to place 0
  //   let moving = arr[1]
  //   var removed = arr.splice(0, 1, moving);
  //
  //   //moving 0 to place 1
  //   let test = removed[0]
  //   var removed2 = arr.splice(1, 1, test)
  //
  //   //moving 2 to place 3
  //   let moving2 = arr[2]
  //   let removed3 = arr.splice(3, 1 , moving2)
  //
  //   //moving 3 to place 2
  //   let test2 = removed3[0]
  //   var removed4 = arr.splice(2, 1, test2)
  //
  // }

const renderAll = () => {

      return (
      <div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <Project closeProjectPage={ closeProjectPage } projectsData={ projectsData } projectinfo={ projectinfo }/>

        <div className="content">
          <div className="wrapper">

            {/* {move(images)} */}

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
