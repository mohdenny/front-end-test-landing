import React, { Fragment } from 'react';
import { styled } from '../styles/Style';

const Hero = () => {
    return (
        <Fragment>
            <div id="hero" className={`${styled.hero.xxl} ${styled.hero.xl} ${styled.hero.lg} ${styled.hero.md} ${styled.hero.sm} max-w-full`}>
                <div id="vector" className={`${styled.vector.xxl} ${styled.vector.xl} ${styled.vector.lg} ${styled.vector.md} ${styled.vector.sm} bg-vector-pattern bg-no-repeat md:bg-contain w-full text-center`}>
                    <div id="hero-body" className={`${styled.heroBody.xxl} ${styled.heroBody.xl} ${styled.heroBody.lg} ${styled.heroBody.md} ${styled.heroBody.sm} h-auto w-full`}>
                        <div id="logo" className="grid grid-cols-auto w-full text-center mb-2">
                            <div id="logo-bisnis-top" className={`${styled.logoBisnisTop.xxl} ${styled.logoBisnisTop.xl} ${styled.logoBisnisTop.lg} ${styled.logoBisnisTop.md} ${styled.logoBisnisTop.sm} px-2 bg-logo-bisnis-top bg-contain bg-no-repeat col-start-1`}/>
                            <div id="logo-indonesia-maju-top" className={`${styled.logoIndonesiaMajuTop.xxl} ${styled.logoIndonesiaMajuTop.xl} ${styled.logoIndonesiaMajuTop.lg} ${styled.logoIndonesiaMajuTop.md} ${styled.logoIndonesiaMajuTop.sm} px-2 bg-logo-indonesia-maju-top bg-contain bg-right bg-no-repeat col-end-12 col-span-2`}/>
                        </div>
                        <div id="hero-text" className={`${styled.heroText.xxl} ${styled.heroText.xl} ${styled.heroText.lg} ${styled.heroText.md} ${styled.heroText.sm} grid grid-rows-2 text-center text-white w-full h-full`}>
                            <div id="headline" className={`${styled.headline.xxl} ${styled.headline.xl} ${styled.headline.lg} ${styled.headline.md} ${styled.headline.sm} font-tahu `}>
                                Spirit Membangun Indonesia Maju !
                            </div>
                            <div id="sub-headline" className={`${styled.subHeadline.xxl} ${styled.subHeadline.xl} ${styled.subHeadline.lg} ${styled.subHeadline.md} ${styled.subHeadline.sm} h-full px-4 py-2 text-white font-gotham`}>
                                Di tengah pro kontra mengenai layak tidaknya Indonesia menyandang predikat negara maju,<br/> 
                                menjadi menarik untuk mengetahui seberapa jauh kemajuan yang dicapai setelah negara ini<br/>
                                merdeka selama 75 tahun. Apa peluang dan tantangan Indonesia menjadi negara maju di saat<br/>
                                wabah virus Corona bisa menyeret perekonomian nasional ke jurang resesi?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Hero;