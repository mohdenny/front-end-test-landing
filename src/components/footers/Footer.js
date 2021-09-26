import React from "react";

const Footer = () => {
    return (
        <div id="footer" className=" grid grid-cols-12 h-32 text-center">
            <div className="bg-hr bg-contain bg-no-repeat h-4 w-full" />
            <div className="grid grid-rows-2 col-start-2 col-span-2 ">
                <div id="logo" className="bg-logo-bisnis-bottom h-20 bg-no-repeat bg-contain">
                </div>
                <div id="copyright" className="text-sm h-10">
                    Copyright © 2020 - Bisnis Indonesia
                </div>
            </div>
            <div id="logo" className="text-sm col-start-4 border font-bold my-auto">
                About
            </div>
            <div id="logo" className="text-sm border font-bold my-auto">
                Privacy Policy
            </div>
            <div id="logo" className="col-span-1 text-sm border font-bold my-auto">
                Code of Conduct
            </div>
            <div id="logo" className="text-sm border font-bold my-auto">
                Advertise with us
            </div>
            <div id="logo" className="text-sm border font-bold my-auto">
                Contact Us
            </div>
            <div id="logo" className="text-sm border font-bold my-auto">
                Career
            </div>
            <div className="grid grid-rows-2 col-start-11">
                <div id="logo" className="bg-top-arrow h-10 bg-no-repeat bg-bottom mt-10 bg-contain ">
                </div>
                <div id="copyright" className="text-sm h-10">
                    To top
                </div>
            </div>
        </div>
    )
}

export default Footer;