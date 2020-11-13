import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../stitches.config';

export const Navbar = () => {
    return (
        <NavbarDiv pos={{ initial: 'default', bp540: 'small' }}>
            <Link className="btn" to="/">
                <NavBtn initial={'A'} full={'About'} />
            </Link>
            <Link className="btn" to="/projects">
                <NavBtn initial={'P'} full={'Projects'} />
            </Link>
            <Link className="btn" to="/code">
                <NavBtn initial={'C'} full={'Code'} />
            </Link>
            <a href={'https://github.com/VincentWillats'} target="_blank" rel="noopener noreferrer">
                <Logo src={'/assets/GitHub-Mark-Light-120px-plus.png'} />
            </a>

            <a
                href={'https://www.linkedin.com/in/vincentwillats/'}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Logo src={'/assets/LI-In-Bug.png'} />
            </a>
            <a href={'mailto:vincent@willats.tech'} target="_blank" rel="noopener noreferrer">
                <Logo src={'/assets/iconfinder_112-gmail_email_mail_4202011.png'} />
            </a>
        </NavbarDiv>
    );
};

interface NavBtnProps {
    initial: string;
    full: string;
}

const NavBtn = ({ initial, full }: NavBtnProps) => {
    const [text, setText] = useState<string>(initial);
    return (
        <P
            onMouseOver={() => {
                setText(full);
            }}
            onMouseLeave={() => {
                setText(initial);
            }}
        >
            {text}
        </P>
    );
};

const NavbarDiv = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: '10%',
    top: '10%',
    zIndex: '1000',
    transition: 'all 0.3s',

    variants: {
        pos: {
            default: {
                left: '10%',
                top: '10%',
            },
            small: {
                left: '1%',
                top: '1%',
            },
        },
    },
});

const Logo = styled('img', {
    margin: '6px',
    width: '45px',
    height: 'auto',
    opacity: '0.6',
    transition: 'all 0.3s',
    ':hover': {
        opacity: '1',
    },
});

const P = styled('p', {
    padding: '8px',
    margin: '6px',
    fontSize: '40px',
    color: 'black',

    borderColor: 'black',
    borderWidth: '1px',
    borderRadius: '10px',
    borderStyle: 'solid',

    width: '45px',
    overflow: 'hidden',

    transition: 'all 0.5s',

    opacity: '0.5',

    ':hover': {
        opacity: '1',
        width: 'calc(100% - 16px)',
        backgroundColor: 'lightgrey',
    },
});
