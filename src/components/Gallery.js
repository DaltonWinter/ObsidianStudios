import React from 'react';
import './Gallery.css'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import history from './History'
import MenuItem from 'material-ui/MenuItem';
import DrawerClass from './DrawerClass'

const Gallery = () => {



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
    title: 'Concert Photography',
    author: 'Danson67',
    featured: true,
  },
  {
    img: 'https://photos-5.dropbox.com/t/2/AACjEtSxDBpwN83QuPUZ9nEDAbQxki6QuE7Rf-LeJMylSw/12/729119053/jpeg/32x32/1/_/1/2/Photo%20Jan%2003%2C%2012%2022%2002%20PM.jpg/EJyMu-0FGCUgBygH/AwGiuGbZTm0g3jSQFBwp_5eGL_QeDXGS6s4uYW5aTh0?size=1600x1200&size_mode=3',
    title: 'Photo Shoots',
    author: 'fancycrave1',
    featured: true,

  },

];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GalleryGrid = () => (
  <div style={styles.root}>
    <GridList
      cols={3}
      cellHeight={350}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          onClick={() => history.push('/' + tile.title.replace(' ', ''))}
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(370,0,0,0.7) 0%,rgba(370,0,0,0.3) 0%,rgba(370,0,0,0) 0%)"
          cols={tile.featured ? 3 : 1}
          rows={tile.featured ? 1.2 : 1}
        >
    {tile.video ? <div><iframe width="100%" height="421px" src="https://www.youtube.com/embed/13hRZBxMDew" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div> : <img src={tile.img} />}

        </GridTile>
      ))}
    </GridList>
  </div>
);

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 700,
    overflowY: 'auto',
  },
};

return (
  <div className="gallery">
    <GalleryGrid />
    <DrawerClass />
  </div>
)



}

export default Gallery
