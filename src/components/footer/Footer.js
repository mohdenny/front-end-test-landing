import React, { Fragment } from 'react';
import logoBisnisBottom from '../../assets/images/footers/logo-bisnis-bottom.png';

const Footer = () => {
    return (
        <Fragment>
            <div id="footer" className="h-full max-w-full">
                <div className="h-14 sm:mx-36 mx-4">
                    <div className="grid lg:grid-cols-12 sm:grid-cols-1 pt-4 pb-8 border-t-2 border-gray-300 border-solid">
                        <div className="xl:col-span-3 lg:col-span-2 sm:grid sm:place-content-center sm:justify-items-center grid place-content-center justify-items-center">
                            <img src={logoBisnisBottom} alt="logo-bisnis" className="object-contain object-center"/>
                            <p className="mt-4 text-xs text-gray-500 lg:justify-items-center">Copyright © 2020 - Bisnis Indonesia</p>
                        </div>
                        <div className="sm:hidden hidden lg:flex lg:flex-row lg:col-start-4 lg:col-span-8">
                            <div className="w-auto lg:py-8">
                                <p className="font-bold text-xs">About</p>
                            </div>
                            <div className="w-auto lg:py-8 2xl:ml-20 xl:ml-12 lg:ml-4">
                                <p className="font-bold text-xs">Privacy Policy</p>
                            </div>
                            <div className="w-auto lg:py-8 2xl:ml-20 xl:ml-12 lg:ml-4">
                                <p className="font-bold text-xs">Code of Conduct</p>
                            </div>
                            <div className="w-auto lg:py-8 2xl:ml-20 xl:ml-12 lg:ml-4">
                                <p className="font-bold text-xs">Advertise with us</p>
                            </div>
                            <div className="w-auto lg:py-8 2xl:ml-20 xl:ml-12 lg:ml-4">
                                <p className="font-bold text-xs">Contact Us</p>
                            </div>
                            <div className="w-auto lg:py-8 2xl:ml-20 xl:ml-12 lg:ml-4">
                                <p className="font-bold text-xs">Career</p>
                            </div>
                        </div>

                        <div className="lg:hidden md:grid md:grid-cols-2 md:mt-2 md:mb-2 grid grid-cols-2 mt-2 mb-2">
                            <div className="grid grid-rows-auto gap-2 place-content-center">
                                <div className="w-auto">
                                    <p className="font-bold text-xs">About</p>
                                </div>
                            <div className="w-auto 2xl:ml-14 xl:ml-9">
                                <p className="font-bold text-xs">Privacy Policy</p>
                            </div>
                            <div className="w-auto 2xl:ml-14 xl:ml-9">
                                <p className="font-bold text-xs">Code of Conduct</p>
                            </div>
                            </div>
                            <div className="grid grid-rows-auto gap-2 place-content-center">
                                <div className="w-auto 2xl:ml-14 xl:ml-9">
                                    <p className="font-bold text-xs">Advertise with us</p>
                                </div>
                                <div className=" w-auto 2xl:ml-14 xl:ml-9">
                                    <p className="font-bold text-xs">Contact Us</p>
                                </div>
                                <div className="w-auto 2xl:ml-14 xl:ml-9">
                                    <p className="font-bold text-xs">Career</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid place-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            <p className="text-xs text-gray-500">To top</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;