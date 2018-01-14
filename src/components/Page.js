import React from 'react';
import './Gallery.css'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import history from './History'


const Page = () => {


  const tilesData = [
    {
      img: 'https://photos-2.dropbox.com/t/2/AAAddnWYvgV9tCn1URDXh7QEfVNc9vRiPQG8LreRBt65bA/12/729119053/jpeg/32x32/1/_/1/2/Flower%20render%20comp.jpg/EJyMu-0FGBsgBygH/26FXxHGU1k2a3XLhsJF0uwvvABxvidXoO2nlNibsKTM?size=1600x1200&size_mode=3',
      title: 'Graphic Design',
      author: 'Dylan Rose',
      featured: true,
    },
    {
      video: 'blob:https://www.dropbox.com/ebb44213-6727-498e-9c6e-b9536acfa9e4',
      title: '',
      author: 'pashminu',
      featured: true,
    },
    {
      img: 'images/grid-list/camera-813814_640.jpg',
      title: 'Photography',
      author: 'Danson67',
      featured: true,
    },
    {
      img: 'images/grid-list/morning-819362_640.jpg',
      title: 'Morning',
      author: 'fancycrave1',

    },
    {
      img: 'images/grid-list/hats-829509_640.jpg',
      title: 'Hats',
      author: 'Hans',
    },
    {
      img: 'images/grid-list/honey-823614_640.jpg',
      title: 'Honey',
      author: 'fancycravel',
    },
    {
      img: 'images/grid-list/vegetables-790022_640.jpg',
      title: 'Vegetables',
      author: 'jill111',
    },
    {
      img: 'images/grid-list/water-plant-821293_640.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
    {
      img: 'images/grid-list/water-plant-821293_640.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
    {
      img: 'images/grid-list/water-plant-821293_640.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
    {
      img: 'images/grid-list/water-plant-821293_640.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
  ];


console.log(window.location.pathname)
// /page/Graphic%20Design
// Graphic Design
let pathname = window.location.pathname
pathname = pathname.replace('/page/', '')
pathname = pathname.replace('%20', ' ')
console.log(pathname)

let tileObject

for (let object of tilesData) {
  console.log(object.title)
  console.log(pathname)
  if (object.title === pathname) {
    tileObject = object
  }
}

console.log(tileObject)

return (
  <div className="page">
    <h1>{tileObject.title}</h1>
    <img src={tileObject.img}></img> 
  </div>
)



}

export default Page
