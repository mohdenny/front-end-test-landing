import React, { Fragment } from 'react';
import videoThumb from '../../assets/images/heros/video_thumb.png';

const Video = () => {
    return (
        <Fragment>
            <img id="video-thumb" src={videoThumb} alt="video-thumb" className=" mx-auto mb-4 rounded-md "/> 
        </Fragment>
    )
}

export default Video;