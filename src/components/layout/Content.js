import React from 'react';
import { styled } from '../styles/Style';

const Content = ({ children }) => {
    return (
        <div id="content" className={`${styled.content.xxl} ${styled.content.xl} ${styled.content.lg} ${styled.content.md} ${styled.content.sm} ${styled.content.mobile}`}>
            {children}
        </div>
    )
}

export default Content;