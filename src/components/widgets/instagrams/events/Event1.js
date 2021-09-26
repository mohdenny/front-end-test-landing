import React from "react";

const Event1 = ({ styled }) => {
    return (
        <div id="event-1" className={`${styled.event1.xxl} ${styled.event1.xl} ${styled.event1.lg} ${styled.event1.md} ${styled.event1.sm} ${styled.event1.mobile} border-8 border-solid border-gray-800`}>
            <div className="grid grid-rows-auto h-full">
                <div className={`${styled.logoIg.xxl} ${styled.logoIg.xl} ${styled.logoIg.lg} ${styled.logoIg.md} ${styled.logoIg.sm} ${styled.logoIg.mobile} border-4 border-gray-800 border-solid`}>
                </div>
                <div className="bg-logo-live-1 bg-no-repeat bg-center border-4 border-gray-800 border-solid">
                    
                </div>
                <div className="grid grid-cols-12 border-4 border-gray-800 border-solid">
                    <div className="col-start-5 bg-logo-ig-tiny-1 bg-no-repeat bg-right">
                    </div>
                    <span className="ml-1 text-white my-auto">
                        @bisniscom
                    </span>
                </div>
                <div className="text-white text-center text-2xl  border-4 border-gray-800 border-solid">
                    <p>17 Agustus 2020</p>
                    <p>11.00 wib</p>
                </div>
                <div className="text-white text-center text-xs border-4 border-gray-800 border-solid">
                    SPIRIT MEMBANGUN INDONESIA
                </div>
                <div className="text-white text-center border-4 border-gray-800 border-solid">
                    Mencerdaskan Kehidupan Bangsa<br/>Melalui Media
                </div>
                <div className="text-white text-center border-4 border-gray-800 border-solid">
                    bersama
                </div>
                <div className="border-4 grid grid-cols-2 border-gray-800 border-solid">
                    <div className="border-4 h-auto border-gray-800 border-solid">
                        <div className={`${styled.bgSpeaker1.xxl} ${styled.bgSpeaker1.xl} ${styled.bgSpeaker1.lg} ${styled.bgSpeaker1.md} ${styled.bgSpeaker1.sm} ${styled.bgSpeaker1.mobile} border-4 border-gray-800 border-solid`}>
                        </div>
                        <div className={`${styled.nameSpeaker.xxl} ${styled.nameSpeaker.xl} ${styled.nameSpeaker.lg} ${styled.nameSpeaker.md} ${styled.nameSpeaker.sm} ${styled.nameSpeaker.mobile} border-4 border-gray-800 border-solid`}>
                            Narasumber
                        </div>
                        <div className=" text-center text-white text-xs border-4 border-gray-800 border-solid">
                            Helmy Yahya<br/>(Praktisi Multimedia)
                        </div>
                    </div>
                    <div className="border-4 h-auto border-gray-800 border-solid">
                        <div className={`${styled.bgSpeaker2.xxl} ${styled.bgSpeaker2.xl} ${styled.bgSpeaker2.lg} ${styled.bgSpeaker2.md} ${styled.bgSpeaker2.sm} ${styled.bgSpeaker2.mobile} border-4 border-gray-800 border-solid`}>
                        </div>
                        <div className={`${styled.nameSpeaker.xxl} ${styled.nameSpeaker.xl} ${styled.nameSpeaker.lg} ${styled.nameSpeaker.md} ${styled.nameSpeaker.sm} ${styled.nameSpeaker.mobile} border-4 border-gray-800 border-solid`}>
                            Host
                        </div>
                        <div className=" text-center text-white text-xs border-4 border-gray-800 border-solid">
                            David Eka Issetiabudi<br/>(Manager Konten Bisnis.com)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event1;