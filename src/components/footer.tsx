import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../stitches.config';

export const Footer = () => {
    return (
        <FooterDiv>
            <p>
                © 2020 - Willats.Tech - <Link to="/privacy">Privacy</Link>
            </p>
            <p>
                Mobile: <a href="tel:+61478147822">+61 478147822</a>
            </p>
            <p>
                Email: <a href="mailto:vincent@willats.tech">Vincent@Willats.tech</a>
            </p>
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
