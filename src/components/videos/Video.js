import React from 'react';
import { styled } from '../styles/Style';

const Video = () => {
    return (
        <div id="video-body" className={`${styled.videoBody.xxl} ${styled.videoBody.xl} ${styled.videoBody.lg} ${styled.videoBody.md} ${styled.videoBody.sm} ${styled.videoBody.mobile} border-8 border-solid border-gray-800`}>
            <div id="video" className={`${styled.video.xxl} ${styled.video.xl} ${styled.video.lg} ${styled.video.md} ${styled.video.sm} ${styled.video.mobile}`}>
                <div id="icon-player" className={`${styled.iconPlayer.xxl} ${styled.iconPlayer.xl} ${styled.iconPlayer.lg} ${styled.iconPlayer.md} ${styled.iconPlayer.sm} ${styled.iconPlayer.mobile}`} />
            </div>
        </div>
    )
}

export default Video;