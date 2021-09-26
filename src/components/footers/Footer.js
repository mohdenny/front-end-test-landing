import React from "react";

const Footer = () => {
    return (
        <div id="footer" className=" grid grid-cols-12 h-32 text-center">
            <div className="bg-hr bg-contain bg-no-repeat col-start-2 col-span-2 h-4 w-full" />
            <div className="grid grid-rows-2 col-start-2 col-span-2 ">
                <div id="logo" className="bg-logo-bisnis-bottom h-20 bg-no-repeat bg-contain ">
                    Logo Bisnis
                </div>
                <div id="copyright" className=" h-10">
                    Logo Bisnis
                </div>
            </div>
            <div id="logo" className=" font-bold my-auto">
                About
            </div>
            <div id="logo" className=" font-bold my-auto">
                Privacy Policy
            </div>
            <div id="logo" className="col-span-2  font-bold my-auto">
                Code of Conduct
            </div>
            <div id="logo" className=" font-bold my-auto">
                Contact us
            </div>
            <div id="logo" className=" font-bold my-auto">
                Career
            </div>
            <div id="logo" className=" font-bold my-auto">
                Bank Btn Waskita
            </div>
            <div id="logo" className=" font-bold my-auto">
                Bank Btn Waskita
            </div>
        </div>
    )
}

export default Footer;