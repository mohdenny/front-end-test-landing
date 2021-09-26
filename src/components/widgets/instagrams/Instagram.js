import React from 'react';
import { styled } from '../../styles/Style';
import Event1 from './events/Event1';
import Event2 from './events/Event2';

const Instagram = () => {
    return (
        <div id="instagram" className="2xl:grid 2xl:grid-cols-12 2xl:gap-8 2xl:my-8 border-8 border-solid border-gray-800">
            <Event1 styled={styled}/>
            <Event2 styled={styled}/>
        </div>
    )
}

export default Instagram;