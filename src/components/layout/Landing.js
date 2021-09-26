import React, { Fragment } from 'react';
import Hero from '../heros/Hero';
import Video from '../videos/Video';

const Landing = () => {
    return (
        <Fragment>
            <div className="bg-red-600 ">  
                <div className="container mx-auto">
                    <Hero/>
                </div>
            </div>
                
            <div className="container mx-auto ">
                    <Video/>
            </div>
        </Fragment>
    )
}

export default Landing;