import React from "react";
import { styled } from '../styles/Style';

const PresentedBy = () => {
    return (
        <div id="presented-by" className={`${styled.presentedBy.xxl} ${styled.presentedBy.xl} ${styled.presentedBy.lg} ${styled.presentedBy.md} ${styled.presentedBy.sm} ${styled.presentedBy.mobile}`}>
            <div id="presented-by-body" className={`${styled.presentedByBody.xxl} ${styled.presentedByBody.xl} ${styled.presentedByBody.lg} ${styled.presentedByBody.md} ${styled.presentedByBody.sm} ${styled.presentedByBody.mobile}`}>
                <div id="presented-by-text" className={`${styled.presentedByText.xxl} ${styled.presentedByText.xl} ${styled.presentedByText.lg} ${styled.presentedByText.md} ${styled.presentedByText.sm} ${styled.presentedByText.mobile}`}>
                    Didukung oleh:
                </div>
                <div id="presented-by-logo" className={`${styled.presentedByLogo.xxl} ${styled.presentedByLogo.xl} ${styled.presentedByLogo.lg} ${styled.presentedByLogo.md} ${styled.presentedByLogo.sm} ${styled.presentedByLogo.mobile}`}>
                    <div id="presented-by-logo-body" className={`${styled.presentedByLogoBody.xxl} ${styled.presentedByLogoBody.xl} ${styled.presentedByLogoBody.lg} ${styled.presentedByLogoBody.md} ${styled.presentedByLogoBody.sm} ${styled.presentedByLogoBody.mobile}`}>
                        <div id="logo-bank-btn" className={`${styled.logoBankBtn.xxl} ${styled.logoBankBtn.xl} ${styled.logoBankBtn.lg} ${styled.logoBankBtn.md} ${styled.logoBankBtn.sm} ${styled.logoBankBtn.mobile}`} />
                        <div id="logo-waskita" className={`${styled.logoWaskita.xxl} ${styled.logoWaskita.xl} ${styled.logoWaskita.lg} ${styled.logoWaskita.md} ${styled.logoWaskita.sm} ${styled.logoWaskita.mobile}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PresentedBy;