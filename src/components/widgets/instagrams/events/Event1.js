import React from "react";

const Event1 = ({ styled }) => {
    return (
        <div id="event-1" className={`${styled.event1.xxl} border-8 border-solid border-gray-800`}>
            <div className="grid grid-rows-auto h-full">
                <div className="bg-logo-ig-1 bg-no-repeat bg-bottom row-span-3 border-4 border-gray-800 border-solid">
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
                        <div className="bg-speaker-1-1 bg-no-repeat bg-contain bg-center h-speaker-2xl border-4 border-gray-800 border-solid">
                        </div>
                        <div className="bg-bg-name-speaker1 bg-no-repeat bg-contain bg-center text-center text-white border-4 border-gray-800 border-solid">
                            Narasumber
                        </div>
                        <div className=" text-center text-white text-xs border-4 border-gray-800 border-solid">
                            Helmy Yahya<br/>(Praktisi Multimedia)
                        </div>
                    </div>
                    <div className="border-4 h-auto border-gray-800 border-solid">
                        <div className="bg-speaker-2-1 bg-no-repeat bg-contain bg-center h-speaker-2xl border-4 border-gray-800 border-solid">
                        </div>
                        <div className="bg-bg-name-speaker1 bg-no-repeat bg-contain bg-center text-center text-white border-4 border-gray-800 border-solid">
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