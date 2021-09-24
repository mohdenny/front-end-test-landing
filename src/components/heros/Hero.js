import React, { Fragment } from 'react';

const Hero = () => {
    return (
        <Fragment>
            <div id="hero" className="h-hero-lg max-w-full">
                <div id="shape_1" className="bg-red-600 h-full text-center">
                    <div id="vector" className="bg-hero-vector-pattern h-full text-center">
                        <div id="headline" className="h-auto w-full px-8 py-4">
                            <div id="logo" className="grid grid-cols-6 w-full h-full text-center mb-2">
                                <div className="bg-yellow-500 col-start-1 h-14 text-center">
                                    Logo Bisnis
                                </div>
                                <div className="bg-yellow-500 col-end-7 h-14 text-center">
                                    Logo Indonesia Maju
                                </div>
                            </div>
                            <div id="text" className="grid grid-rows-2 gap-2 w-full h-full text-center text-white">
                                <div className="h-full px-4 py-2 text-7xl text-center font-tahu">
                                    Spirit Membangun Indonesia Maju !
                                </div>
                                <div className="h-full px-4 py-2 text-center text-white font-gotham-medium">
                                    Di tengah pro kontra mengenai layak tidaknya Indonesia menyandang predikat negara maju,<br/> 
                                    menjadi menarik untuk mengetahui seberapa jauh kemajuan yang dicapai setelah negara ini<br/>
                                    merdeka selama 75 tahun. Apa peluang dan tantangan Indonesia menjadi negara maju di saat<br/>
                                    wabah virus Corona bisa menyeret perekonomian nasional ke jurang resesi?
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 h-72 transform translate-y-3">
                            <div className="bg-gray-900 text-white col-start-2 col-span-4">
                                Video
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Hero;