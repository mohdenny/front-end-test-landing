import React, { Fragment } from 'react';
import logoBankBtn from '../../assets/images/footers/logo-bank-btn.png';
import logoWaskita from '../../assets/images/footers/logo-waskita.png';

const Sponsor = () => {
    return (
        <Fragment>
            <div id="sponsor" className="h-full max-w-full">
                <div className="p-2 h-10 grid grid-cols-1">  
                    <p className="text-center">Didukung oleh</p>
                </div>
                <div className="grid lg:grid-cols-7 grid-cols-1 h-auto w-full p-4">
                    <div className="lg:col-start-3">
                        <img src={logoBankBtn} alt="logo-bank-btn" className="object-contain h-full mx-auto"/>
                    </div>
                    <div className="lg:col-start-5">
                        <img src={logoWaskita} alt="logo-waskita" className="object-contain h-full mx-auto"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Sponsor;