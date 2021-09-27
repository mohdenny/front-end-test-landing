import React from "react";
import { styled } from '../../styles/Style';

const Banner = () => {
    return (
        <div id="banner" className={`${styled.banner.xxl} ${styled.banner.xl} ${styled.banner.lg} ${styled.banner.md} ${styled.banner.sm} ${styled.banner.mobile}`}>
            <div id="banner-text" className={`${styled.bannerText.xxl} ${styled.bannerText.xl} ${styled.bannerText.lg} ${styled.bannerText.md} ${styled.bannerText.sm} ${styled.bannerText.mobile}`}>
                <div id="banner-bg" className={`${styled.bannerBg.xxl} ${styled.bannerBg.xl} ${styled.bannerBg.lg} ${styled.bannerBg.md} ${styled.bannerBg.sm} ${styled.bannerBg.mobile}`}>
                    <div className="row-start-2">
                        <p className="2xl:-mt-8 xl:-mt-16">75 Tahun Indonesia Merdeka</p>
                        <p className="2xl:text-6xl xl:text-5xl">"BAGIMU NEGERI"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;