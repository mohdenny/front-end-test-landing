import React from "react";

const Event2 = ({ styled }) => {
    return (
        <div id="event-2" className={`${styled.event2.xxl} border-8 border-solid border-gray-800`}>
            <div className="grid grid-rows-12 h-full">
                <div className="bg-logo-ig-2 bg-no-repeat bg-bottom row-span-3 border-4 border-gray-800 border-solid">
                    bg-vector-1
                </div>
                <div className="bg-logo-live-2 bg-no-repeat bg-center border-4 border-gray-800 border-solid">
                    
                </div>
                <div className="grid grid-cols-12 border-4 border-gray-800 border-solid">
                    <div className="col-start-5 bg-logo-ig-tiny-2 bg-no-repeat bg-right">
                    </div>
                    <span className="ml-1 text-white my-auto">
                        @bisniscom
                    </span>
                </div>
                <div className="grid grid-rows-2 border-4 border-gray-800 border-solid">
                    <div className="text-white text-center text-2xl  border-4 border-gray-800 border-solid">
                        17 Agustus 2020
                    </div>
                    <div className="text-white text-center border-4 border-gray-800 border-solid">
                        11.00 wib
                    </div>
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
                        <div className="bg-bg-name-speaker2 bg-no-repeat bg-contain bg-center text-center text-white border-4 border-gray-800 border-solid">
                            Narasumber
                        </div>
                        <div className=" text-center text-white text-xs border-4 border-gray-800 border-solid">
                            Helmy Yahya<br/>(Praktisi Multimedia)
                        </div>
                    </div>
                    <div className="border-4 h-auto border-gray-800 border-solid">
                        <div className="bg-speaker-2-2 bg-no-repeat bg-contain bg-center h-speaker-2xl border-4 border-gray-800 border-solid">
                        </div>
                        <div className="bg-bg-name-speaker2 bg-no-repeat bg-contain bg-center text-center text-white border-4 border-gray-800 border-solid">
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