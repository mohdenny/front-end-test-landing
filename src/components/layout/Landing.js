import React, { Fragment } from 'react';
import Hero from '../heros/Hero';

const Landing = () => {
    return (
        <Fragment>
            <div className="bg-red-600 ">  
                <div className="container mx-auto">
                    <Hero/>
                </div>
            </div>
                
            <div className="container mx-auto ">
                <div id="video" className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-4 h-auto w-full transform 2xl:-translate-y-72 xl:-translate-y-60 lg:-translate-y-48 md:-translate-y-36 sm:-translate-y-24">
                    <div className="bg-video-thumb bg-contain bg-no-repeat p-6 2xl:h-video-thumb-2xl xl:h-video-thumb-xl lg:h-video-thumb-lg md:h-video-thumb-md sm:h-video-thumb-sm text-white col-start-2 col-span-4">
                        <div className="bg-icon-player bg-no-repeat bg-left-bottom h-full" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Landing;