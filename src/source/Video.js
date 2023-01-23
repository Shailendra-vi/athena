import React from 'react'
import video from "../content/Video.gif"
const Video = () => {
    return (
        <div className='img'>
            <img className='video' src={video} alt="gif" width="500" height="500">
            </img>
        </div>
    )
}

export default Video