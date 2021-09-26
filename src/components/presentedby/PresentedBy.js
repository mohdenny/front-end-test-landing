import React from "react";

const PresentedBy = () => {
    return (
        <div id="presented-by" className="grid grid-cols-12 border-8 border-solid border-gray-800 mb-32">
            <div id="presented-by-body" className="col-start-3 col-end-11 border-8 border-solid border-gray-800">
                <div id="text" className="border-8 border-solid text-center border-gray-800">
                    Didukung oleh:
                </div>
                <div id="logo-body" className="border-8 border-solid grid grid-cols-12 border-gray-800">
                    <div id="logo" className="col-start-5 col-end-9 grid grid-cols-2 border-8 border-solid border-gray-800">
                        <div className="bg-logo-bank-btn bg-contain bg-no-repeat bg-left h-logo-bank-btn" />
                        <div className="bg-logo-waskita bg-contain bg-no-repeat bg-right h-logo-waskita" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PresentedBy;