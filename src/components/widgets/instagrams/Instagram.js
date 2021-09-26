import React from 'react';
import { styled } from '../../styles/Style';
import Event1 from './events/Event1';
import Event2 from './events/Event2';

const Instagram = () => {
    return (
        <div id="instagram" className={`${styled.instagram.xxl} ${styled.instagram.xl} ${styled.instagram.lg} ${styled.instagram.md} ${styled.instagram.sm} ${styled.instagram.mobile}`}>
            <Event1 styled={styled}/>
            <Event2 styled={styled}/>
        </div>
    )
}

export default Instagram;