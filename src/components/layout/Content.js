import React from 'react';
import { styled } from '../styles/Style';

const Content = ({ children }) => {
    return (
        <div id="content" className={`container mx-auto px-8  ${styled.main.xxl} ${styled.main.xl} ${styled.main.lg} ${styled.main.md} ${styled.main.sm} ${styled.main.mobile}`}>
            {children}
        </div>
    )
}

export default Content;