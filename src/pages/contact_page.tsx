import React from 'react';
import { styled } from '../stitches.config';

const ContactWrap = styled('div', {
    padding: '20px',
    display: 'flex',
    height: '1000px',
    justifyContent: 'flex-start',
});

export const Contact = () => {
    return <ContactWrap>CONTACT PAGE</ContactWrap>;
};
