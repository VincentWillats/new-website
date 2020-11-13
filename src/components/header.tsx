import React from 'react';
import { styled } from '../stitches.config';

export interface HeaderProps {
    header: string;
    subheader: string;
}

export const Header = ({ header, subheader }: HeaderProps) => {
    return (
        <HeaderWrap size={{ initial: 'default', bp880: 'small', bp540: 'smallest' }}>
            <h1>{header}</h1>
            <p>{subheader}</p>
        </HeaderWrap>
    );
};

const HeaderWrap = styled('div', {
    width: '90%',
    height: 'auto',
    backgroundColor: '$main',
    borderRadius: '10px',
    textAlign: 'center',
    padding: '10px 0',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    marginBottom: '10px',
    boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.53)',

    h1: {
        fontSize: '58px',
        fontStyle: 'normal',
    },
    p: {
        fontSize: '12px',
    },

    variants: {
        size: {
            default: {
                h1: {
                    fontSize: '58px',
                },
            },
            small: {
                h1: {
                    fontSize: '44px',
                },
            },
            smallest: {
                h1: {
                    fontSize: '28px',
                },
            },
        },
    },
});
