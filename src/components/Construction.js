import React from 'react'
import ReactPlayer from 'react-player'

const Construction = () => {
  return (
    <div className="video-container">
      <video src="test2.mp4" autoplay poster="posterimage.jpg">Sorry, your browser doesn't support embedded videos,
but don't worry, you can <a href="videofile.webm">download it</a>
and watch it with your favorite video player!
</video>
      {/* <ReactPlayer playing url={['test2.mp4']} /> */}
      {/* <ReactPlayer loop={true} url='https://www.youtube.com/watch?v=NRszRegp6hc&feature=youtu.be' width='400' height='400'playing /> */}
    </div>
  )
}

export default Construction
