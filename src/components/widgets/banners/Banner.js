import React from "react";

const Banner = () => {
    return (
        <div id="banner" className="grid grid-cols-12 mb-8">
            <div id="text" className="bg-shape bg-no-repeat bg-contain h-presiden-banner col-start-3 col-end-11 ">
                <div id="text" className="bg-presiden-banner bg-no-repeat bg-contain h-presiden-banner grid grid-rows-auto col-start-3 col-end-11 text-white text-center">
                    <div className="row-start-2">
                        <p className="-mt-8">75 Tahun Indonesia Merdeka</p>
                        <p className="text-6xl">"BAGIMU NEGERI"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;