import React, { Fragment } from 'react';
import banner from '../../assets/images/banner/presiden.png';

const Banner = () => {
    return (
        <Fragment>
            <div id="banner" className="mb-4 relative">
                <div className="bg-red-600 h-auto rounded-md relative z-0">
                    <div className="text-white grid grid-cols-1 h-full w-full absolute z-20">
                        <div className="text-center grid place-content-center text-white">
                            <p className="xl:text-xl lg:text-sm md:text-xs sm:text-xxs text-xxs font-gotham">75 Tahun Indonesia Merdeka</p>
                            <p className="font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-xl font-gotham">"BAGIMU NEGERI"</p>
                        </div>
                    </div>
                    <img src={banner} alt="event-1" className="object-contain h-full w-full xl:px-1 relative z-10 "/>
                </div>
            </div>
        </Fragment>
    )
}

export default Banner;