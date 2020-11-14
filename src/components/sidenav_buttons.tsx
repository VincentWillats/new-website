import React from 'react';
import { styled } from '../stitches.config';

export interface SideNaveButtonProps {
    prevButton: () => void;
    nextButton: () => void;
}

export const SideNavButtons = ({ prevButton, nextButton }: SideNaveButtonProps) => {
    return (
        <NavButtons>
            <button onClick={() => prevButton()}>{'<'}</button>
            <button onClick={() => nextButton()}>{'>'}</button>
        </NavButtons>
    );
};

export const NavButtons = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    padding: '1rem',
    top: '400px',
    transform: 'translateY(-50%)',
    zIndex: '999',

    button: {
        backgroundColor: '$accent02',
        borderRadius: '100%',
        width: '60px',
        height: '60px',
        border: '0',
        boxShadow: '2px 2px 5px 2px $accent03',

        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',

        transition: 'all 0.3s',
        opacity: '0.5',

        ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, .3)',
            opacity: '0.7',
        },

        ':active': {
            transform: 'translateY(4px)',
        },
    },
});
