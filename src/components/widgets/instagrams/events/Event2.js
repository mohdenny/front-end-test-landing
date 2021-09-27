import React from "react";

const Event2 = ({ styled }) => {
    return (
        <div id="event-2" className={`${styled.event2.xxl} ${styled.event2.xl} ${styled.event2.lg} ${styled.event2.md} ${styled.event2.sm} ${styled.event2.mobile} border-8 border-solid border-gray-800`}>
            <div className="grid grid-rows-auto h-full">
                <div className={`${styled.logoIg.xxl} ${styled.logoIg.xl} ${styled.logoIg.lg} ${styled.logoIg.md} ${styled.logoIg.sm} ${styled.logoIg.mobile}`}>
                </div>
                <div className="bg-logo-live-2 bg-no-repeat h-10 xl:h-6 bg-center">
                    
                </div>
                <div className="grid grid-cols-12 border-4 border-gray-800 border-solid">
                    <div className="col-start-5 bg-logo-ig-tiny-2 bg-no-repeat bg-right">
                    </div>
                    <span className="ml-1 text-white my-auto">
                        @bisniscom
                    </span>
                </div>
                <div className="text-white text-center text-2xl  border-4 border-gray-800 border-solid">
                    <p>17 Agustus 2020</p>
                    <p>15.00 wib</p>
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
                        <div className="bg-speaker-1-2 bg-no-repeat bg-contain bg-center h-speaker-2xl border-4 border-gray-800 border-solid">
                        </div>
                        <div className={`${styled.nameSpeaker.xxl} ${styled.nameSpeaker.xl} ${styled.nameSpeaker.lg} ${styled.nameSpeaker.md} ${styled.nameSpeaker.sm} ${styled.nameSpeaker.mobile}`}>
                            Narasumber
                        </div>
                        <div className=" text-center text-white text-xs border-4 border-gray-800 border-solid">
                            Helmy Yahya<br/>(Praktisi Multimedia)
                        </div>
                    </div>
                    <div className="border-4 h-auto border-gray-800 border-solid">
                        <div className="bg-speaker-2-2 bg-no-repeat bg-contain bg-center h-speaker-2xl border-4 border-gray-800 border-solid">
                        </div>
                        <div className={`${styled.nameSpeaker.xxl} ${styled.nameSpeaker.xl} ${styled.nameSpeaker.lg} ${styled.nameSpeaker.md} ${styled.nameSpeaker.sm} ${styled.nameSpeaker.mobile}`}>
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

export default Event2;