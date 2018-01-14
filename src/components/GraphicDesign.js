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
    img: 'https://photos-4.dropbox.com/t/2/AACGIfOXxjr_V6gyQPVHsaFzFn88XPnCrli56AOaiSDBPw/12/729119053/jpeg/32x32/1/_/1/2/Raw%20Render.jpg/EJyMu-0FGCUgBygH/RdzmxNebSCu1O8DokDsSlcqv2jLObJh8wI_ROBnu5-w?size=800x600&size_mode=3',
    title: '',
    author: 'Dylan Rose',

  },
  {
    img: 'https://photos-3.dropbox.com/t/2/AADTv8eebyzo2MYsBiuHEKhSDJfycVJw8J1s5VQ3ckdlVg/12/729119053/jpeg/32x32/1/_/1/2/Nike%20Retro%20Air%20Max%20(0-00-01-05).jpg/EJyMu-0FGCUgBygH/dljREc6LNBctKvju3wf_FSA6Vo30UrTM5ZwHblDe3hg?size=1600x1200&size_mode=3',
    title: '',
    author: 'pashminu',

  },
  {
    img: 'https://photos-6.dropbox.com/t/2/AAAFfsI6nWp-Z_KVbULr9OfL5EBxy2OXpioOminPA1qw-w/12/729119053/jpeg/32x32/1/_/1/2/Camera.tif/EJyMu-0FGCUgBygH/9_vuW3bwoPZX5opVJSWLGBYTskORmxK8EQ3ApVmVr5w%2CcQ2cc_4E7rBtQs3e5jEf2-u8TTYVMmDHX_aihWtL9BI?size=1600x1200&size_mode=3',
    title: '',
    author: 'Danson67',
  },
  {
    img: 'https://photos-5.dropbox.com/t/2/AADeDDkUjnZt6pngWP6FcgzB2RC0FQIOg9rbA3pdjCPLbQ/12/729119053/jpeg/32x32/1/_/1/2/My%20Own%20Love%20COMP.jpg/EJyMu-0FGCUgBygH/JwfBTt8jX1vbVYVtVdSd1tqZCsWs8yisokIDHjvuH6Y?size=1600x1200&size_mode=3',
    title: '',
    author: 'fancycrave1',

  },
  {
    img: 'https://photos-1.dropbox.com/t/2/AABXVzRfOkegwtJw1eDJgseLpY9SJi3cQiarK_xtL-jQJw/12/729119053/jpeg/32x32/1/_/1/2/Painter.tif/EJyMu-0FGCUgBygH/CjhGiLcksoDxdlKthpP2eAak2uf-xP6BNqUq8UtJ-oE?size=1600x1200&size_mode=3',
    title: '',
    author: 'Hans',
  },
  {
    img: 'https://photos-3.dropbox.com/t/2/AAAf5_L-d1rJNDAfRWJTgD9R6hX2JC-YjsNiPKJG8a6FRA/12/729119053/jpeg/32x32/1/_/1/2/Turnstyle%20Blue.jpg/EJyMu-0FGCUgBygH/0zO7vSU7ovVEvIRWUraVsbqkTsSs-6OA0VuMAv6jVng?size=1600x1200&size_mode=3',
    title: '',
    author: 'fancycravel',
  },
  {
    img: 'https://photos-2.dropbox.com/t/2/AAAaGYrcPKn-c9XqvWRxM4CsRi_Sl5HtFNcPMiN1Wz6qzw/12/729119053/jpeg/32x32/1/_/1/2/Turnstyle%20Green.jpg/EJyMu-0FGCUgBygH/awnxIFRLAUWah5GVZcUEfKEDhV44Ab4zLEJyOBMEreU?size=1600x1200&size_mode=3',
    title: '',
    author: 'jill111',
  },
  {
    img: 'https://photos-2.dropbox.com/t/2/AABDzVL18KJqi_j1w71g5kcUbSg1apKbpb-0k8AJecUCEQ/12/729119053/jpeg/32x32/1/_/1/2/Turnstyle%20Pink.jpg/EJyMu-0FGCUgBygH/Ob_wsrrLDBxTpB926FWs2MBIIULAmZhUUnx10OLbulc?size=1600x1200&size_mode=3',
    title: '',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'https://photos-3.dropbox.com/t/2/AAABYk_eR1WzXJNX1PsJmYiuJFwm8V56h3w1vQjPgIfWvA/12/729119053/jpeg/32x32/1/_/1/2/Main%20Art%20-%20Copy.jpg/EJyMu-0FGCUgBygH/NUYzUeFf1PiRMtOhtPYurwmgQmZsx3hcGfgXak5xLuo?size=800x600&size_mode=3',
    title: '',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'https://photos-1.dropbox.com/t/2/AADz1NMmVxpvkbT1a-4ed_5XEcysrwbSG3gSmEVZ2-Xwbw/12/729119053/jpeg/32x32/1/_/1/2/Main%20Art%20BACK%20-%20Copy.jpg/EJyMu-0FGCUgBygH/xpEkLHmnnEU_kQwaB3XGkwRSqDqDlk0MrvgWM_EMm3A?size=1600x1200&size_mode=3',
    title: '',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'https://photos-5.dropbox.com/t/2/AACmgNbsU-Kz6J4cyYjmzljHOyRbC2TpvhnSWLzqTf1KHQ/12/729119053/jpeg/32x32/1/_/1/2/WHITE%20COMP.jpg/EJyMu-0FGCUgBygH/WrnvrmhBzVIL5SMflFKZKZ6xtKdeHOBflLCX2z3QcTM?size=1600x1200&size_mode=3',
    title: '',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'https://photos-6.dropbox.com/t/2/AABxTbGrFeIFvJj1jUn_e0PCYVE656hvGCnOIAt7kOf6yA/12/729119053/jpeg/32x32/1/_/1/2/BLACK%20COMP.jpg/EJyMu-0FGCUgBygH/_Kj2KhDZ8OgfJwWbshuCu9PzZREkpCorMp_nN9HXrHI?size=1600x1200&size_mode=3',
    title: '',
    author: 'BkrmadtyaKarki',
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
