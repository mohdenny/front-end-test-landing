import React, { Fragment } from 'react';
import './assets/styles/tailwind.css';
import patternHero from './assets/images/heros/pattern_hero.png';
import logoBisnis from './assets/images/heros/logo_bisnis_top.png';
import logoIndonesiaMaju from './assets/images/heros/logo_indonesia_maju_top.png';
import videoThumb from './assets/images/heros/video_thumb.png';
import event1 from './assets/images/instagram_1/bg-img.png';
import event2 from './assets/images/instagram_2/bg-img.png';
import banner from './assets/images/banner/presiden.png';

const App = () => {
  return (
    <Fragment> 
      <div className="relative -top-96 2xl:-top-80 border -mb-80">
        <div id="hero" className="bg-hero-shape h-auto w-full relative z-0 2xl:-top-24 xl:-top-10 lg:-top-36 sm:-top-72">
          <div className="relative 2xl:px-28 transform translate-y-full pt-8 px-20 z-20 border">
            <div className="grid grid-cols-12 border">
              <div className="col-start-1 col-end-2 h-6 w-full border">
                <img id="logo-bisnis" src={logoBisnis} alt="bisnis.com" className="object-contain  h-full w-full"/>
              </div>
              <div className="col-start-11 col-end-13 h-16 w-full border">
                <img id="logo-indonesia-maju" src={logoIndonesiaMaju} alt="indonesia-maju" className="object-contain object-right h-full w-full"/>
              </div>
            </div>
            <div id="headline" className="mt-20 border">
              <p className="font-tahu text-white text-center text-8xl">Spirit Membangun Indonesia Maju !</p>
            </div>
            <div id="sub-headline" className="px-52 mt-16 border">
              <p className="font-gotham text-white text-center text-sm">
                Di tengah pro kontra mengenai layak tidaknya Indonesia menyandang predikat negara maju, 
                menjadi menarik untuk mengetahui seberapa jauh kemajuan yang dicapai setelah negara ini merdeka selama 75 tahun. 
                Apa peluang dan tantangan Indonesia menjadi negara maju di saat wabah virus Corona bisa menyeret perekonomian nasional ke jurang resesi?
              </p>
            </div>
          </div>
          <img id="pattern-hero" src={patternHero} alt="pattern-hero" className="object-fill h-full w-full relative z-10"/>
        </div>
      </div>

      <div id="maincontent" className="container mx-auto py-8 2xl:px-72 px-40 transform -translate-y-96">
        <img id="video-thumb" src={videoThumb} alt="video-thumb" className="mx-auto mb-4 border"/> 

        <div id="instagram" className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 xl:px-1 mb-4 border">
            <div>
              <img src={event1} alt="event-1" className="object-cover h-full w-full"/>
            </div>
            <div>
              <img src={event2} alt="event-2" className="h-full w-full"/>
            </div>
        </div>

        <div id="banner" className="h-96 border">
          <div className="bg-red-600 h-auto">
            <img src={banner} alt="event-1" className="object-cover h-full w-full xl:px-1"/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
