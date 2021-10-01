import React, { Fragment } from 'react';
import logoBisnis from '../../assets/images/heros/logo_bisnis_top.png';
import logoIndonesiaMaju from '../../assets/images/heros/logo_indonesia_maju_top.png';

const Hero = () => {
    return (
        <Fragment>
            <header id="hero" className="relative ">
                <div id="hero-shape" className="bg-hero-shape h-hero-shape-xs 2xl:h-hero-shape xl:h-hero-shape-xl lg:h-hero-shape-lg md:h-hero-shape-md sm:h-hero-shape-sm w-full relative z-0">
                    <div id="hero-pattern" className="bg-hero-pattern bg-no-repeat h-full 2xl:bg-center lg:bg-contain sm:bg-center sm:bg-contain bg-center bg-cover relative z-10 w-full"> 
                        <div className="relative container mx-auto py-2 px-6 2xl:px-28 xl:px-8 lg:py-6 lg:px-6 md:px-8 md:py-4 sm:py-3 sm:px-3 z-20">
                            <div className="grid grid-cols-12 ">
                                <div className="col-start-1 lg:col-end-2 md:col-end-3 col-end-4 h-6 w-full">
                                <img id="logo-bisnis" src={logoBisnis} alt="bisnis.com" className="object-contain h-full w-full"/>
                                </div>
                                <div className="col-start-10 col-end-13 sm:col-start-11 sm:col-end-23 h-16 w-full ">
                                <img id="logo-indonesia-maju" src={logoIndonesiaMaju} alt="indonesia-maju" className="object-contain object-right-top h-full w-full"/>
                                </div>
                            </div>
                            <div id="headline" className="2xl:mt-28 xl:mt-20 lg:mt-14 md:mt-8 sm:mt-8 mt-4">
                                <p className="font-tahu text-white text-center xl:text-8xl lg:text-7xl md:text-5xl sm:text-5xl text-4xl">Spirit Membangun Indonesia Maju !</p>
                            </div>
                            <div id="sub-headline" className="2xl:px-72 xl:px-64 lg:px-48 md:px-32 md:mt-10 lg:mt-10 sm:mt-5 sm:px-20 mt-4">
                                <p className="font-gotham text-white text-center xl:text-lg lg:text-sm md:text-xs sm:text-xs text-xs">
                                Di tengah pro kontra mengenai layak tidaknya Indonesia menyandang predikat negara maju, 
                                menjadi menarik untuk mengetahui seberapa jauh kemajuan yang dicapai setelah negara ini merdeka selama 75 tahun. 
                                Apa peluang dan tantangan Indonesia menjadi negara maju di saat wabah virus Corona bisa menyeret perekonomian nasional ke jurang resesi?
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Hero;