import { css, styled } from '../stitches.config';
import React, { Dispatch, SetStateAction } from 'react';

export interface ImgButtonsProps {
    listLength: number;
    selectedIndex: number;
    setIndex: Dispatch<SetStateAction<number>>;
}

export const ImgButtons = ({ listLength, selectedIndex, setIndex }: ImgButtonsProps) => {
    let imgButtons: JSX.Element[] = [];

    for (let i = 0; i < listLength; i++) {
        imgButtons.push(
            <ImgBtn selected={i === selectedIndex} onClick={() => setIndex(i)}>
                {i + 1}
            </ImgBtn>,
        );
    }
    return <ImgBtnWrap>{imgButtons}</ImgBtnWrap>;
};

const ImgBtnWrap = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    padding: '5px',
});

const animation = css.keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
});

const ImgBtn = styled('button', {
    backgroundColor: 'lightgrey',
    color: 'black',
    border: '0',
    borderWidth: '1px',
    borderColor: 'black',
    marginLeft: '1px',
    marginRight: '1px',
    transition: 'all 0.2s',

    ':hover': {
        animation: `${animation} 500ms`,
    },

    ':active': {
        transform: 'translate(2px, 2px)',
    },

    variants: {
        selected: {
            true: {
                backgroundColor: '#282a36',
                color: 'white',
            },
            false: {
                backgroundColor: 'lightgrey',
            },
        },
    },
});
