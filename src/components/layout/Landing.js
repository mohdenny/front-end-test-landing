import React, { Fragment } from 'react';
import Hero from '../hero/Hero';
import Instagram from '../instagram/Instagram';
import Banner from '../banner/Banner';
import Video from '../video/Video';
import News from '../news/News';
import Sponsor from '../sponsor/Sponsor';
import Footer from '../footer/Footer';

const Landing = () => {
    return (
        <Fragment>
            <Hero/>

            <section id="maincontent" className="container mx-auto transform -translate-y-32 2xl:-translate-y-80 xl:-translate-y-72 lg:-translate-y-60 md:-translate-y-52 sm:-translate-y-36">
                <div className="py-8 px-7 2xl:px-72 xl:px-52 lg:px-40 md:px-24 sm:px-24">
                    <Video/>
                    <Instagram/>
                    <Banner/>
                    <News/>
                    <Sponsor/>
                </div>

                <Footer/>
            </section>
        </Fragment>
    )
}

export default Landing;