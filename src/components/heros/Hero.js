import React, { Fragment } from 'react';
import { styled } from '../styles/Style';

const Hero = () => {
    return (
        <Fragment>
            <div id="hero" className={`${styled.hero.xxl} ${styled.hero.xl} ${styled.hero.lg} ${styled.hero.md} ${styled.hero.sm} ${styled.hero.mobile}`}>
                <div id="vector" className={`${styled.vector.xxl} ${styled.vector.xl} ${styled.vector.lg} ${styled.vector.md} ${styled.vector.sm} ${styled.vector.mobile}`}>
                    <div id="hero-body" className={`${styled.heroBody.xxl} ${styled.heroBody.xl} ${styled.heroBody.lg} ${styled.heroBody.md} ${styled.heroBody.sm} ${styled.heroBody.mobile} `}>
                        <div id="logo-body" className={`${styled.logoBody.xxl} ${styled.logoBody.xl} ${styled.logoBody.lg} ${styled.logoBody.md} ${styled.logoBody.sm} ${styled.logoBody.mobile}`}>
                            <div id="logo-bisnis-top" className={`${styled.logoBisnisTop.xxl} ${styled.logoBisnisTop.xl} ${styled.logoBisnisTop.lg} ${styled.logoBisnisTop.md} ${styled.logoBisnisTop.sm} ${styled.logoBisnisTop.mobile}`}/>
                            <div id="logo-indonesia-maju-top" className={`${styled.logoIndonesiaMajuTop.xxl} ${styled.logoIndonesiaMajuTop.xl} ${styled.logoIndonesiaMajuTop.lg} ${styled.logoIndonesiaMajuTop.md} ${styled.logoIndonesiaMajuTop.sm} ${styled.logoIndonesiaMajuTop.mobile}`}/>
                        </div>
                        <div id="hero-text" className={`${styled.heroText.xxl} ${styled.heroText.xl} ${styled.heroText.lg} ${styled.heroText.md} ${styled.heroText.sm} ${styled.heroText.mobile}`}>
                            <div id="headline" className={`${styled.headline.xxl} ${styled.headline.xl} ${styled.headline.lg} ${styled.headline.md} ${styled.headline.sm} ${styled.headline.mobile}`}>
                                Spirit Membangun Indonesia Maju !
                            </div>
                            <div id="sub-headline" className={`${styled.subHeadline.xxl} ${styled.subHeadline.xl} ${styled.subHeadline.lg} ${styled.subHeadline.md} ${styled.subHeadline.sm} ${styled.subHeadline.mobile}`}>
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