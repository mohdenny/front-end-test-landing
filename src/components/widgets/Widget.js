import React from 'react';
import Instagram from './instagrams/Instagram';
import Banner from './banners/Banner';
import CardNews from './cardnews/CardNews';

const Widget = () => {
    return (
        <div id="widgets" className="border-8 border-solid grid grid-rows-auto h-full border-gray-800">
            <Instagram/>
            <Banner/>
            <CardNews/>
        </div>
    )
}

export default Widget;