import React, { Fragment } from 'react';
import Hero from '../heros/Hero';

const Landing = () => {
    return (
        <Fragment>
            <div className="bg-gray-200">  
                <Hero/>
            </div>
        </Fragment>
    )
}

export default Landing;