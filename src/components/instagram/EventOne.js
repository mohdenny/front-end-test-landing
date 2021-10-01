import React, { Fragment } from 'react';
import event1 from '../../assets/images/instagram_1/bg-img.png';
import logoInstagram from '../../assets/images/instagram_1/logo-ig.png';
import logoLive from '../../assets/images/instagram_1/logo-live.png';
import logoIgTiny from '../../assets/images/instagram_1/logo-ig-tiny.png';
import speaker1Event1 from '../../assets/images/instagram_1/speaker1.png';
import speaker2Event1 from '../../assets/images/instagram_1/speaker2.png';

const EventOne = () => {
    return (
        <Fragment>
            <div className="grid grid-cols-1 text-center absolute z-20 2xl:w-29rem xl:w-27rem lg:w-21rem">
                <div className="mx-auto 2xl:mt-8 xl:mt-6 lg:mt-4 md:mt-16 sm:mt-8 mt-6">
                    <img src={logoInstagram} alt="logo-instagram" className="object-contain xl:h-full lg:h-8 md:h-16 sm:h-12 h-8"/>
                </div>
                <div className="mx-auto mt-2">
                    <img src={logoLive} alt="logo-live" className="object-contain xl:h-full lg:h-5 sm:h-full h-5"/>
                </div>
                <div className="xl:mt-8 lg:mt-4 sm:mt-8 mt-4">
                    <img src={logoIgTiny} alt="logo-ig-tiny" className="object-contain inline xl:h-full lg:h-4 md:h-full sm:h-5 h-3"/>
                    <span className="ml-2 lg:ml-1 text-white inline xl:text-base lg:text-xs md:text-lg sm:text-sm text-xs">@bisniscom</span>
                </div>
                    <div className="lg:mt-4 md:mt-8 sm:mt-4">
                    <p className="text-white xl:text-2xl lg:text-xl md:text-4xl sm:text-3xl text-lg font-bold">17 Agustus 2020</p>
                    <p className="text-white xl:text-sm lg:text-xs md:text-xl sm:text-base text-xs font-bold">11.00 wib</p>
                </div>
                <div className="2xl:mt-20 xl:mt-10 lg:mt-10 md:mt-20 sm:mt-10 px-5">
                    <p className="text-white xl:text-sm lg:text-xs md:text-lg sm:text-sm text-xs sm:mt-2 mt-10">SPIRIT MEMBANGUN INDONESIA</p>
                    <p className="text-white xl:text-xl lg:text-base xl:mx-6 md:text-3xl sm:text-xl text-sm px-4 font-bold">Mencerdaskan Kehidupan Bangsa Melalui Media</p>
                    <p className="mt-2 lg:mt-0 text-white xl:text-base lg:text-xs md:text-lg text-xs ">bersama</p>
                </div>
                <div className="grid grid-cols-2">
                    <div className="grid place-content-center h-full">
                        <img src={speaker1Event1} alt="speaker-1-event-1" className="sm:mt-0 -mt-1 mx-auto object-contain object-center xl:h-full lg:h-20 md:h-full sm:h-full h-20"/>
                        <div className="bg-red-600 p-1 h-auto w-24 mx-auto rounded -mt-2">  
                            <p className="text-white xl:text-sm text-xs">Narasumber</p>
                        </div>
                        <div className="mx-auto mt-1">  
                            <p className="text-white xl:text-sm lg:text-xs md:text-sm text-xs">Helmy Yahya</p>
                            <p className="text-white xl:text-sm lg:text-xs md:text-sm text-xs">(Praktisi Multimedia)</p>
                        </div>
                    </div>
                    <div className="grid place-content-center ">
                        <img src={speaker2Event1} alt="speaker-2-event-1" className="sm:mt-0 -mt-1 mx-auto object-contain object-center xl:h-full lg:h-20 md:h-full sm:h-full h-20"/>
                        <div className="bg-red-600 p-1 h-auto w-24 mx-auto rounded -mt-2">  
                            <p className="text-white xl:text-sm text-xs">Host</p>
                        </div>
                        <div className="mx-auto mt-2">  
                            <p className="text-white xl:text-sm lg:text-xs md:text-sm text-xs">David Eka Issetiabudi</p>
                            <p className="text-white xl:text-sm lg:text-xs md:text-sm text-xs">(Manager Konten Bisnis.com)</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={event1} alt="event-1" className="object-contain h-full w-full relative z-10 "/>
        </Fragment>
    )
}

export default EventOne;