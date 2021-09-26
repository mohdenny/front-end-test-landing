import React, { Fragment } from 'react';
import Hero from '../heros/Hero';
import Content from './Content';
import Video from '../videos/Video';
import Widget from '../widgets/Widget';
import PresentedBy from '../presentedby/PresentedBy';
import Footer from '../footers/Footer';

const Landing = () => {
    return (
        <Fragment>
            <div className="bg-red-600 ">  
                <div className="container mx-auto">
                    <Hero/>
                </div>
            </div>
                
            <Content>
                <Video/>
                <Widget/>
                <PresentedBy/>
                <Footer/>
            </Content>
        </Fragment>
    )
}

export default Landing;