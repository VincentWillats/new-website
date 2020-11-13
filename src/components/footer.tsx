import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../stitches.config';

export const Footer = () => {
    return (
        <FooterDiv>
            <p>
                © 2020 - VincentWillatsWebsite - <Link to="/privacy">Privacy</Link>
            </p>
            <p>Mobile - 0478147822</p>
            <p>Email  - Vincent@Willats.tech</p>
        </FooterDiv>
    );
};

const FooterDiv = styled('div', {
    width: '100%',
    backgroundColor: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    flexWrap: 'wrap',

    minHeight: '80px',

    borderTopColor: 'grey',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',

    p: {
        paddingLeft: '5px',
        paddingRight: '5px',
        margin: '8px',
    },
});
